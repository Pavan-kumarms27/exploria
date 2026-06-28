/* ===== Dark / Light Mode Toggle ===== */
const darkModeBtn = document.getElementById("dark-mode-btn");

function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️ Light";
  } else {
    document.body.classList.remove("dark-mode");
    darkModeBtn.textContent = "🌙 Dark";
  }
}

// Restore saved preference on page load
applyTheme(localStorage.getItem("theme") === "dark");

darkModeBtn.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  applyTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

/* ===== Booking Logic ===== */
let btn = document.querySelectorAll(".btn");
let sel_trip = document.getElementById("trip");
let num = document.getElementById("num");
let amount = document.getElementById("price");
let email = document.getElementById("email");
const email_veri = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let book_btn = document.getElementById("book_btn");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    let trip_data = button.getAttribute("data-trip");
    if (!trip_data) return; // skip buttons that aren't trip cards (e.g. book_btn)
    sel_trip.value = trip_data;
    let cost = parseInt(button.getAttribute("data-price"));
    let people = parseInt(num.value) || 1;
    amount.value = people * cost;
  });
});

num.addEventListener("input", () => {
  let selectedTrip = sel_trip.value;
  if (!selectedTrip) return;
  let button = document.querySelector(`[data-trip="${selectedTrip}"]`);
  if (!button) return;
  let cost = parseInt(button.getAttribute("data-price"));
  let people = parseInt(num.value) || 1;
  amount.value = people * cost;
});

book_btn.addEventListener("click", () => {
  let verification = email_veri.test(email.value.trim());
  if (!verification) {
    alert("Email is not correct 🥺");
  } else {
    alert(
      "Done....!! 🥳🎉🎉 The online link for payment will be sent to you shortly.",
    );
  }
});
