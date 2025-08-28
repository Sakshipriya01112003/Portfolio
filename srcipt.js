// Form-- Local storage

  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
   
    event.preventDefault();


    const organization = document.getElementById('organization').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const objective = document.getElementById('objective').value;

    const formData = {
      organization,
      email,
      phone,
      objective
    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));

   
    alert('Form data saved to localStorage!');
    form.reset(); 
  });




document.addEventListener('DOMContentLoaded', function() {
    const hiText = document.getElementById('hi-text');
    const nameText = document.getElementById('name-text');
            
    function typeWriter(element, text, speed, callback) {
         element.style.opacity = '1';
         let i = 0;
         element.innerHTML = '';
                
         function type() {
          if (i < text.length) {
              element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
          } else if (callback) {
                 setTimeout(callback, 300);
                }
          }
                type();
      }
            
            
       typeWriter(hiText, 'Hi,', 100, () => {
          typeWriter(nameText, "I'm Sakshi Priya", 80, () => {
              console.log("done")
             });
        });
});




// Navbar
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = mobileMenuBtn.querySelector('i');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
            
      if (mobileMenu.classList.contains('hidden')) {
                menuIcon.className = 'fa-solid fa-bars fa-lg';
      } else {
                menuIcon.className = 'fa-solid fa-xmark fa-lg';
      }
});


        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.className = 'fa-solid fa-bars fa-lg';
            });
        });

  
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
        menuIcon.className = 'fa-solid fa-bars fa-lg';
    }
});
 

 
  document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('nav a'); 
        const sections = document.querySelectorAll('div[id]');
        
        function setActiveLink() {
            let currentSection = null;

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    currentSection = section.id;
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(currentSection)) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', setActiveLink);
        setActiveLink();
    });