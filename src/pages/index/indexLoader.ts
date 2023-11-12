export default function indexLoader() {
  const url = `${import.meta.env.VITE_URL}/`;
  return fetch(url);
}
