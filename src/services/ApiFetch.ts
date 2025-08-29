import { BASE_URI, tokenKey } from "../config";
import type { ApiFetchProps } from "../Interface";

export default async function apiFetch<T>(
  endpoint: string,
  { method, headers, body }: ApiFetchProps = {}
): Promise<T> {
  const token = sessionStorage.getItem(tokenKey);
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
      ...headers,
    };
  }

  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);

  // console.log('Token token token token token token token token', token);
  // console.log("Token guardado:", sessionStorage.getItem(tokenKey))

  let data;
  if (!response.ok) {

  const errorText = await response.text(); // aquí capturamos el detalle
  console.error("Respuesta del backend:", errorText);
  

    if (sessionStorage.getItem(tokenKey) && response.status === 401) {
      sessionStorage.removeItem(tokenKey);
      window.location.reload();
    }

    try {
      data = await response.json();
    } catch {
      throw new Error(response.statusText);
    }
    if (data.errors && typeof data.errors === "object") {
      const errors = Object.entries(data.errors);
      const messages = errors.map(([key, value]) => `${key}: ${value}`);
      throw new Error(messages.join(", "));
    }
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  try {
    data = await response.json();
  } catch {
    data = response.statusText;
  }

  return data as T;
}
