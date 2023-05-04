const API_URL = 'http://localhost:9000/RestaurantService/api';

export async function getAllUsers() {
    const response = await fetch(`${API_URL}/users`);
    return await response.json();
}

export async function createUserAccount(data) {
    const response = await fetch(`${API_URL}/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        mode: 'cors'
      })
    if (response.ok) {
        return await response.json();
    }
}

export async function getUser(username) {
    const data = {
        username: username
    }
    const response = await fetch(`${API_URL}/user`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        mode: 'cors'
      })
    return await response.json();
}

export async function login(username, password) {
    const response = await fetch(`${API_URL}/login/${username}/${password}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors'
      })
    return await response.json();
}
