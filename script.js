const seatsList = document.getElementsByClassName("kbd");

let selectedSeats = [];

let seatLeftElement = document.getElementById("seats-left");
let currentSeatLeft = parseInt(seatLeftElement.innerText);

for (const seat of seatsList) {
  seat.addEventListener("click", (e) => {
    const selectedSeat = e.target.id;
    if (selectedSeats.length < 4) {
      if (!selectedSeats.includes(selectedSeat)) {
        selectedSeats.push(selectedSeat);
        let seatDetails = document.getElementById(selectedSeat);
        seatDetails.classList.remove("bg-[#F7F8F8]");
        seatDetails.classList.add("bg-[#1DD100]");
        seatLeftElement.innerText = currentSeatLeft = currentSeatLeft - 1;

        //seat details shown
        if (selectedSeats.length != 0 && selectedSeats.length < 5) {
          if (selectedSeats.length == 1) {
            const seatDetailElement = document.getElementById("seat-detail1");
            const c2Element = seatDetailElement.querySelector("p:first-child");
            c2Element.textContent = selectedSeat;
            seatDetailElement.classList.remove("hidden");
          }
          if (selectedSeats.length == 2) {
            const seatDetailElement = document.getElementById("seat-detail2");
            const c2Element = seatDetailElement.querySelector("p:first-child");
            c2Element.textContent = selectedSeat;
            seatDetailElement.classList.remove("hidden");
          }
          if (selectedSeats.length == 3) {
            const seatDetailElement = document.getElementById("seat-detail3");
            const c2Element = seatDetailElement.querySelector("p:first-child");
            c2Element.textContent = selectedSeat;
            seatDetailElement.classList.remove("hidden");
          }
          if (selectedSeats.length == 4) {
            const seatDetailElement = document.getElementById("seat-detail4");
            const c2Element = seatDetailElement.querySelector("p:first-child");
            c2Element.textContent = selectedSeat;
            seatDetailElement.classList.remove("hidden");
          }
        }
        //seat details shown

        //count
        const seatCountElement = document.getElementById("seat-count");
        seatCountElement.innerText = selectedSeats.length;

        //  total Price
        const totalPriceElement = document.getElementById("totalPrice");
        let totalPrice = 550 * selectedSeats.length;
        totalPriceElement.innerText = totalPrice;

        //total calculation coupon
        const grandPriceElement = document.getElementById("grandPrice");
        let granPrice = 550 * selectedSeats.length;
        grandPriceElement.innerText = granPrice;
        
        //coupon cards

        document.getElementById("coupon").addEventListener("keyup", (event) => {
          const coupon = event.target.value;
          const applyButton = document.getElementById("apply-btn");
          console.log(coupon);


          //NEW15 Coupon
          if (selectedSeats.length == 4 && coupon == "NEW15") {
            applyButton.removeAttribute("disabled");
            applyButton.addEventListener("click", () => {
            const grandTotal = (550 * 4) - ((550 * 4) * (15 / 100));
            const grandPriceElement = document.getElementById("grandPrice");
            grandPriceElement.innerText = grandTotal;
            });
          } else {
                applyButton.setAttribute("disabled", true);
          }
          //Couple 20 Coupon
          if (selectedSeats.length == 4 && coupon == "Couple 20") {
            applyButton.removeAttribute("disabled");
            applyButton.addEventListener("click", () => {
            const grandTotal = (550 * 4) - ((550 * 4) * (20 / 100));
            const grandPriceElement = document.getElementById("grandPrice");
            grandPriceElement.innerText = grandTotal;
            });
          } else {
                applyButton.setAttribute("disabled", true);
          }
        });
      } else {
        alert("Seat already selected");
      }
    } else {
      alert("You can select maximum 4 seats");
    }
  });
}