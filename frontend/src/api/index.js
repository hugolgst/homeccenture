const API_URL = process.env.REACT_APP_API_URL

export const registerUser = async (data) => {
    return await fetch(`${API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response => response.json())
}