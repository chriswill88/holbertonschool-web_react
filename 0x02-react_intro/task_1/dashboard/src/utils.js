export function getFullYear() {
  const d = new Date();
  return d.getFullYear(); 
}

export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

