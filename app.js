const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroungColor = '#29323c';
    }
    else{
        header.style.backgroungColor = 'transparent'
    }
})

menu_item.forEach(item =>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');

    })
})

const photos = [
    {
        url: "foto1.jpg",
        heading: "Project 1",
        description: "Get such kind of website at affordable price.",
    },
    {
        url: "foto3.jpg",
        heading: "Project 2",
        description: "Hire me for such website and many more.",
    },
    {
        url: "foto4.jpg",
        heading: "Project 3",
        description: "Get such kind of website within short time.",
    },
    {
        url: "pro1.jpg",
        heading: "Project 4",
        description: "Get a premium quality website for your business at friendly price",
    }
    // Add more photo objects here
];

let currentPhotoIndex = 0;
const currentPhoto = document.getElementById("currentPhoto");
const photoHeading = document.getElementById("photoHeading");
const photoDescription = document.getElementById("photoDescription");

function showPhoto(index) {
    if (index >= 0 && index < photos.length) {
        currentPhoto.src = photos[index].url;
        photoHeading.textContent = photos[index].heading;
        photoDescription.textContent = photos[index].description;
        currentPhotoIndex = index;
    }
}

function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
}

function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showPhoto(currentPhotoIndex);
}
