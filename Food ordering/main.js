
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
        image: 'Images/spagti_pomodoro.jpg'
    },
    {
        name:"Taliatelles ar pesto",
        desc:"Roku griezti makaroni ar Dženovas bazilika pesto un Parmas sieru.",
        price: 5.50,
        image:"./Images/tagliatelle_pasta.jpg"
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
    `;
        container.appendChild(card);
    });
}

renderMenu();