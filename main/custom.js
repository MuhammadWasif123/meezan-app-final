const cnicInput = document.getElementById('cnic');
cnicInput.addEventListener('input', function () {
    if (this.value.length > 13) {
        this.value = this.value.slice(0, 13);
    }
});



// const smallBike=document.getElementById("small-div")
// smallBike.addEventListener('onClick',function(){
//     smallBike.classList.add('new-border');

// })

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}


function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) - 1;
}

function addToCart() {
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} item(s) to the cart!`);
}



function toggleRadio(radio) {
    if (radio.checked) {
        radio.checked = false;
    } else {
        radio.checked = true;
    }
}



function showSuccessPrompt() {
    alert("Order Placed Successfully!");
}

function redirectToUrl() {
    window.location.href = "file:///home/wasif/Documents/Wasif_Work/Meezan_Application_completed/Meezan_Application/products.html"; 
}
//  Functionality to handle Terms and Conditions
function toggleOrderButton() {
    const checkbox = document.getElementById('termsCheckbox');
    const button = document.getElementById('placeOrderButton');
    button.classList.toggle('d-none', !checkbox.checked);
}

// Functionality of the Place Order Button
function showSuccessPrompt() {
    alert("Items ordered successfully!");
    window.location.href = "file:///home/wasif/Documents/Wasif_Work/Meezan_Application_completed/Meezan_Application/index.html"; 
}


// Updated Functionality on the Product Page 

document.addEventListener("DOMContentLoaded", () => {
    const cnicInput = document.getElementById("cnic");
    const companyInput = document.getElementById("company");
    const employeeInput = document.getElementById("employee");
    const engineInput = document.getElementById("engine");
    const chassisInput = document.getElementById("chassis");
    const bookNowButton = document.getElementById("bookNow");
    const buyNowButton = document.getElementById("buyNow");

    // Function to check field states and update buttons
    const updateButtons = () => {
        const basicInfoFilled = [cnicInput, companyInput, employeeInput].every(input => input.value.trim() !== "");
        const allInputsFilled = basicInfoFilled && [engineInput, chassisInput].every(input => input.value.trim() !== "");

        if (allInputsFilled) {
            buyNowButton.style.display = "block"; // Show Buy Now button
            bookNowButton.style.display = "none"; // Hide Book Now button
        } else if (basicInfoFilled) {
            buyNowButton.style.display = "none"; // Hide Buy Now button
            bookNowButton.style.display = "block"; // Show Book Now button
        }else{
            buyNowButton.style.display = "none"; // Hide Buy Now button
            bookNowButton.style.display = "none"; // Hide Book Now button
        }
    };

    // Attach event listeners to inputs
    [cnicInput, companyInput, employeeInput, engineInput, chassisInput].forEach(input => {
        input.addEventListener("input", updateButtons);
    });

    // Button click actions
    bookNowButton.addEventListener("click", () => {
        alert("Query completed.");
        window.location.href="file:///home/wasif/Documents/Wasif_Work/Meezan_Application_completed/Meezan_Application/index.html";
    });

    buyNowButton.addEventListener("click", () => {
        window.location.href = "file:///home/wasif/Documents/Wasif_Work/Meezan_Application_completed/Meezan_Application/cart.html"; 
    });
});


console.log("JS WORKING")