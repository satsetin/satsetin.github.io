export async function register(name, email, password) {
    const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data.user)); // Simpan data user
    localStorage.setItem('token', data.token); // Simpan token

    return data;
}
