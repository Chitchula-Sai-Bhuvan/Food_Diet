const menuOptionsDiv = document.getElementById("menuOptions");
const orderForm = document.getElementById("orderForm");
const summaryDiv = document.getElementById("orderSummary");
const summaryText = document.getElementById("summaryText");

// Menu items
const menus = {
  veg: ["Paneer Butter Masala", "Veg Biryani", "Dal Tadka", "Aloo Gobi"],
  nonveg: ["Chicken Biryani", "Mutton Curry", "Fish Fry", "Butter Chicken"]
};

// Render menu based on meal type
function renderMenu(type) {
  menuOptionsDiv.innerHTML = "";
  const label = document.createElement("label");
  label.textContent = "Select Dish:";
  const select = document.createElement("select");
  select.id = "dish";
  menus[type].forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
  menuOptionsDiv.appendChild(label);
  menuOptionsDiv.appendChild(select);
}

// Initial render
renderMenu("veg");

// Listen for veg/non-veg change
document.querySelectorAll("input[name='mealType']").forEach(radio => {
  radio.addEventListener("change", e => {
    renderMenu(e.target.value);
  });
});

// Handle form submit
orderForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const mealType = document.querySelector("input[name='mealType']:checked").value;
  const dish = document.getElementById("dish").value;
  const quantity = document.getElementById("quantity").value;
  const instructions = document.getElementById("instructions").value;

  summaryDiv.classList.remove("hidden");
  summaryText.innerHTML = `
    <strong>Name:</strong> ${name} <br>
    <strong>Phone:</strong> ${phone} <br>
    <strong>Meal Type:</strong> ${mealType.toUpperCase()} <br>
    <strong>Dish:</strong> ${dish} <br>
    <strong>Quantity:</strong> ${quantity} <br>
    <strong>Special Instructions:</strong> ${instructions || "None"} <br>
    <br>
    🎉 Your order has been placed successfully!
  `;
});
