/* 
   libraries used:
   1. Glide.js  
   2. AOS      
   3. Leaflet   
   4. GSAP      
*/

document.addEventListener('DOMContentLoaded', function () {


    // hamburger menu
    var hamburger = document.getElementById('hamburger');
    var navLinks  = document.getElementById('nav-links');
  
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  
  
    // carousel
    new Glide('.dest-glide', {
      type: 'carousel',   
      perView: 3,         
      gap: 24,            
      autoplay: 4000,     
      breakpoints: {
        900: { perView: 2 },   
        600: { perView: 1 },   
      }
    }).mount();
  

    new Glide('.reviews-glide', {
      type: 'carousel',
      perView: 1,
      autoplay: 5000,
    }).mount();
  
  
    // aos
    AOS.init({
      duration: 700,   
      once: true,      
      offset: 60,      
    });
  
  
    // map
    var map = L.map('travel-map').setView([20, 10], 2);
  
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> &copy; <a href="https://carto.com">CARTO</a>'
    }).addTo(map);
  
    var destinations = [
      { name: 'Santorini, Greece',    lat: 36.39,  lng: 25.46,   price: 'From $2,400' },
      { name: 'Kyoto, Japan',         lat: 35.01,  lng: 135.77,  price: 'From $3,100' },
      { name: 'Amalfi Coast, Italy',  lat: 40.63,  lng: 14.60,   price: 'From $2,800' },
      { name: 'Patagonia, Chile',     lat: -51.62, lng: -72.72,  price: 'From $3,600' },
      { name: 'Dubai, UAE',           lat: 25.20,  lng: 55.27,   price: 'From $1,900' },
      { name: 'Bora Bora, Polynesia', lat: -16.50, lng: -151.74, price: 'From $4,200' },
      { name: 'Marrakech, Morocco',   lat: 31.63,  lng: -7.98,   price: 'From $1,600' },
    ];
  
    destinations.forEach(function (dest) {
      L.marker([dest.lat, dest.lng])
        .addTo(map)
        .bindPopup('<strong>' + dest.name + '</strong><br>' + dest.price);
    });
  
  
    // gsap
    gsap.from('#hero-title', {
      y: 50,        
      opacity: 0,  
      duration: 1,
      delay: 0.2,
      ease: 'power3.out'
    });
  
    gsap.from('#hero-sub', {
      y: 30,
      opacity: 0,
      duration: 0.9,
      delay: 0.55,
      ease: 'power3.out'
    });
  
    gsap.from('#hero-btn', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.9,
      ease: 'power3.out'
    });
  
  
    // contact
    var form    = document.getElementById('contactForm');
    var formMsg = document.getElementById('form-msg');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); 
  
      var name  = document.getElementById('fname').value.trim();
      var email = document.getElementById('femail').value.trim();
      var dest  = document.getElementById('fdest').value;
  
      if (!name) {
        formMsg.textContent = 'Please enter your name.';
        formMsg.style.color = '#e07a7a';
        return;
      }
      if (!email) {
        formMsg.textContent = 'Please enter your email address.';
        formMsg.style.color = '#e07a7a';
        return;
      }
      if (!dest) {
        formMsg.textContent = 'Please choose a destination.';
        formMsg.style.color = '#e07a7a';
        return;
      }
  
      formMsg.textContent = "✓ Thanks! We'll be in touch within 24 hours.";
      formMsg.style.color = '#c9a96e';
      form.reset();
    });
  
  
}); 