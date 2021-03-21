const API_URL = 'http://192.168.1.2:8080'

export const registerUser = async (data) => {
    return await fetch(`${API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response => response.json())
}

export const getSuggestion = async () => {
    return await fetch(`${API_URL}/suggestion`, {
        headers: {
            'Authorization': localStorage.getItem('homeccenture-token')
        }
    }).then(response => response.json())
}