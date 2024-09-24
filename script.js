// script.js
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    fetchContent();
});

function fetchContent() {
    fetch('../content.json') // Use the correct relative path
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data); // Check if data is loaded correctly
            window.contentData = data; // Store content globally
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function showContent(section) {
    let content = document.getElementById('content');
    if (window.contentData && window.contentData[section]) {
        let text = window.contentData[section];
        content.innerHTML = `<p>${text}</p>`; // Display content only, without the section key
    } else {
        content.innerHTML = `<p>No content available for this section.</p>`;
    }
}
