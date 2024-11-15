const URL = "https://striveschool-api.herokuapp.com/api/product/"
const nameInput = document.getElementById("name-1")
const descrinput = document.getElementById("desc-1")
const brandInput = document.getElementById("brand-1")
const priceInput= document.getElementById("price-1")
const imgUrlinput=document.getElementById("imageUrl-1")
const sendbtn=document.getElementById("btn-1")
const form =document.getElementById("formPost")

form.onsubmit = (e) => {
    e.preventDefault()
let addProduct = {
    name:nameInput.value,
    description:descrinput.value,
    brand:brandInput.value,
    imageUrl: imgUrlinput.value,
    price: priceInput.value

    
}
console.log(addProduct)
newProduct(addProduct);
}
const newProduct = (product) => {
    console.log(product)
    fetch(URL, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
            "Authorization":  " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGEyYThhZDEyOTAwMTU4NzZiYzIiLCJpYXQiOjE3MzE2NzI3NDUsImV4cCI6MTczMjg4MjM0NX0.hQAmMupWB28Kp7S6dj6b3TBOgCVWylWRDFBauiNZmF8"
        }
        })
    
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("errore richiesta");
        }
        
    
    })
    .then(data => {
        console.log("prodotto aggiunto: ", data )
        form.reset();
    })
    
    .catch(error => {
        console.log(error);
    })

} 






