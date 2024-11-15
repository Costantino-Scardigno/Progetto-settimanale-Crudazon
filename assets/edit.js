const URL = "https://striveschool-api.herokuapp.com/api/product/";
const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGEyYThhZDEyOTAwMTU4NzZiYzIiLCJpYXQiOjE3MzE2NzI3NDUsImV4cCI6MTczMjg4MjM0NX0.hQAmMupWB28Kp7S6dj6b3TBOgCVWylWRDFBauiNZmF8";


const params = new URLSearchParams(window.location.search);
const productId = params.get("id");


const form = document.getElementById("form");
const nameInput = document.getElementById("name-1");
const descriptionInput = document.getElementById("desc-1");
const brandInput = document.getElementById("brand-1");
const priceInput = document.getElementById("price-1");
const imageUrlInput = document.getElementById("imageUrl-1");


fetch(`${URL}${productId}`, {
    headers: {
        "Authorization": key,
    },
})
    .then((response) => response.json())
    .then((product) => {
        nameInput.value = product.name;
        descriptionInput.value = product.description;
        brandInput.value = product.brand;
        priceInput.value = product.price;
        imageUrlInput.value = product.imageUrl;
    })
    .catch((error) => console.error("Errore nel recupero del prodotto:", error));


form.onsubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
        name: nameInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        price: parseFloat(priceInput.value),
        imageUrl: imageUrlInput.value,
    };

    fetch(`${URL}${productId}`, {
        method: "PUT",
        headers: {
            "Authorization": key,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
    })
        .then((response) => {
            if (response.ok) {
                alert("Prodotto modificato con successo!");
                window.location.href = "home.html"; 
            } else {
                throw new Error("Errore durante l'aggiornamento");
            }
        })
        .catch((error) => console.error("Errore:", error));
};
