document.getElementById("pizzaForm").onsubmit = function(e) {
    e.preventDefault();
    let size = document.querySelector('input[name="size"]:checked');
    let toppings = [...document.querySelectorAll('input[name="topping"]:checked')].map(t => t.value);
    document.getElementById("summary").innerText = size ? `Size: ${size.value}, Toppings: ${toppings.join(", ") || "None"}` : "Please select a size.";
};
