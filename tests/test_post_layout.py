"""Build an unpublished fixture in an isolated directory, never the real blog."""
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest
from test_site import Document, ROOT

class PostLayoutTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        scratch = Path(os.environ.get('HERMES_SCRATCH', ROOT.parent / 'AppData/Local/hermes/cache/scratch'))
        if not scratch.exists():
            scratch = None
        cls.temp = tempfile.TemporaryDirectory(prefix='jekyll-test-', dir=scratch)
        cls.source = Path(cls.temp.name) / 'source'
        shutil.copytree(ROOT, cls.source, ignore=shutil.ignore_patterns('.git', '_site', 'screenshots', '__pycache__', 'node_modules', '.bundle'))
        posts = cls.source / '_posts'
        posts.mkdir(exist_ok=True)
        (posts / '2025-01-01-test.md').write_text('---\nlayout: post\ntitle: Test post\nlang: ko\n---\n\nTest body.\n', encoding='utf-8')
        ruby = os.environ.get('JEKYLL_RUBY') or shutil.which('ruby')
        if not ruby:
            raise RuntimeError('Ruby is required for the post integration test')
        command = [ruby, '-S', 'bundle', 'exec', 'jekyll']
        env = os.environ.copy()
        env['BUNDLE_GEMFILE'] = str(ROOT / 'Gemfile')
        result = subprocess.run(command + ['build'], cwd=cls.source, env=env, capture_output=True, timeout=60)
        if result.returncode:
            raise RuntimeError(result.stdout.decode(errors='replace') + result.stderr.decode(errors='replace'))

    @classmethod
    def tearDownClass(cls):
        cls.temp.cleanup()

    def test_post_has_skip_target(self):
        doc = Document(self.source / '_site/notes/2025/01/01/test/index.html')
        self.assertIn('content', doc.ids)

    def test_missing_translation_falls_back_to_english(self):
        for relative in ['404.html', 'notes/2025/01/01/test/index.html']:
            html = (self.source / '_site' / relative).read_text(encoding='utf-8')
            self.assertRegex(html, r'class="language-link" href="/en/"')
