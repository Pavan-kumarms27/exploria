document.addEventListener("DOMContentLoaded", () => {
  /* ===== Core UI Controls & Theme Toggles ===== */
  const darkModeBtn = document.getElementById("dark-mode-btn");

  /**
   * Applies application state parameters to change system theme elements
   * @param {Boolean} isDark
   */
  function applyTheme(isDark) {
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.documentElement.classList.add("dark-mode");
      if (darkModeBtn) darkModeBtn.textContent = "☀️ Light";
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.classList.remove("dark-mode");
      if (darkModeBtn) darkModeBtn.textContent = "🌙 Dark";
    }
  }

  // Bind baseline dark-mode conditions immediately based on memory values
  applyTheme(localStorage.getItem("theme") === "dark");

  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
      const isDark = !document.body.classList.contains("dark-mode");
      applyTheme(isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  /* ===== Auto-Calculated Math Connectors ===== */
  const tripCards = document.querySelectorAll(".card .btn-primary");
  const sel_trip = document.getElementById("trip");
  const num = document.getElementById("num");
  const amount = document.getElementById("price");
  const email = document.getElementById("email");
  const book_btn = document.getElementById("book_btn");

  const email_veri = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  /**
   * Programmatically reads attributes to instantly output accurate calculations
   */
  function updateCalculatedTotal() {
    const selectedTrip = sel_trip.value;
    if (!selectedTrip) return;

    // Direct string lookup escaping to securely fetch original item price matrix
    const cardTargetButton = document.querySelector(
      `[data-trip="${selectedTrip}"]`,
    );
    if (!cardTargetButton) return;

    const absoluteCost =
      parseInt(cardTargetButton.getAttribute("data-price")) || 0;
    const passengerCount = parseInt(num.value) || 1;

    // Updates numeric text input directly using clean locale standards
    amount.value =
      "₹ " + (passengerCount * absoluteCost).toLocaleString("en-IN");
  }

  // Iterate collection to assign listeners to individual targets
  tripCards.forEach((button) => {
    button.addEventListener("click", () => {
      const tripData = button.getAttribute("data-trip");
      if (!tripData) return;

      sel_trip.value = tripData;
      updateCalculatedTotal();
    });
  });

  // Track field state shifts to dynamically calculate prices
  if (num) {
    num.addEventListener("input", updateCalculatedTotal);
  }

  /* ===== Form Validation Interface ===== */
  if (book_btn) {
    book_btn.addEventListener("click", (e) => {
      e.preventDefault(); // Halt default browser form submit loops

      const emailValue = email.value.trim();
      const verification = email_veri.test(emailValue);

      if (!sel_trip.value) {
        alert("Please select a travel package card first 🌍");
        return;
      }

      if (!verification) {
        alert("Please verify your email credentials 🥺");
      } else {
        alert(
          "Done....!! 🥳🎉🎉 Your custom schedule confirmation and digital payment path will be delivered via email shortly.",
        );
      }
    });
  }
});
