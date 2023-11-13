export default function indexLoader() {
  const url = `${import.meta.env.VITE_URL}/`;
  console.log(url);
  
  return fetch(url);
}
