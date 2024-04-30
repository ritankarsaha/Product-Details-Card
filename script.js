console.log("Connected");


// Increase quantity
document.getElementById('increaseQuantity').addEventListener('click', () => {
    const quantityElement = document.getElementById('quantity');
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
});

// Decrease quantity
document.getElementById('decreaseQuantity').addEventListener('click', () => {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
});

// Function to handle size selection changes
function handleSizeChange(event) {
    document.querySelectorAll('.size-option').forEach(label => {
        label.classList.remove('selected'); 
        label.style.borderColor = ''; 
    });
    const selectedLabel = event.target.parentElement; 
    selectedLabel.classList.add('selected'); 
    selectedLabel.style.borderColor = '#3498db'; 
}
// Function to handle color selection changes
function handleColorChange(event) {
    const colorOptions = document.querySelectorAll('.color-option input[type="radio"]');
    colorOptions.forEach(option => {
        const label = option.nextElementSibling;
        label.classList.remove('selected');
        label.style.borderColor = 'transparent';
    });
    const selectedLabel = event.target.nextElementSibling;
    selectedLabel.classList.add('selected');
    selectedLabel.style.borderColor = '#333';
}

document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.size-option input[type="radio"]').forEach(sizeRadio => {
        sizeRadio.addEventListener('change', handleSizeChange);
    });

    
    document.querySelectorAll('.color-option input[type="radio"]').forEach(colorRadio => {
        colorRadio.addEventListener('change', handleColorChange);
    });

    // Calculate the discount price
  const originalPriceElement = document.querySelector('.original-price');
  const discountPercentageElement = document.querySelector('.discount-percentage');
  const finalPriceElement = document.querySelector('.final-price');
  
  const originalPrice = parseFloat(originalPriceElement.textContent.replace('$', ''));
  const discountPercentage = parseFloat(discountPercentageElement.textContent.replace('% discount', ''));
  const finalPrice = originalPrice - (originalPrice * (discountPercentage / 100));
  //display
  finalPriceElement.textContent = `$${finalPrice.toFixed(2)}`;

});


document.getElementById('addToCartBtn').addEventListener('click', () => {
  // Get the selected specs
  const quantity = document.getElementById('quantity').textContent;
  const size = document.querySelector('input[name="size"]:checked').value;
  const color = document.querySelector('input[name="color"]:checked').value;

  // Add the selected item to the cart
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML += `<div class="cart-item">Quantity: ${quantity}, Size: ${size}, Color: ${color}</div>`;
  cartItems.style.display = 'block'; 

  // Display the message on the page
  const messageContainer = document.getElementById('cartMessage');
  messageContainer.textContent = `Embrace Sideboard Added Quantity: ${quantity}, Size: ${size}, Color: ${color} to your cart.`;
  messageContainer.style.display = 'block'; 
});



  

