// Function to display the welcome modal
window.onload = function () {
    document.getElementById("welcomeModal").style.display = "block";
};

// Function to close the modal
function closeModal() {
    document.getElementById("welcomeModal").style.display = "none";
}
function submitName() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        alert(`Hello, ${name}! You are Hacked`);
        closeModal();  // Close the modal after submission
    } else {
        alert('Please enter your name.');
    }
}
