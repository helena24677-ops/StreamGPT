import test from 'node:test';
import assert from 'node:assert/strict';
import { filterTitles, normalizeManifestUrl, toStremioInstallUrl, isValidManifest } from '../src/core.js';

test('filters titles by query and media type without mutating source list', () => {
  const items = [{ name: 'Nosferatu', type: 'Filme', year: 1922 }, { name: 'Cosmos', type: 'Série', year: 1980 }];
  const result = filterTitles(items, { query: 'cos', type: 'Série' });
  assert.deepEqual(result.map(x => x.name), ['Cosmos']);
  assert.equal(items.length, 2);
});

test('normalizes only http and https addon manifest URLs', () => {
  assert.equal(normalizeManifestUrl(' https://addons.example/manifest.json '), 'https://addons.example/manifest.json');
  assert.equal(normalizeManifestUrl('javascript:alert(1)'), null);
  assert.equal(normalizeManifestUrl('not a url'), null);
});

test('builds Stremio install deep link preserving manifest path', () => {
  assert.equal(toStremioInstallUrl('https://addons.example/path/manifest.json'), 'stremio://addons.example/path/manifest.json');
});

test('accepts only manifest-shaped addon metadata', () => {
  assert.equal(isValidManifest({ id: 'community.example', version: '1.0.0', name: 'Example', resources: ['catalog'], types: ['movie'] }), true);
  assert.equal(isValidManifest({ name: 'Not an addon' }), false);
});
