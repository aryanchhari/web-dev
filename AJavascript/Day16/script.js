let container = document.getElementById('productContainer');

fetch("http://localhost:3003/demoproducts")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    data.forEach(function(product) {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>₹${product.price}</p>
                <button>Buy now</button>
            </div>
        `;
    });
})
.catch(function(error) {
    console.error('Error fetching products:', error);
})