document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    if (button) {
      button.addEventListener('click', () => {
        alert('Button clicked!');
      });
    }
  });
  