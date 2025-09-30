let btn=document.querySelectorAll(".btn");
let sel_trip=document.getElementById("trip");
let num=document.getElementById("num");
let amount=document.getElementById("price")
let email=document.getElementById("email")
const email_veri=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let book_btn=document.getElementById("book_btn");

btn.forEach(button =>{
    button.addEventListener('click',()=>{
    let trip_data=button.getAttribute("data-trip");
    sel_trip.value=trip_data;
      let cost = parseInt(button.getAttribute("data-price"));
    // num=parseInt(num)
    let people = parseInt(num.value) || 1; 
    amount.value=people*cost
    })
})

num.addEventListener('input', () => {
  let selectedTrip = sel_trip.value; 
  let button = document.querySelector(`[data-trip="${selectedTrip}"]`);
  let cost = parseInt(button.getAttribute("data-price"));
  let people = parseInt(num.value) || 1; 
  amount.value = people * cost;
});

book_btn.addEventListener('click',()=>{
    let verification=email_veri.test(email.value.trim())
    if(!verification){
        alert("emil is not correct 🥺")
    }
    else{
        alert("done....!! 🥳🎉🎉the online link for the payment will send you shorthly")
    }
})