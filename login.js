// developed by GRP team 17
// get form element and add submit event listener
var loginForm = document.querySelector('form');
loginForm.addEventListener('submit', handleFormSubmit);

// form submit event handler function
function handleFormSubmit(event) {
  // prevent default form submission
  event.preventDefault();

  // get form data
  var formData = new FormData(loginForm);

  // check if username and password are correct
  if (formData.get('username') === 'myusername' && formData.get('password') === 'mypassword') {
    // redirect to dashboard page if credentials are correct
    window.location.href = 'index.html';
  } else {
    // display error message if credentials are incorrect
    window.location.href = 'user.html';
    alert('Invalid username or password');
  }
}
