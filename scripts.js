let currentPage = 1;

function nextPage(pageNumber) {
    const current = document.getElementById(`page${currentPage}`);
    const next = document.getElementById(`page${pageNumber}`);

    current.classList.remove('active');
    next.classList.add('active');

    currentPage = pageNumber;
}

function previousPage(pageNumber) {
    const current = document.getElementById(`page${currentPage}`);
    const previous = document.getElementById(`page${pageNumber}`);

    current.classList.remove('active');
    previous.classList.add('active');

    currentPage = pageNumber;
}

// Initialize first page as active
document.getElementById('page1').classList.add('active');




