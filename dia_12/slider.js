const percentText = document.getElementById("current");
const sliderEl = document.getElementById("slider");

update_counter()

function update_counter() {
    percentText.innerText = sliderEl.value;
}

sliderEl.addEventListener("input", update_counter);
