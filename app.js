console.info("Hello World");

//TODO Create an array with the images we want to use

const images = [
  {
    src: "https://images.unsplash.com/photo-1496886077455-6e206da90837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man doing trick at skate park during sunset",
    class: "gallery-img",
  },
  {
    src: "https://images.unsplash.com/photo-1534531304203-b830551771b9?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man riding skateboard at skate park",
    class: "gallery-img",
  },

  {
    src: "https://images.unsplash.com/photo-1569073714255-835b0c8d2724?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "woman riding skateboard at a skate park ",
    class: "gallery-img",
  },
  {
    src: "https://images.unsplash.com/photo-1531948371443-d5afa127f918?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man doing trick with his skateboard  on the street ",
    class: "gallery-img",
  },
  {
    src: "https://images.unsplash.com/photo-1740148008624-b8de7ddf56df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "woman riding skateboard at a skate park ",
    class: "gallery-img",
  },

  {
    src: "https://images.unsplash.com/photo-1519256155806-cd510524ed97?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man doing trick at skate park ",
    class: "gallery-img",
  },

  {
    src: "https://images.unsplash.com/photo-1510552857913-0a27715a102f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "a skate park with some people in the background",
    class: "gallery-img",
  },
];

// TODO Add a loop that creates an img element with its respective src, alt and classes, that when is clicked it creates a full size version of it that takes up the whole screen

const thumbnailContainer = document.getElementById("thumbnail-container");

images.forEach(function (image, index) {
  const thumbnailImage = document.createElement("img");

  thumbnailImage.setAttribute("src", image.src);
  thumbnailImage.setAttribute("alt", image.alt);
  thumbnailImage.setAttribute("class", image.class);

  thumbnailImage.addEventListener("click", function () {
    // console.log("img clicked");
    currentImageIndex = index;

    createFullscreenImage(image);
  });

  thumbnailContainer.appendChild(thumbnailImage);
});

//we need to pass both the image and the index here and include them as paramenters. I did not add the index at first and I kept getting the error index is not defined. Leaving this here as a note to myself. Parameters!! Important!! Need to read more on this and get used to the correct terms

// Some (failed) attemps
// const galleryImage = document.querySelector(".gallery-img");

// this doesn't work because query selector only selects the first element with the class .gallery-img, so only the first image will receive the click

// galleryImage.addEventListener("click", function () {
//   console.log("img clicked");
//   createFullscreenImage(images);//images - this is the whole array!!! was causing an error in the console

// TODO Create the function that generates the fullsize image

const fullscreenContainer = document.getElementById("largeimg-container");

function createFullscreenImage(largeImg) {
  fullscreenContainer.innerHTML = "";
  //   console.log("it works");
  const fullsizeImage = document.createElement("img");
  fullsizeImage.classList.add("large-img");
  fullsizeImage.src = largeImg.src;
  fullsizeImage.alt = largeImg.alt;
  fullscreenContainer.appendChild(fullsizeImage);
}

window.onload = function () {
  createFullscreenImage(images[0]);
  currentImageIndex = 0;
};

//Call the function so that it starts with an image in the large image container. Index on start will be [0] (first one in our array of images)
// let displayedImageIndex = 0;
// createFullscreenImage(images[displayedImageIndex]);

// TODO Add buttons to switch between images

// let currentImageIndex = 0; // already did this above

const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");

function updateFullscreenImage() {
  createFullscreenImage(images[currentImageIndex]);
}

buttonLeft.addEventListener("click", function () {
  if (currentImageIndex === 0) {
    //if current index is 0
    currentImageIndex = images.length - 1; // when clicking left (we are on the first image of the array) ==> display last image
  } else {
    currentImageIndex = currentImageIndex - 1; // for any other image in the array ==> go down one
  }
  updateFullscreenImage(); //update the fullscreen image with the current index
});

//had to look this up, but like we saw in class "the last index in an array is represented by the length total -1" or "array.leght - 1"

buttonRight.addEventListener("click", function () {
  if (currentImageIndex === images.length - 1) {
    //if the current index is equal to the last index in the array
    currentImageIndex = 0; //then on right click set the index to 0 and go back to the first image
  } else {
    currentImageIndex = currentImageIndex + 1; // for all other cases move forward
  }
  updateFullscreenImage(); //update the image
});

// get the index from the img being displayed
// set event on click
// add 1 to our index value
// clear and display

// TODO Add event listener that hides the thumbnail container when button is clicked (visibility: hidden) and changes the position of the button as well as the icon inside it (from up to down and viceversa)

// Attemp #1
// const hideButton = document.getElementById("hide-button");
// const thumbnailButtonIcon = document.querySelector("i");

// hideButton.addEventListener("click", function () {
//   if (thumbnailContainer.style.visibility === "hidden") {
//     thumbnailContainer.style.visibility = "visible";
//     hideButton.style.setProperty("bottom", "25dvh");
//     thumbnailButtonIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
//   } else {
//     thumbnailContainer.style.visibility = "hidden";
//     thumbnailButtonIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
//     hideButton.style.setProperty("bottom", "5dvh");
//   }
// });

//This works fine for mobile or screens smaller than 600px. However, the button takes the property bottom to be 25dvh when the button is clicked and the thumbnail container is hidden, which works for mobile, but not for desktop since we set up a mediaquery to control this for the different screen size. In order to fix this, I decided to try and control this with a new CSS class instead that we will add or remove when needed (.hide-button-bottom) (I'm great at naming)

//Attempt 2

// const hideButton = document.getElementById("hide-button");
// const thumbnailButtonIcon = document.querySelector("i");

// hideButton.addEventListener("click", function () {
//   if (thumbnailContainer.style.visibility === "hidden") {
//     thumbnailContainer.style.visibility = "visible";
//     hideButton.classList.remove("hide-button-bottom");
//     thumbnailButtonIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
//   } else {
//     thumbnailContainer.style.visibility = "hidden";
//     thumbnailButtonIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
//     hideButton.classList.add("hide-button-bottom");
//   }
// });

// I did this and then realised the example asks for the thumbnail container to appear at the top on desktop and bottom on mobile, which means the button will appear in the wrong place when switching screes. To simplofy this a bit I thought I'd create 2 different buttons for each version of the gallery (desktop and mobile) and place them in different places of the screen

//This one will control the mobile button

const hideButton = document.getElementById("hide-button");
const thumbnailButtonIcon = document.getElementById("icon-mobile");

hideButton.addEventListener("click", function () {
  if (thumbnailContainer.style.visibility === "hidden") {
    thumbnailContainer.style.visibility = "visible";
    hideButton.style.setProperty("bottom", "20dvh");
    thumbnailButtonIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
  } else {
    thumbnailContainer.style.visibility = "hidden";
    thumbnailButtonIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    hideButton.style.setProperty("bottom", "5dvh");
  }
});

// this one will control the desktop button

const hideButtonLarge = document.getElementById("hide-button-large");
const thumbnailButtonIconLarge = document.getElementById("icon-desktop");

hideButtonLarge.addEventListener("click", function () {
  if (thumbnailContainer.style.visibility === "hidden") {
    thumbnailContainer.style.visibility = "visible";
    hideButtonLarge.style.setProperty("top", "15dvh");
    thumbnailButtonIconLarge.classList.replace(
      "fa-chevron-down",
      "fa-chevron-up"
    );
  } else {
    thumbnailContainer.style.visibility = "hidden";
    thumbnailButtonIconLarge.classList.replace(
      "fa-chevron-up",
      "fa-chevron-down"
    );
    hideButtonLarge.style.setProperty("top", "3dvh");
  }
});
