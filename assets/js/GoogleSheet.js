const scriptURL = 'https://script.google.com/macros/s/AKfycbzzYKzmP47iCjUzIEpZh7Fzs8iyBVoNrVcL2d6jgxlwwuJ26E1Vdgf9wa9PgTlQ9S6u4Q/exec'

const form = document.forms["submit-to-google-sheet"]

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = form.querySelector('input[name="your-name"]').value.trim();
    const emailValue = form.querySelector('input[name="your-email"]').value.trim();
    const messageValue = form.querySelector('textarea[name="message"]').value.trim();

    // Name: English, German ve Tuskish letters 
    const isNameValid = /^[a-zA-ZäöüÄÖÜßçğıİşÇĞİŞÖÜ\s]+$/.test(nameValue);

    // Email: Check Email
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    // Validation and warnings
    if (!nameValue) {
        Swal.fire("Warning", "Name field cannot be empty!", "warning");
        return;
    }
    if (!isNameValid) {
        Swal.fire("Warning", "Name can only contain English, German, and Turkish letters!", "warning");
        return;
    }
    if (!emailValue) {
        Swal.fire("Warning", "Email field cannot be empty!", "warning");
        return;
    }
    if (!isEmailValid) {
        Swal.fire("Warning", "Please enter a valid email address!", "warning");
        return;
    }
    if (!messageValue) {
        Swal.fire("Warning", "Message field cannot be empty!", "warning");
        return;
    }

    
    Swal.fire({
        title: 'Processing...',
        didOpen: () => {
            Swal.showLoading(); // Loading icon
        }
    });

    var formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
    .then(async response => {
        const text = await response.text();
        const data = JSON.parse(text);
        Swal.close(); // After finish close the loading message box...
        if (data.result === "success") {
            Swal.fire("Done", "Submitted Successfully.", "success");
            form.reset();
        } else {
            Swal.fire("Error!", "Something went wrong. Please try again!", "error");
        }
    })
    .catch(error => {
        Swal.close();
        Swal.fire("Error!", "Something went wrong. Please try again!", "error");
        console.error("Error details:", error);
    });
});