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


// const slider = document.querySelector('.slider');
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
// let currentSlide = 0;

// prev.addEventListener('click', () => {
//   if (currentSlide === 0) {
//     currentSlide = slider.children.length - 1;
//   } else {
//     currentSlide--;
//   }
//   updateSlider();
// });

// next.addEventListener('click', () => {
//   if (currentSlide === slider.children.length - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }
//   updateSlider();
// });

// function updateSlider() {
//   const slideWidth = slider.children[0].offsetWidth;
//   slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// }


document.addEventListener('DOMContentLoaded', function() {
  const heroSection = document.querySelector('.hero-section');
  const images = [
    './images/landingpage/1.png', // Initial image
    './images/landingpage/2.png',
    './images/landingpage/3.png',
    './images/landingpage/4.png',
    './images/landingpage/5.png',
    './images/landingpage/6.png',
    './images/landingpage/7.png',
    './images/landingpage/8.png',
    './images/landingpage/9.png',
    './images/landingpage/10.png',
    './images/landingpage/11.png',
    './images/landingpage/12.png',
    './images/landingpage/13.png'
  ];
  let currentIndex = 0;

  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    heroSection.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url('${images[currentIndex]}')`;
  }

  // Set initial image
  heroSection.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url('${images[0]}')`;

  // Change background image every 3 seconds after initial 3-second delay
  setTimeout(function() {
    setInterval(changeBackgroundImage, 3000); // Change image every 3 seconds
  }, 3000); // Initial delay for the first image
});

document.addEventListener('DOMContentLoaded', () => {
  const texts = [
    "Minds Transformed",
    "Growth Ignited",
    "Futures Built",
    "Skills Enhanced",
    "Possibilities Realized",
    "Horizons Expanded"
  ];

  const animatedText = document.querySelector('.animated-text');
  let index = 0;

  function updateText() {
    animatedText.textContent = texts[index];
    index = (index + 1) % texts.length;
  }

  // Change text every 3 seconds (adjust timing as needed)
  setInterval(updateText, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    /*{ text: "It always seems impossible, until it is done.", author: "Nelson Mandela" },*/
    { text: "“An investment in knowledge pays the best interest.”", author: "Benjamin Franklin" },
    { text: "“Whatever the mind can conceive and believe, it can achieve.”", author: "Napoleon Hill" },
    { text: "“Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.”", author: "Henry Ford" },
    { text: "“Remember, today is the tomorrow you worried about yesterday.”", author: "Dale Carnegie" },
    { text: "“It always seems impossible, until it is done.”", author: "Nelson Mandela" }
  ];

  const quoteElement = document.querySelector('.animated-quote');
  const authorElement = document.querySelector('.quote-author');
  let index = 0;

  function updateText() {
    quoteElement.textContent = quotes[index].text;
    authorElement.textContent = `${quotes[index].author}`;
    index = (index + 1) % quotes.length;
  }

  // Change text every 5 seconds (adjust timing as needed)
  setInterval(updateText, 5000);
});

/* not used
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.programs-wrapper');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const scrollAmount = 300; // Amount to scroll on each arrow click

  leftArrow.addEventListener('click', function() {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', function() {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Optional: Automatically center the card in view
  container.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.program-card');
    let centerCard = null;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;

      if (Math.abs(cardCenter - containerCenter) < cardRect.width / 2) {
        centerCard = card;
      }
    });

    cards.forEach(card => {
      if (card === centerCard) {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
      } else {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      }
    });
  });
});

*/


//programs card
document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.p-prev');
  const nextButton = document.querySelector('.p-next');
  const carousel = document.querySelector('.program-carousel');
  const items = document.querySelectorAll('.pcarousel-item');
  const totalItems = items.length;
  const itemsPerPage = 3; // Number of items to display at once
  let currentIndex = 0;

  function updateCarousel() {
      const maxIndex = totalItems - itemsPerPage; // Calculate max index for the current view
      if (currentIndex < 0) {
          currentIndex = maxIndex; // Bounce back to the end
      }
      if (currentIndex > maxIndex) {
          currentIndex = 0; // Bounce back to the start
      }

      const offset = - (currentIndex * 100 / itemsPerPage);
      carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
      currentIndex--; // Move to previous index
      updateCarousel();
  });

  nextButton.addEventListener('click', () => {
      currentIndex++; // Move to next index
      updateCarousel();
  });

  // Initial update
  updateCarousel();
});





 //super human slider
document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.nav-button.prev');
  const nextButton = document.querySelector('.nav-button.next');
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;
  const itemsPerPage = 3;
  let currentIndex = 0;

  function updateCarousel() {
    const offset = - (currentIndex * 100 / itemsPerPage);
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex === 0) {
      // If at the beginning, loop to the end
      currentIndex = Math.ceil(totalItems / itemsPerPage) - 1;
    } else {
      currentIndex--;
    }
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    console.log('clicked')
    if (currentIndex === Math.ceil(totalItems / itemsPerPage)) {
      // If at the end, loop back to the beginning
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
  });

  // Initialize carousel
  updateCarousel();
});


//working no issues expert talks
document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.expert-prev');
  const nextButton = document.querySelector('.expert-next');
  const carousel = document.querySelector('.expert-carousel');
  const totalItems = document.querySelectorAll('.expert-carousel-item').length;
  const itemsPerPage = 3;
  let currentIndex = 0;

  function updateCarousel() {
    const offset = - (currentIndex * 100 / itemsPerPage);
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex === 0) {
      // If at the beginning, loop to the end
      currentIndex = Math.ceil(totalItems / itemsPerPage) - 1;
    } else {
      currentIndex--;
    }
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex === Math.ceil(totalItems / itemsPerPage)) {
      // If at the end, loop back to the beginning
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
  });

  // Initialize carousel
  updateCarousel();
});

document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    { text: "“Leadership and learning are indispensable to each other.”", author: "John F. Kennedy" },
    { text: "“One child, one teacher, one book, one pen can change the world.”", author: "Malala Yousafzai" },
    { text: "“The people who are crazy enough to think they can change the world are the ones who do.”", author: "Steve Jobs" },
    { text: "“Education is not the learning of facts, but the training of the mind to think.”", author: "Albert Einstein" },
    { text: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", author: "Mahatma Gandhi" },
  ];

  const quoteElement = document.querySelector('.quote-text');
  const authorElement = document.querySelector('.quote-author-name');
  let index = 0;

  function updateText() {
    quoteElement.textContent = quotes[index].text;
    authorElement.textContent = quotes[index].author;
    index = (index + 1) % quotes.length;
  }

  // Change text every 5 seconds (adjust timing as needed)
  setInterval(updateText, 5000);
});


//super human slider
document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.super-prev');
  const nextButton = document.querySelector('.super-next');
  const carousel = document.querySelector('.super-carousel');
  const totalItems = document.querySelectorAll('.super-item').length;
  const itemsPerPage = 3;
  let currentIndex = 0;

  function updateCarousel() {
    const offset = - (currentIndex * 100 / itemsPerPage);
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : Math.ceil(totalItems / itemsPerPage) - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < Math.ceil(totalItems / itemsPerPage) - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  // Initialize carousel
  updateCarousel();
});


//working correctly no issues card 
document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.arrow-prev');
  const nextButton = document.querySelector('.arrow-next');
  const slides = document.querySelectorAll('.slide');
  // const slider = document.querySelectorAll('.slider');
  const slidesToShow = 3; // Number of slides to display at a time
  let currentIndex = 0;

  // Function to update the visible slides
  function updateSlides() {
      slides.forEach((slide, index) => {
          slide.style.display = (index >= currentIndex && index < currentIndex + slidesToShow) ? 'block' : 'none';
      });
  }

  // Event listener for the previous button
  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - slidesToShow + slides.length) % slides.length;
      updateSlides();
  });

  // Event listener for the next button
  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + slidesToShow) % slides.length;
      updateSlides();
  });

  // Initialize the slider by displaying the first set of slides
  updateSlides();
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.inspiration-card');

  // Ensure the first card is expanded by default
  cards[0].classList.add('expanded');

  cards.forEach(card => {
      card.addEventListener('click', () => {
          // Remove the expanded class from all cards
          cards.forEach(c => {
              c.classList.remove('expanded');
          });

          // Add the expanded class to the clicked card
          card.classList.add('expanded');
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const productContainers = document.querySelectorAll('.resource-carousel');
  const nxtBtn = document.querySelectorAll('.right-arrow');
  const preBtn = document.querySelectorAll('.left-arrow');

  productContainers.forEach((item, i) => {
      nxtBtn[i].addEventListener('click', () => {
          const containerWidth = item.clientWidth; // Use clientWidth for consistency
          const totalWidth = item.scrollWidth;

          // If scrolled to the end, reset to start
          if (item.scrollLeft + containerWidth >= totalWidth) {
              item.scrollLeft = 0; // Loop back to the start
          } else {
              item.scrollLeft += containerWidth; // Scroll right
          }
      });

      preBtn[i].addEventListener('click', () => {
          const containerWidth = item.clientWidth; // Use clientWidth for consistency

          // If scrolled to the beginning, reset to end
          if (item.scrollLeft === 0) {
              item.scrollLeft = item.scrollWidth - containerWidth; // Loop back to the end
          } else {
              item.scrollLeft -= containerWidth; // Scroll left
          }
      });
  });
});

    












// let currentIndex = 0;

// const cards = document.querySelectorAll('.resource-card');
// const totalCards = cards.length;
// const cardsToShow = 4;

// function updateCarousel() {
//     cards.forEach((card, index) => {
//         card.style.display = (index >= currentIndex && index < currentIndex + cardsToShow) ? 'block' : 'none';
//     });
// }

// document.querySelector('.right-arrow').addEventListener('click', () => {
//     if (currentIndex + cardsToShow < totalCards) {
//         currentIndex += 1;
//         updateCarousel();
//     }
// });

// document.querySelector('.left-arrow').addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex -= 1;
//         updateCarousel();
//     }
// });

// // Initial display setup
// updateCarousel();

// document.addEventListener('DOMContentLoaded', function() {
//   const prevButton = document.querySelector('.carousel-arrow.left-arrow');
//   const nextButton = document.querySelector('.carousel-arrow.right-arrow');
//   const slides = document.querySelectorAll('.resource-card');
//   const slidesToShow = 4; // Number of slides to display at a time
//   let currentIndex = 0;

//   // Function to show the current set of slides
//   function showSlides() {
//       slides.forEach((slide, index) => {
//           slide.classList.remove('active'); // Remove active class
//       });

//       for (let i = 0; i < slidesToShow; i++) {
//           const slideIndex = (currentIndex + i) % slides.length;
//           slides[slideIndex].classList.add('active'); // Add active class
//       }
//   }

//   // Event listener for the previous button
//   prevButton.addEventListener('click', () => {
//       currentIndex = (currentIndex - slidesToShow + slides.length) % slides.length;
//       if (currentIndex < 0) {
//           currentIndex = slides.length - slidesToShow; // Go to the last set if negative
//       }
//       showSlides();
//   });

//   // Event listener for the next button
//   nextButton.addEventListener('click', () => {
//       currentIndex = (currentIndex + slidesToShow) % slides.length;
//       if (currentIndex + slidesToShow > slides.length) {
//         currentIndex = 0;
//       }
//       showSlides();
//   });

//   // Initialize the carousel
//   showSlides();
// });

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.open');
  const contents = document.querySelectorAll('.open-minds-content');
  let currentIndex = 0;

  // Function to show content and update the card display
  function updateDisplay() {
      // Hide all content sections
      contents.forEach(content => content.classList.add('hidden'));

      // Show the selected content
      const selectedContent = contents[currentIndex];
      selectedContent.classList.remove('hidden');
  }

  // Event listener for cards
  cards.forEach((card, index) => {
      card.addEventListener('click', function() {
          if (index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)) {
              // Move left (previous card clicked)
              currentIndex = (currentIndex - 1 + cards.length) % cards.length;
          } else if (index === currentIndex + 1 || (currentIndex === cards.length - 1 && index === 0)) {
              // Move right (next card clicked)
              currentIndex = (currentIndex + 1) % cards.length;
          }
          updateDisplay(); // Update content display
      });
  });

  // Initialize with the first card's content displayed
  updateDisplay(); // Display the first card's content initiall


}); 

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.open-minds-card');
  const contents = document.querySelectorAll('.open-minds-content');
  let currentIndex = 0;

  // Function to show content and update the card display
  function updateDisplay() {
      // Hide all content sections
      contents.forEach(content => content.classList.add('hidden'));

      // Show the selected content
      const selectedContent = contents[currentIndex];
      selectedContent.classList.remove('hidden');
  }

  // Event listener for cards
  cards.forEach((card, index) => {
      card.addEventListener('click', function() {
          if (index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)) {
              // Move left (previous card clicked)
              currentIndex = (currentIndex - 1 + cards.length) % cards.length;
          } else if (index === currentIndex + 1 || (currentIndex === cards.length - 1 && index === 0)) {
              // Move right (next card clicked)
              currentIndex = (currentIndex + 1) % cards.length;
          }
          updateDisplay(); // Update content display
      });
  });

  // Initialize with the first card's content displayed
  updateDisplay(); // Display the first card's content initiall


}); 

function scrollToSection() {
  const target = document.getElementById('contact-section');
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 2000; 
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}

function scrollToProgram() {
  const target = document.getElementById('programs-carousel-section');
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; 
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}

function downloadFile() {
  const link = document.createElement('a');
  link.href = './Open Minds_Business Profile.pdf';  
  link.download = 'Open Minds_Business Profile.pdf'; 
  link.click();
}

const modal = document.getElementById('ViewAllCoursesModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open the modal when clicking the button
openModalBtn.onclick = function() {
  modal.style.display = 'block';
};

// Close the modal when clicking the exit button
closeModalBtn.onclick = function() {
  modal.style.display = 'none';
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


const modal2 = document.getElementById('MyleinModal');
const openModalBtn2 = document.getElementById('openModalBtn2');
const closeModalBtn2 = document.getElementById('closeModalBtn2');

// Open the modal when clicking the button
openModalBtn2.onclick = function() {
  modal2.style.display = 'block';
};

// Close the modal when clicking the exit button
closeModalBtn2.onclick = function() {
  modal2.style.display = 'none';
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
};




const program_model1 = document.getElementById('program-modal-1');
const program_open1 = document.getElementById('program-details-1');
const program_close1 = document.getElementById('program-close-1');

// Open the modal when clicking the button
program_open1.onclick = function() {
  program_model1.style.display = 'block';
};

// Close the modal when clicking the exit button
program_close1.onclick = function() {
  program_model1.style.display = 'none';
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target === program_model1) {
    program_model1.style.display = 'none';
  }
};





const program_model2 = document.getElementById('program-modal-2');
const program_open2 = document.getElementById('program-details-2');
const program_close2 = document.getElementById('program-close-2');

// Open the modal when clicking the button
program_open2.onclick = function() {
  program_model2.style.display = 'block';
};

// Close the modal when clicking the exit button
program_close2.onclick = function() {
  program_model2.style.display = 'none';
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target === program_model2) {
    program_model2.style.display = 'none';
  }
};



const program_model3 = document.getElementById('program-modal-3');
const program_open3 = document.getElementById('program-details-3');
const program_close3 = document.getElementById('program-close-3');

// Open the modal when clicking the button
program_open3.onclick = function() {
  program_model3.style.display = 'block';
};

// Close the modal when clicking the exit button
program_close3.onclick = function() {
  program_model3.style.display = 'none';
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target === program_model3) {
    program_model3.style.display = 'none';
  }
};




const program_model4 = document.getElementById('program-modal-4');
const program_open4 = document.getElementById('program-details-4');
const program_close4 = document.getElementById('program-close-4');

// Open the modal when clicking the button
program_open4.onclick = function() {
  program_model4.style.display = 'block';
};

// Close the modal when clicking the exit button
program_close4.onclick = function() {
  program_model4.style.display = 'none';
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target === program_model4) {
    program_model4.style.display = 'none';
  }
};




const program_model5 = document.getElementById('program-modal-5');
const program_open5 = document.getElementById('program-details-5');
const program_close5 = document.getElementById('program-close-5');

// Open the modal when clicking the button
program_open5.onclick = function() {
  program_model5.style.display = 'block';
};

// Close the modal when clicking the exit button
program_close5.onclick = function() {
  program_model5.style.display = 'none';
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target === program_model5) {
    program_model5.style.display = 'none';
  }
};




const program_model6 = document.getElementById('program-modal-6');
const program_open6 = document.getElementById('program-details-6');
const program_close6 = document.getElementById('program-close-6');

// Open the modal when clicking the button
program_open6.onclick = function() {
  program_model6.style.display = 'block';
};

// Close the modal when clicking the exit button
program_close6.onclick = function() {
  program_model6.style.display = 'none';
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target === program_model6) {
    program_model6.style.display = 'none';
  }
};




const subscribe_modal = document.getElementById('subscribe-modal');
const sub_open = document.getElementById('subscribe-popup');
const sub_close = document.getElementById('subscribe-close');

// Open the modal when clicking the button
sub_open.onclick = function() {
  subscribe_modal.style.display = 'block';
};

// Close the modal when clicking the exit button
sub_close.onclick = function() {
  subscribe_modal.style.display = 'none';
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target === subscribe_modal) {
    subscribe_modal.style.display = 'none';
  }
};




const resources_model = document.getElementById('resources-modal');
const res_open = document.getElementById('resources-open');
const res_close = document.getElementById('resources-close');

// Open the modal when clicking the button
res_open.onclick = function() {
  resources_model.style.display = 'block';
};

// Close the modal when clicking the exit button
res_close.onclick = function() {
  resources_model.style.display = 'none';
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target === resources_model) {
    resources_model.style.display = 'none';
  }
};





function scroller(param) {
  const target = document.getElementById(param);
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 2000; 
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", function() {
  const radios = document.querySelectorAll('input[name="gallery"]');
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const caption = document.getElementById("caption");
  const closeBtn = document.getElementById("modalClose");

  radios.forEach(radio => {
      radio.addEventListener("change", function() {
          if (this.checked) {
              const imageUrl = this.nextElementSibling.src; // Assuming the image is linked
              modalImage.src = imageUrl;
              modal.style.display = "block";
          }
      });
  });

  closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});



function openOmGallery(imageSrc) {
  // Hide the original gallery section
  $('#gallery').hide();

  // Show the thumbnail section
  $('#om-gallery-modal').show();
  $('#om-modal-gallery-image').attr('src', imageSrc);
}

// Close button functionality
$('#om-modal-close-button').click(function() {
  // Show the original gallery section
  $('#gallery').show();

  // Hide the thumbnail section
  $('#om-gallery-modal').hide();
});

// Thumbnail click functionality
$('.om-gallery-thumbnail-list a').click(function(e) {
  e.preventDefault();
  $('#om-modal-gallery-image').attr('src', $(this).attr('href'));
});








// const openMindsContainer = document.querySelector('.open-minds-container');
// const openMindsControlsContainer = document.querySelector('.open-minds-controls');
// const openMindsControls = ['previous', 'next'];
// const openMindsImg = document.querySelectorAll('.open-minds-img');

// class OpenMindsGallery {
//   constructor(container, img, controls) {
//     this.container = container;
//     this.controls = controls;
//     this.img = [...img];
//   }
//   updateGallery() {
//     this.img.forEach((e1 => {
//       e1.classList.remove('open-minds-img-1');
//       e1.classList.remove('open-minds-img-2');
//       e1.classList.remove('open-minds-img-3');
//       e1.classList.remove('open-minds-img-4');
//       e1.classList.remove('open-minds-img-5');
//     }));
//     this.img.slice(0, 5).forEach((e1, i) => {
//         e1.classList.add(`open-minds-img-${i + 1}`);
//     });
//   }
//   setCurrentState(direction) {
//     if (direction.className === 'open-minds-controls-previous') {
//       this.img.unshift(this.img.pop());
//     }
//     else {
//       this.img.push(this.img.shift());
//     }
//     this.updateGallery();
//   }
//   setControls() {
//     this.controls.forEach((control) => {
//       openMindsControlsContainer.appendChild(document.createElement('button')).className = `open-minds-controls-${control}`;
//       document.querySelector(`.open-minds-controls-${control}`).innerText = control;
//     });
//   }
//   useControls() {
//     const triggers = [...openMindsControlsContainer.childNodes];
//     triggers.forEach((control => {
//       control.addEventListener('click', () => {
//         e.preventDefault();
//         this.setCurrentState(control);
//       });
//     });
//   }
// }

// const openMindsGallery = new OpenMindsGallery(openMindsContainer, openMindsImg, openMindsControls);

// openMindsGallery.setControls();
// openMindsGallery.useControls();

// var stackedCardSlide = new stackedCards({
//   selector: '.stacked-cards',
//   layout: 'slide',
//   transformOrigin: 'center',});
//   stackedCardSlide.init();

// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: false, // Disable dragging
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 150,
//     modifier: 2.5,
//     slideShadows: true,
//   },
//   // autoplay: {
//   //   delay: 3000,
//   //   disableOnInteraction: false,
//   // },
//   navigation: { // Enable navigation buttons
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
  