"""Run after `bundle exec jekyll build`: python -m unittest discover -s tests -v."""
from pathlib import Path
from html.parser import HTMLParser
import json
import unittest

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / '_site'

class Document(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.text = []
        self.links = []
        self.ids = set()
        self.feed(path.read_text(encoding='utf-8'))
    def handle_data(self, data):
        self.text.append(data)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        for attr in ('href', 'src'):
            if attr in attrs:
                self.links.append(attrs[attr])

class SiteTests(unittest.TestCase):
    def test_pages_are_static_and_translated(self):
        for prefix, name in [('', '김태이'), ('en/', 'Taeyi Kim')]:
            for slug in ['', 'research/', 'cv/', 'notes/']:
                path = SITE / prefix / slug / 'index.html'
                self.assertTrue(path.exists(), f'Jekyll must generate {prefix}{slug}')
                doc = Document(path)
                self.assertIn(name, ''.join(doc.text))
                self.assertNotIn('window.SITE_DATA', path.read_text(encoding='utf-8'))

    def test_research_preserves_every_publication_and_project(self):
        data = json.loads((ROOT / '_data/profile.json').read_text(encoding='utf-8'))
        for prefix, lang in [('', 'ko'), ('en/', 'en')]:
            doc = Document(SITE / prefix / 'research/index.html')
            text = ''.join(doc.text)
            for pub in data['publications']:
                self.assertIn(pub['title'], text)
            for project in data['projects']:
                title = project['title']
                self.assertIn(title[lang] if isinstance(title, dict) else title, text)

    def test_local_assets_and_navigation_resolve(self):
        from urllib.parse import urlsplit, unquote
        for path in SITE.rglob('*.html'):
            doc = Document(path)
            for link in doc.links:
                url = urlsplit(link)
                if url.scheme or url.netloc:
                    continue
                target = SITE / unquote(url.path).lstrip('/') if url.path.startswith('/') else path.parent / unquote(url.path)
                if not url.path:
                    target = path
                elif target.is_dir():
                    target /= 'index.html'
                self.assertTrue(target.exists(), f'{path.relative_to(SITE)} -> {link}')
                if url.fragment and target.suffix == '.html':
                    self.assertIn(unquote(url.fragment), Document(target).ids, f'{path} -> {link}')

if __name__ == '__main__':
    unittest.main()
