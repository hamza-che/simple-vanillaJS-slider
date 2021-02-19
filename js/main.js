/*
    Create Slider Images
*/

// Get Slider Items
var sliderImages = Array.from(document.querySelectorAll(".slider-container img")),

    // Get Number Of Slides
    sildesCount = sliderImages.length,

    // Get Current Slide
    currentSlide = 1,

    // Get Next And Prev Buttons
    nextButton = document.getElementById("next"),

    prevButton = document.getElementById("prev"),

    // Get Slider Number String Element 
    slideNumberElement = document.getElementById("slide-number");



// Handle My Buttons Next And Previous
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// Create Pagination Element Ul
var paginationElement = document.createElement("ul");

// Set Attribute On Pagination Element Ul 
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items (Li) On Pagination Element (Ul)
for (var i = 1; i <= sildesCount; i++) {
    //Create The Li
    var paginationItems = document.createElement("li");

    // Set Custom Attribute
    paginationItems.setAttribute("data-index", i);

    // Set Content To The items list
    paginationItems.appendChild(document.createTextNode(i));

    // Append Items To The Main Pagination Element
    paginationElement.appendChild(paginationItems);
}

// Add The created Ul to My Page
document.getElementById("indecators").appendChild(paginationElement); 

// Create The New Ul Created
var paginationUlCreated = document.getElementById("pagination-ul");

// Get Pagination Bullets
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// Loop Through All Pagination Bullets
for ( var i = 0; i < paginationBullets.length; i++ ) {

    paginationBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute("data-index"));

        theChecker();

    }

}


// Trigger The Checker Function
theChecker();

// Next Slide Function 
function nextSlide() {

    if (nextButton.classList.contains("disabled")) {

        //Do Nothing
        return false;

    } else {

        currentSlide++;

        theChecker();

    }

}

// Previous Slide Function
function prevSlide() {

    if (prevButton.classList.contains("disabled")) {

        //Do Nothing
        return false;

    } else {

        currentSlide--;

        theChecker();

    }

}


/************ Checker Function ********/

// Create The Checker Fucntion
function theChecker () {

    // Set Slider Number Content
    slideNumberElement.textContent = `Slide #${currentSlide} Of ${sildesCount}`;

    removeAll();

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add("active");

    // Set Active Class On New Ul Created
    paginationUlCreated.children[currentSlide - 1].classList.add("active");

    // Check If Current Slide Is The First
    if ( currentSlide == 1 ) {

        // Add Disables Class On Previous Button
        prevButton.classList.add("disabled");

    } else {

        // Remove Disabled Class From Previous Button
        prevButton.classList.remove("disabled");

    }; 

    // Check If Current Slide Is The Last
    if ( currentSlide == sildesCount ) {

        // Add Disables Class On Next Button
        nextButton.classList.add("disabled");

    } else {

        // Remove Disabled Class From Next Button
        nextButton.classList.remove("disabled")

    };

}


// Remove All Active Classes From Pagination Bullets And Images
function removeAll() {

    // Loop Through Images
    sliderImages.forEach(function (img) {
        img.classList.remove("active")
    });

    // Loop Through Pagination Bullets
    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove("active")
    });
};

