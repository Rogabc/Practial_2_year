
console.log("JavaScript is working!");


function openCart(){
    document.getElementById('cartModal').style.display = 'block';
}

function closeCart(){
    document.getElementById('cartModal').style.display = 'none';
}

function openCheckout(){
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('deliveryModal').style.display = 'block';
}

function closeDelivery(){
    document.getElementById('deliveryModal').style.display = 'none';
}

window.onclick = (event) => {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        closeCart();
    }
}

function FoodCategory(category) {
    console.log("Izvēlētā kategorijal", category);
}

document.querySelectorAll(".Food-category").forEach(button =>{
    button.addEventListener("click", () =>{
        const selectedCategory = button.dataset.category;
        FoodCategory(selectedCategory);
    });
});

function Confirm() {
    document.getElementById("deliveryForm").addEventListener("submit", (event) => {
        event.preventDefault();



        const UserData = {
            name: document.getElementById("name").value,
            address: document.getElementById("address").value,
            postalIndex: document.getElementById("postalIndex").value,
            town: document.getElementById("town").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value

        }


        if(!isValidName(UserData.name)){
            alert("Nederīgs vārds.")
            return;
        }

        if(!isValidPIndex(UserData.address)){
            alert("Nederīgs pasta indeks.")
            return
        }

        if(!isValidTown(UserData.town)){
            alert("Nederīga pilsēta.")
        }
        if (!isValidEmail(UserData.email)) {
            alert("Nederīgs e-pasts");
            return;
        }

        if (!isValidPhone(UserData.phone)) {
            alert("Nederīgs telefona numurs.");
            return;
        }



        for (let i in UserData) {
            console.log(i + ": " + UserData[i]);
        }
    })

    function isValidPIndex(pIndex){
        const pIndexRegex = /^LV-\d{4}$|^\d{4}$/;
        return pIndexRegex.test(pIndex);
    }

    function isValidTown(Town){
        const TownRegex = /^[A-Za-zĀāĒēĪīŪūĶķĻļĢģŅņŠšŽžČč\- ]+$/;
        return TownRegex.test(Town);
    }

    function isValidName(name) {
        const nameRegex = /^[A-Za-zĀāĒēĪīŪūĶķĻļĢģŅņŠšŽžČč\-]+$/; //izņem simbolus un ciparus no vārda
        return nameRegex.test(name);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // neprasiet man kā strādā regex
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^(\+371)?\d{8}$/;// neprasiet man kā strādā regex
        return phoneRegex.test(phone);
    }
}



const cart = [];

// template for new items
// name:"",
// desc:"",
// price: 5.50,
// image:""

const templates =[
    {
        name: "Spageti ar tomātu mērci",
        desc: "Klasiski spageti ar lēni vārītu tomātu mērci un svaigu baziliku.",
        price: 6.99,
        image: 'Images/spagti_pomodoro.jpg',
        id: 1
    },
    {
        name:"Taliatelles ar pesto",
        desc:"Roku griezti makaroni ar Dženovas bazilika pesto un Parmas sieru.",
        price: 5.50,
        image:"./Images/tagliatelle_pasta.jpg",
        id: 2
    }

]


//uztaisa modularu resti preks katra produkta
function renderMenu() {
    const container = document.getElementById("menuContainer");
    templates.forEach(item => {
        const card = document.createElement("div");
        card.className = "food-card";
        card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="price">€${item.price}</div>
      <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
    `;

        const btn = card.querySelector(".add-to-cart");
        btn.addEventListener("click", () => addToCart(item));
        container.appendChild(card);
    });
}

renderMenu();

function addToCart(item){
    cart.push(item);
    renderCart()
}

function renderCart(){
    const cartContainer = document.querySelector(".CartItems");
    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
        <span>${item.name} - €${item.price}</span>
        <button class="remove-item" data-index="$${index}"></button>
        `;
        cartContainer.appendChild(cartItem);
    })
    document.querySelectorAll(".cart-items").forEach(button =>{
        button.addEventListener("click", () =>{
            const index = button.getAttribute("data-index");
            removeFromCart(index);
        })
    })

    updateTotal();
}

function removeFromCart(index){
    cart.splice(index, 1);
    renderCart();
}


function updateTotal(){
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    document.getElementById("cart-total-sum").innerHTML = `Total: €${total.toFixed(2)}`;
}