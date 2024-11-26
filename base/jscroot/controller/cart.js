export async function addToCart(productId, quantity) {
    const token = localStorage.getItem('token');
    
    const response = await fetch('http://localhost:8080/api/cart', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId, quantity })
    });

    if (!response.ok) {
        throw new Error('Failed to add to cart');
    }

    const data = await response.json();
    return data;
}

export async function fetchCart() {
    const token = localStorage.getItem('token');
    
    const response = await fetch('http://localhost:8080/api/cart', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch cart');
    }

    const data = await response.json();
    return data;
}

export async function updateCartItem(cartItemId, newQuantity) {
    const token = localStorage.getItem('token');
    
    const response = await fetch('http://localhost:8080/api/cart/item', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart_item_id: cartItemId, quantity: newQuantity })
    });

    if (!response.ok) {
        throw new Error('Failed to update cart item');
    }

    const data = await response.json();
    return data;
}

export async function removeCartItem(cartItemId) {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`http://localhost:8080/api/cart/item/${cartItemId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    if (!response.ok) {
        throw new Error('Failed to remove item from cart');
    }

    const data = await response.json();
    return data;
}

