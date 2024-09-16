document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form (basic example)
    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        return;
    }

    // Display a success message (you can also send form data to a server)
    document.getElementById('responseMessage').innerText = `Thank you, ${name}! We have received your message.`;

    // Clear form fields
    document.getElementById('contactForm').reset();
});


const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;

prev.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = slider.children.length - 1;
  } else {
    currentSlide--;
  }
  updateSlider();
});

next.addEventListener('click', () => {
  if (currentSlide === slider.children.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlider();
});

function updateSlider() {
  const slideWidth = slider.children[0].offsetWidth;
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
