export function filterTitles(items, { query = '', type = 'Todos' } = {}) {
  const q = String(query).trim().toLocaleLowerCase('pt-BR');
  return items.filter(item => (type === 'Todos' || item.type === type) &&
    `${item.name} ${item.genre ?? ''} ${item.year ?? ''} ${item.status ?? ''}`.toLocaleLowerCase('pt-BR').includes(q));
}

export function normalizeManifestUrl(value) {
  try {
    const url = new URL(String(value).trim());
    if (!['http:', 'https:'].includes(url.protocol) || !url.hostname) return null;
    return url.href;
  } catch { return null; }
}

export function toStremioInstallUrl(value) {
  const url = normalizeManifestUrl(value);
  if (!url) return null;
  const parsed = new URL(url);
  return `stremio://${parsed.host}${parsed.pathname}${parsed.search}${parsed.hash}`;
}

export function isValidManifest(value) {
  return Boolean(value && typeof value === 'object' &&
    typeof value.id === 'string' && value.id.length > 0 &&
    typeof value.version === 'string' && typeof value.name === 'string' &&
    Array.isArray(value.resources) && Array.isArray(value.types));
}
