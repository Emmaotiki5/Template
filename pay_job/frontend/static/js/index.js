const listsContainer = document.getElementById('lists-container');
const list = document.getElementById('lists');
const listItems = list.querySelectorAll('li');

let scrollAmount = 0;
const speed = 0.5; // Adjust scrolling speed (lower value for slower speed)

function slideImages() {
  scrollAmount += speed;
  listsContainer.scrollLeft = scrollAmount;

  const expandValue = (scrollAmount / listItems[0].offsetWidth) * 200; // Change 200 to the desired expansion width percentage
  listItems[0].style.width = `${expandValue}%`;

  if (scrollAmount >= listItems[0].offsetWidth) {
    scrollAmount = 0;
    listsContainer.scrollLeft = scrollAmount;
    listItems[0].style.width = '100%';
  }

  requestAnimationFrame(slideImages);
}

setTimeout(() => {
  listsContainer.style.overflow = 'hidden'; // Hide scrollbar initially for smoother effect
  slideImages(); // Start continuous sliding motion after a brief delay
}, 500);
