export async function fetchProducts() {
  const token = localStorage.getItem('token');
  
  const response = await fetch('http://localhost:8080/api/products', {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${token}`,
      }
  });

  if (!response.ok) {
      throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return data;
}

export async function createProduct(name, description, price) {
  const token = localStorage.getItem('token');
  
  const response = await fetch('http://localhost:8080/api/products', {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, price })
  });

  if (!response.ok) {
      throw new Error('Failed to create product');
  }

  const data = await response.json();
  return data;
}

