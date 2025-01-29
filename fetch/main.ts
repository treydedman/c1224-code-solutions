interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

// define asynchronous function to fetch data on users
async function fetchUsers(): Promise<void> {
  try {
    // await the fetch request
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // response status
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // await JSON parsing
    const users = (await response.json()) as User;
    // const users: User[] = await response.json();

    // log successful fetch of data
    console.log(users);
  } catch (error) {
    // log errors during fetch of data
    console.error('Error;', error);
  }
}

fetchUsers();

// define asynchronous function to fetch data from PokeAPI
async function fetchPoke(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const poke: Pokemon = await response.json();
    console.log(poke);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchPoke();
