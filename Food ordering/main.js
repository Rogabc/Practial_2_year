
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


function Confirm() {
    document.getElementById("deliveryForm").addEventListener("submit", (event) => {
        event.preventDefault();



        const UserData = {
            name: document.getElementById("name").value,
            address: document.getElementById("address").value,
            town: document.getElementById("town").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value

        }


        if(!isValidName(UserData.name)){
            alert("Nederīgs vārds.")
            return;
        }


        else if(!isValidTown(UserData.town)){
            alert("Nederīga pilsēta.")
        }
        else if (!isValidEmail(UserData.email)) {
            alert("Nederīgs e-pasts");
            return;
        }

        else if (!isValidPhone(UserData.phone)) {
            alert("Nederīgs telefona numurs.");
            return;
        }



        for (let i in UserData) {
            console.log(i + ": " + UserData[i]);
        }
    })


    function isValidTown(Town){
        const TownRegex = /^[A-Za-zĀāĒēĪīŪūĶķĻļĢģŅņŠšŽžČč\- ]+$/;
        return TownRegex.test(Town);
    }

    function isValidName(name) {
        const nameRegex = /^[A-Za-zĀāĒēĪīŪūĶķĻļĢģŅņŠšŽžČč\-\s]+$/; //izņem simbolus un ciparus no vārda
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

    closeDelivery()
}



const cart = [];

/*
template for new items
name:"",
desc:"",
price: 5.50,
category: "",
id:3
image:""
*/
const templates =[
        // FAST-FOOD
        {
            name: "Klasiskais burgeris",
            desc: "Sulīgs liellopa gaļas burgers ar sieru, tomātiem un mājas mērci.",
            price: 6.50,
            image: "Images/b3.jpg",
            category: "fast-food",
            id: 1
        },
        {
            name: "Vistas nageti",
            desc: "Kraukšķīgi vistas gabaliņi ar mērcīti pēc izvēles.",
            price: 4.20,
            image: "Images/v4.jpg",
            category: "fast-food",
            id: 2
        },
        {
            name: "Čīzburgers",
            desc: "Klasisks burgers ar kausētu sieru, gurķiem un kečupu.",
            price: 5.00,
            image: "Images/b5.jpg",
            category: "fast-food",
            id: 3
        },
        {
            name: "Fri kartupeļi",
            desc: "Zeltaini, kraukšķīgi kartupeļi ar sāli.",
            price: 2.50,
            image: "Images/f6.jpg",
            category: "fast-food",
            id: 4
        },
        {
            name: "Hotdogs ar cīsiņu",
            desc: "Maizītē cepts cīsiņš ar sinepēm un kečupu.",
            price: 3.00,
            image: "Images/h7.jpg",
            category: "fast-food",
            id: 5
        },

        // ITALIAN
        {
            name: "Spageti ar tomātu mērci",
            desc: "Klasiski spageti ar lēni vārītu tomātu mērci un svaigu baziliku.",
            price: 6.99,
            image: "Images/spagti_pomodoro.jpg",
            category: "italian",
            id: 6
        },
        {
            name:"Taliatelles ar pesto",
            desc:"Roku griezti makaroni ar Dženovas bazilika pesto un Parmas sieru.",
            price: 5.50,
            image:"./Images/tagliatelle_pasta.jpg",
            category: "italian",
            id: 7
        },
        {
            name:"Rigatoni ar Boloņas mērci",
            desc:"Dobās makaroni bagātīgā, lēni gatavotā liellopa un tomātu mērcē.",
            price: 5.50,
            image:"Images/m8.jpg",
            category: "italian",
            id: 8
        },
        {
            name:"Penne ar pikanto tomātu mērci",
            desc:"Īsi makaroni ar pikantu ķiploku-tomātu mērci un čili pārslām.",
            price: 5.00,
            image:"Images/m9.jpg",
            category: "italian",
            id: 9
        },
        {
            name:"Fusilli ar sēņu mērci",
            desc:"Vītņveida makaroni krēmīgā sēņu mērcē ar aromātiskiem garšaugiem.",
            price: 5.80,
            image:"Images/m10.jpg",
            category: "italian",
            id: 10
        },

        // ASIAN
        {
            name: "Ramen nūdeles ar vistu",
            desc: "Japāņu buljona zupa ar nūdelēm, vārītu olu un vistas gaļu.",
            price: 7.50,
            image: "Images/r11.jpg",
            category: "asian",
            id: 11
        },
        {
            name: "Ceptas nūdeles ar dārzeņiem",
            desc: "Sojas mērcē ceptas nūdeles ar svaigiem dārzeņiem.",
            price: 6.00,
            image: "Images/n12.jpg",
            category: "asian",
            id: 12
        },
        {
            name: "Terijaki vistas bļoda",
            desc: "Grilēta vistas fileja ar terijaki mērci un rīsiem.",
            price: 7.00,
            image: "Images/t13.jpg",
            category: "asian",
            id: 13
        },
        {
            name: "Saldskābā cūkgaļa",
            desc: "Kraukšķīga cūkgaļa saldskābā mērcē ar ananāsiem.",
            price: 7.20,
            image: "Images/c14.jpg",
            category: "asian",
            id: 14
        },
        {
            name: "Sushi komplekts (8 gab.)",
            desc: "Svaigs suši izlase ar lašu, gurķi un krēmsieru.",
            price: 8.50,
            image: "Images/s15.jpg",
            category: "asian",
            id: 15
        },

        // MEXICAN
        {
            name: "Tako ar liellopu gaļu",
            desc: "Kraukšķīgs tako ar maltu gaļu, sieru un salsu.",
            price: 5.20,
            image: "Images/t16.jpg",
            category: "mexican",
            id: 16
        },
        {
            name: "Quesadilla ar sieru",
            desc: "Apcepta tortilja ar izkusušu sieru un dārzeņiem.",
            price: 4.80,
            image: "Images/q17.jpg",
            category: "mexican",
            id: 17
        },
        {
            name: "Burrito ar vistas gaļu",
            desc: "Lielā tortilja ar rīsiem, pupiņām un grilētu vistas fileju.",
            price: 6.70,
            image: "Images/b18.jpg",
            category: "mexican",
            id: 18
        },
        {
            name: "Nachos ar sieru un salsu",
            desc: "Kraukšķīgas tortiljas ar izkusušu sieru un mājās gatavotu salsu.",
            price: 4.30,
            image: "Images/n19.jpg",
            category: "mexican",
            id: 19
        },
        {
            name: "Fajita ar cūkgaļu",
            desc: "Tortilja ar ceptu cūkgaļu, papriku un sīpoliem.",
            price: 6.20,
            image: "Images/f20.jpg",
            category: "mexican",
            id: 20
        },

        // MEAT
        {
            name: "Grilēts liellopa steiks",
            desc: "Sulīgs steiks ar sviesta garšvielām un ceptiem kartupeļiem.",
            price: 12.00,
            image: "Images/g21.jpg",
            category: "meat",
            id: 21
        },
        {
            name: "Cepta cūkgaļas karbonāde",
            desc: "Tradicionāla karbonāde ar marinētiem kāpostiem un kartupeļiem.",
            price: 9.50,
            image: "Images/c22.jpg",
            category: "meat",
            id: 22
        },
        {
            name: "Vistas fileja BBQ mērcē",
            desc: "Grilēta vistas fileja ar BBQ mērci un dārzeņu piedevu.",
            price: 8.70,
            image: "Images/v23.jpg",
            category: "meat",
            id: 23
        },
        {
            name: "Liellopa frikadeles mērcē",
            desc: "Mājās gatavotas frikadeles tomātu mērcē ar kartupeļu biezeni.",
            price: 7.60,
            image: "Images/f24.jpg",
            category: "meat",
            id: 24
        },
        {
            name: "Cepti vistas spārniņi",
            desc: "Asie spārniņi ar mērču izlasi un seleriju.",
            price: 6.90,
            image: "Images/c25.jpg",
            category: "meat",
            id: 25
        }
]



const container = document.getElementById("menuContainer");


let filteredTemplates = [];
let selectedCategory = null
let currentCategory = null;


document.querySelectorAll(".Food-category").forEach(button =>{
    button.addEventListener("click", () =>{
        selectedCategory = button.dataset.category;

        if(selectedCategory === ""){
            selectedCategory = null;
        }

        renderMenu();
    });
});




//uztaisa modularu resti preks katra produkta
function renderMenu() {

    if (selectedCategory !== currentCategory || filteredTemplates.length === 0) {
        currentCategory = selectedCategory;

        if (selectedCategory === null) {
            filteredTemplates = templates; // No filtering needed
        } else {
            filteredTemplates = templates.filter(item => item.category === selectedCategory);
        }
    }

    container.innerHTML = "";
    const templateCount = filteredTemplates.length;
    // Use document fragment to minimize DOM manipulation
    const fragment = document.createDocumentFragment();

    // Loop with cached length
    for (let i = 0; i < templateCount; i++) {
        const item = filteredTemplates[i];

        // Create card element
        const card = document.createElement("div");
        card.className = "food-card";

        // Use template literals efficiently
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="price">€${item.price.toFixed(2)}</div>
            <span class="add-to-cart" data-id="${item.id}">Pievienot Grozam</span>
        `;

        // Add event listener efficiently
        const btn = card.querySelector(".add-to-cart");
        btn.addEventListener("click", () => addToCart(item));

        // Append to fragment instead of DOM
        fragment.appendChild(card);
    }

    // Single DOM update
    container.appendChild(fragment);
}

setTimeout(() => {
    renderMenu();
}, 100);

function addToCart(item){
    cart.push(item);
    renderCart()
}

function renderCart(){
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
        <span>${item.name} - €${item.price.toFixed(2)}</span>
        <span class="remove-item" data-index="${index}">&times;</span>
        `;
        cartContainer.appendChild(cartItem);
    })


    document.querySelectorAll(".remove-item").forEach(button =>{
        button.addEventListener("click", () =>{
            console.log("clicked");
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
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const pvn = subtotal * 0.21;
    const total = subtotal + pvn;
    document.getElementById("cart-total-sub").innerHTML = `Bez pvn: €${subtotal.toFixed(2)}`;
    document.getElementById("cart-total-pvn").innerHTML = `Ar pvn:  €${total.toFixed(2)}`;


}