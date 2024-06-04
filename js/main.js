// ------------- mobilepageslidermenu -------------
// Select the menu toggle element and the navbar menu element
const menuToggle = document.querySelector('.menu_toggle');
const navbarMenu = document.querySelector('.navbar_menu');

// Add a click event listener to the menu toggle element
menuToggle.addEventListener('click', function() {
  // Toggle the 'active' class on the menu toggle element
  this.classList.toggle('active');
  
  // Toggle the 'show' class on the navbar menu element
  navbarMenu.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function () {
  // ----------- Redirect links for paths -------------
  const redirectButton1 = document.getElementById('redirect_button1');
  const redirectButton2 = document.getElementById('redirect_button2');

  if (redirectButton1) {
    redirectButton1.addEventListener('click', function() {
      window.location.href = 'product-details 2.html';
    });
  }

  if (redirectButton2) {
    redirectButton2.addEventListener('click', function() {
      window.location.href = 'product-details.html';
    });
  }

  // ----------- Carousel Settings --------------
  const productDetailsSlider = document.querySelector('.productDetailsSlider');
  const items = productDetailsSlider.querySelectorAll('.carousel-item');
  const demoLinks = document.querySelectorAll('.demo_link');

  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    showItem(currentIndex);
  }

  // Initialize the carousel by showing the first item
  showItem(currentIndex);

  // Add click event listeners to the demo links
  demoLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const slideIndex = parseInt(this.getAttribute('data-slide'));
      goToSlide(slideIndex);
    });
  });

  // Add optional autoplay functionality
  const autoplaySpeed = 3000; // 3 seconds
  let autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }, autoplaySpeed);

  // Pause autoplay on hover
  productDetailsSlider.addEventListener('mouseover', () => clearInterval(autoPlayInterval));
  productDetailsSlider.addEventListener('mouseout', () => {
    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    }, autoplaySpeed);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Select all elements with the class 'search_back_button'
  const searchBackButtons = document.querySelectorAll('.search_back_button');

  // Add a click event listener to each back button
  searchBackButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor click behavior
      window.history.back(); // Go back to the previous page
    });
  });
});
















// ------------- shopping Card Product --------------

$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});

$('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});
