// Simple button click handlers
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function() {
    if(this.textContent === 'View Tour') {
      alert('Showing tour details for this destination');
    } else if(this.textContent === 'Send Message') {
      alert('Thank you for your message!');
      document.querySelector('.contact-form').reset();
    } else {
      alert('Exploring more tours');
    }
  });
}); 