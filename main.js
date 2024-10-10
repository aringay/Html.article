// Navigation Button Functionality
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    const section = this.getAttribute('data-section');
    
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });
    
    document.getElementById(section).classList.add('active');
  });
});

// Show Details on Image Click
function showDetails(details, slideElement) {
  // Find the details overlay within the clicked slide element
  const overlay = slideElement.querySelector('.details-overlay');
  
  // Set the details text and display the overlay
  overlay.textContent = details;
  overlay.style.display = 'block';
  
  // Optionally, hide the overlay after a few seconds (if needed)
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 4000); // 4 seconds
}

// Add event listeners to each slide
document.querySelectorAll('.slide').forEach(slide => {
  slide.addEventListener('click', function() {
    const detailsText = this.getAttribute('data-details'); // Get details text from the data attribute
    showDetails(detailsText, this);
  });
});
