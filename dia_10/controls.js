const channels = [
    "https://www.youtube.com/embed/D0LsnT2Iz48",
    "https://www.youtube.com/embed/K6JRiDi96ME",
    "https://www.youtube.com/embed/6nkeYt_SXzY"

];

let lastChannel = channels[0];

const payButton = document.getElementById("b_play");
const nextButton = document.getElementById("b_next");
const prevButton = document.getElementById("b_prev");
const tvScreen = document.getElementById("tv_img");

payButton.addEventListener("click", function() {
    if (tvScreen.classList.contains("poweroff")) {
        tvScreen.classList.remove("poweroff");
        tvScreen.src = lastChannel;
    } else {
        tvScreen.classList.add("poweroff");
        tvScreen.src = "";
    }
});

nextButton.addEventListener("click", function() {
    if (!tvScreen.classList.contains("poweroff")) {
        next_channel();
        tvScreen.src = lastChannel;
    }
});

prevButton.addEventListener("click", function() {
    if (!tvScreen.classList.contains("poweroff")) {
        prev_channel();
        tvScreen.src = lastChannel;
    }
});

function next_channel() {
    current_channel = parseInt(channels.indexOf(lastChannel));
    total_channels = parseInt(channels.length);
    if (current_channel + 1 < total_channels) {
        current_channel += 1;
        lastChannel = channels[current_channel];
    } else {
        lastChannel = channels[0];
    }
}

function prev_channel() {
    current_channel = parseInt(channels.indexOf(lastChannel));
    console.log(current_channel);
    total_channels = parseInt(channels.length);
    if (current_channel - 1 < 0) {
        lastChannel = channels[total_channels - 1];
    } else {
        current_channel -= 1;
        lastChannel = channels[current_channel]
    }
}
