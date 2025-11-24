export async function getSpeakers() {
  const url = "https://evento-innova-api-lsh2.onrender.com/speakers"; // cambia por tu endpoint real

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error cargando los ponentes");
  }

  return await response.json();
}
