import { optionsIMDB100 } from "./apiConfig";

async function apiCall(options) {
  const op = {
    method: options.method,
    headers: {
      "X-RapidAPI-Key": options.apiKey,
      "X-RapidAPI-Host": options.host,
    },
  };
  try {
    const response = await fetch(options.url, op);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}

function getIMDB100() {
  return apiCall(optionsIMDB100);
}

export { getIMDB100 };
