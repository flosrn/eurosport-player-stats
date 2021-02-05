import { API_URL } from "utils/constants";

async function fetchAPI(query = {}) {
  const res = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getPlayers() {
  const data = await fetchAPI(
    `
    {
      headToHead {
        firstname
        lastname
        shortname
        sex
        picture {
          url
        }
        country {
          picture  {
            url
          }
          code
        }
        stats {
          rank
          points
          weight
          height
          age
          last
        }
      }
    }
  `
  );
  return data?.headToHead;
}
