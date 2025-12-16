const base_url = "https://randomuser.me/api/";

export async function fetchRandomUser() {
    const response = await fetch(base_url)

    if(!response.ok) {
        throw new Error(`Failed to fetch user. Response status: ${response.status}`)
    }

    const data = await response.json();
    console.log(data)
    return data.results[0];
}