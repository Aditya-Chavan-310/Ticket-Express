// Select elements
const bookTicketsBtn = document.getElementById('book-tickets-btn');
const headerContent = document.querySelector('.header-content');
const modalCards = document.getElementById('modal-cards');
const taglineContainer = document.querySelector('.tagline-container');

// Add event listener for the 'Book Your Tickets Now' button
bookTicketsBtn.addEventListener('click', () => {
    // Hide the header content and button
    headerContent.style.opacity = '0';
    headerContent.style.transform = 'translateY(-50px)';
    bookTicketsBtn.style.opacity = '0';
    bookTicketsBtn.style.transform = 'translateY(-50px)';
    taglineContainer.style.opacity = '0';
    taglineContainer.style.transform = 'translateY(-50px)';

    // Show modal cards after a slight delay for smoother transition
    setTimeout(() => {
        modalCards.classList.add('show');
    }, 500); // Adjust delay to match CSS transition duration
});
