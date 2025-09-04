const ticketPrice = document.getElementById("price-value");
const tickets = document.getElementById("tickets-selled");
const sells = document.getElementById("sells-money");
const progressBar = document.getElementById("p_bar");
const sellControll = document.getElementById("input-sell");

const price = 64;

ticketPrice.innerText = `$${price}`;

function update_sells() {
    currentSells = sellControll.value;
    update_tickets(currentSells);
    update_money(currentSells);
    progressBar.value = currentSells;
}

function update_tickets(sell) {
    tickets.innerText = sell;
}

function update_money(sell) {
    let earns = sell * price;
    sells.innerText = `$${earns}`;
}

sellControll.addEventListener("input", update_sells);