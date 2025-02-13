
document.addEventListener('DOMContentLoaded', function() {
   
    const navLinks = document.querySelectorAll('nav ul li a');

  
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
         
            event.preventDefault();

           
            const targetId = this.getAttribute('href');

           
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'     
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
   
    const signupForm = document.getElementById('signup-form');

 
    signupForm.addEventListener('submit', function(event) {
       
        event.preventDefault();

        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
      
        const password = document.getElementById('password').value;

        alert(`Sign up successful! Welcome, ${username}!`);

      
        signupForm.reset();
    });

   
    const orderForm = document.getElementById('order-form');


    orderForm.addEventListener('submit', function(event) {
       
        event.preventDefault();

        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
        const address = document.getElementById('address').value;

       
        alert(`Order placed for ${quantity} x ${product}. Your order will be delivered to: ${address}`);

        orderForm.reset();
    });
});

