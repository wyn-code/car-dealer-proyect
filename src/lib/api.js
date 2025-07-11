// src/lib/api.js

/*
 * Función para hacer fetch a cualquier endpoint de tu backend.
 * @param {string} endpoint - Nombre del endpoint (ej: "marcas", "ofertas", "servicios").
 * @returns {Promise<any>} - Datos en formato JSON.
 */
/*
export async function fetchDesdeBackend(endpoint) {
    const res = await fetch(`https://localhost:7247/api/${endpoint}`, {
        cache: "no-store", // asegura datos actualizados
    });
    
    if (!res.ok) {
        throw new Error(`Error al obtener datos desde /api/${endpoint}`);
    }
    
    return res.json();
}

*/

/*
`https://localhost:7247/swagger/v1/swagger.json`





const BASE_URL = "https://dragonball-api.com/api";


export async function getAllCharacters() {
  const res = await fetch(BASE_URL + "/characters");
  if (!res.ok) {
    return { res: res.statusText, ok: res.ok };
  }
  const data = await res.json();
  return { res: data.items, ok: res.ok };
}

export async function getOneCharacterById(id) {
  const res = await fetch(${BASE_URL}/characters/${id});
  if (!res.ok) {
    return { res: res.statusText, ok: res.ok };
  }
  const data = await res.json();
  return { res: data, ok: res.ok };
}
*/