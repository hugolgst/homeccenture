const API_URL = 'http://localhost:8000'

export const registerUser = async (data) => {
    return await fetch(`${API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response => response.json())
}