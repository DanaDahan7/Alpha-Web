$("#navbar-toggle-btn").click(function () {
    $(".navbar-collapse").toggleClass("show");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-content');
        } else {
            entry.target.classList.remove('show-content');
        }
    });
});
const contentElements = document.querySelectorAll('.content');
contentElements.forEach((el) => observer.observe(el));


const observer_option = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-p');
        } else {
            entry.target.classList.remove('show-p');
        }
    });
});
const optionElements = document.querySelectorAll('p');
optionElements.forEach((el) => observer_option.observe(el));

const contentRow = document.querySelector('.content .row:nth-child(2)');
const explanations = document.querySelectorAll('.explanation');


function showDetails(id) {
    // Hide the content row
    if (contentRow) {
        contentRow.style.display = 'none';
    }

    // Hide the link to show details for the specific section
    const linkToShowDetails = document.getElementById('mnist-performance');
    if (linkToShowDetails) {
        linkToShowDetails.style.display = 'none';
    }

    // Show the hidden content
    const hiddenContent = document.getElementById(id);
    if (hiddenContent) {
        hiddenContent.style.display = 'block';
    }
}


function showExplanation(id) {
    // Hide the first row with col-6 and col-6
    if (contentRow) {
        contentRow.style.display = 'none';
    }

    // Hide all explanation sections
    explanations.forEach(explanation => {
        explanation.style.display = 'none';
    });

    // Show the selected explanation
    const selectedExplanation = document.getElementById(id);
    if (selectedExplanation) {
        selectedExplanation.style.display = 'block';
    }
}

function hideDetails(id) {
    // Show the content row
    if (contentRow) {
        contentRow.style.display = 'flex';
    }

    // Hide the link to show details for the specific section
    const linkToShowDetails = document.getElementById(`back-${id}`);
    if (linkToShowDetails) {
        linkToShowDetails.style.display = 'none';
    }

    const hiddenContent = document.getElementById(id);
    if (hiddenContent) {
        hiddenContent.style.display = 'none';
    }
}
