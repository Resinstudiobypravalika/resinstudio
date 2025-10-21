// Order Form
const orderForm = document.getElementById('orderForm');
if(orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your order has been submitted.');
    orderForm.reset();
  });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if(contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
  });
}
