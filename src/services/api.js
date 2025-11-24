export async function getSpeakers() {
  const url = "https://tu-api.com/speakers"; // cambia por tu endpoint real

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error cargando los ponentes");
  }

  return await response.json();
}
