// Create a variable that selects the form element
const formEl = document.getElementById('contactForm');
console.log(formEl);
// Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const usernameInput = document.getElementById('name');
const titleInput = document.getElementById('email');
const contentInput = document.getElementById('message');

function handleClick(event) {
    event.preventDefault()
    if (!usernameInput.value || !titleInput.value || !contentInput.value
    ) {
        const errorElement = document.getElementById('error')
        errorElement.textContent = 'Please complete the form.'
        setTimeout(function () {
            errorElement.textContent = '';
        }, 4000);
        return;
    }

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }
    storeLocalStorage(
        formData
    )
    redirectPage ('LandingPage.tsx')
}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', handleClick);

function storeLocalStorage (blog) {
    const blogs = readLocalStorage ();
    blogs.push ((blog));
    localStorage.setItem("contactForm", JSON.stringify(blogs));
  }