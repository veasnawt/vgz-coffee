let coffeeList = [
    { name: "Ice Latte", desc: "Lorem ipsum mico ita mi cha ko olito aku cinta kamu", img: "image/ice-latte.png" },
    { name: "Capuccino", desc: "Lorem ipsum mico ita mi cha ko olito aku cinta kamu", img: "image/cappuccino.png" },
    { name: "Expresso", desc: "Lorem ipsum mico ita mi cha ko olito aku cinta kamu", img: "image/expresso.png" }
]

const coffeeListElement = document.getElementById("coffee-list-area");

let menuHTML = "";

for(let j = 0; j < 6; j++) {
    for (let i = 0; i < coffeeList.length; i++) {
        menuHTML += `<div class="coffee-card">
            <img class="coffee-img" src="${coffeeList[i].img}" alt="${coffeeList[i].name}">
            <h3 class="coffee-name">${coffeeList[i].name}</h3>
            <p class="coffee-desc">${coffeeList[i].desc}</p>
        </div>`;
    }
}

coffeeListElement.innerHTML = menuHTML;
