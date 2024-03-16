const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

const availableKeywords = [
    
     'Home <a href="index.html"> Home </a>',
    'about <a href="about.html"> About </a>',
    'feature <a href="feature.html"> Feature </a>',
    'service <a href="service.html"> Services </a>',
    'gallery <a href="gallery.html"> Gallery </a>',
    'contact <a href="contact.html"> Contact Us </a>',
    'brochure <a href="brochure.pdf"> Download Brochure </a>',
    'Get Quote <a href="quote.html"> Get Quote </a>',
];

const resultsBox = document.querySelector(".result-box");

// Function to handle input box keyup event
inputBox.onkeyup = function () {
    let result = [];
    let userData = inputBox.value;

    // Filtering keywords based on user input
    if (userData.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(userData.toLowerCase());
        });
    }

    // Displaying filtered keywords
    display(result);

    // If no results, clear the result box
    if (!result.length) {
        resultsBox.innerHTML = '';
    }
}

// Function to display filtered results
function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput('" + list + "')>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

// Function to handle selection from the result box
function selectInput(link) {
    if (link.endsWith('.pdf')) {
        window.open(link, '_blank');
    } else {
        window.location.href = link;
    }
}

// Function to handle keyup event on the search input
inputBox.onkeyup = (e) => {
    let userData = e.target.value.trim(); // Trim whitespace from user input
    let emptyArray = [];
    if (userData) {
        emptyArray = availableKeywords.filter((data) => {
            // Filtering array value and user characters to lowercase and return only those words which start with user entered chars
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // Extract only the hyperlink from the keyword
            const linkStart = data.indexOf('<a href="'); // Find the start of the hyperlink
            const linkEnd = data.indexOf('">', linkStart); // Find the end of the hyperlink
            const link = data.slice(linkStart + 9, linkEnd); // Extract the hyperlink
            const textStart = data.indexOf('>', linkEnd); // Find the start of the link text
            const text = data.slice(textStart + 1, -4); // Extract the link text
            return `<li onclick=selectInput('${link}')>${text}</li>`;
        });
        searchWrapper.classList.add("active"); // Show autocomplete box
        showSuggestions(emptyArray);
    } else {
        searchWrapper.classList.remove("active"); // Hide autocomplete box
    }
}

// Function to display autocomplete suggestions
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        suggBox.innerHTML = ''; // Clear suggestion box if the list is empty
        return;
    }
    listData = list.join('');
    suggBox.innerHTML = listData;
}
