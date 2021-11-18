
const films = document.getElementById("movie");
const availableSeat = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const film = document.getElementById("film");
const totalPrice = document.getElementById("total");
const container = document.querySelector(".container");

let price = films.options[films.selectedIndex].value;

window.addEventListener("load", () =>{
    updateInfo(price);
});


films.addEventListener("change", e =>{
    let price = e.target.value;
    updateInfo(price);
});

container.addEventListener("click", e =>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
    }
    let price = films.options[films.selectedIndex].value;
    updateInfo(price);
})

const updateInfo = (filmPrice) =>{
    let selectedSeats = document.querySelectorAll(".row .seat.selected");
    let selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    film.innerText = films.options[films.selectedIndex].innerText.split('(')[0];
    totalPrice.innerText = selectedSeatsCount * parseFloat(filmPrice);

}