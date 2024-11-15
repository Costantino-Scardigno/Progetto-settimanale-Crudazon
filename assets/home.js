
const URL = "https://striveschool-api.herokuapp.com/api/product/";

const homePage = function () {
    fetch(URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGEyYThhZDEyOTAwMTU4NzZiYzIiLCJpYXQiOjE3MzE2NzI3NDUsImV4cCI6MTczMjg4MjM0NX0.hQAmMupWB28Kp7S6dj6b3TBOgCVWylWRDFBauiNZmF8",
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Errore richiesta");
            }
        })
        .then((arrcar) => {
            const row = document.getElementById("contcard");
            arrcar.forEach((car) => {
                const col = document.createElement("div");
                col.className = "col-md-4 col-lg-3";
                col.id = `product-${car._id}`; 

                const card = document.createElement("div");
                card.className = "card ";

                const imgCard = document.createElement("img");
                imgCard.className = "card-img-top";
                imgCard.src = car.imageUrl;

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";

                const nameCard = document.createElement("h5");
                nameCard.className = "card-title";
                nameCard.innerText = car.name;

                const descriptioncard = document.createElement("p");
                descriptioncard.className = "card-text";
                descriptioncard.innerText = car.description;

                const brand = document.createElement("p");
                brand.innerText = car.brand;

                const price = document.createElement("p");
                price.innerText = `€ ${car.price}`;

                const btnModCard = document.createElement("a");
                btnModCard.className = "btn btn-primary";
                btnModCard.innerText = "Modifica";

                btnModCard.addEventListener("click", () => {
                    window.location.href = `edit.html?id=${car._id}`; 
                });

                const btnDelete = document.createElement("button"); 
                btnDelete.className = "btn btn-danger m-4";
                btnDelete.innerText = "Elimina";

                // Listener per il pulsante "Elimina"
                btnDelete.addEventListener("click", () => {
                    deleteProduct(car._id, col); 
                });

                row.appendChild(col);
                col.appendChild(card);
                card.appendChild(imgCard);
                card.appendChild(cardBody);
                cardBody.appendChild(nameCard);
                cardBody.appendChild(descriptioncard);
                cardBody.appendChild(brand);
                cardBody.appendChild(price);
                cardBody.appendChild(btnModCard);
                cardBody.appendChild(btnDelete);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

// Funzione per eliminare un prodotto
const deleteProduct = (id, element) => {
    fetch(`${URL}${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGEyYThhZDEyOTAwMTU4NzZiYzIiLCJpYXQiOjE3MzE2NzI3NDUsImV4cCI6MTczMjg4MjM0NX0.hQAmMupWB28Kp7S6dj6b3TBOgCVWylWRDFBauiNZmF8",
        },
    })
        .then((response) => {
            if (response.ok) {
                console.log("Prodotto eliminato con successo!");
                element.remove(); 
            } else {
                throw new Error(`Errore durante l'eliminazione: ${response.status}`);
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

window.onload = () => {
    homePage();
};















