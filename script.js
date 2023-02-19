let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

}

// let countDate = new Date('june 1, 2021 00:00:00').getTime();

// function CountDown(){

//     let now = new Date().getTime();
//     gap = countDate - now;

//     let second = 1000;
//     let minute = second * 60;
//     let hour = minute * 60;
//     let day = hour * 24;

//     let d = Math.floor(gap / (day));
//     let h = Math.floor((gap % (day)) / (hour));
//     let m = Math.floor((gap % (hour)) / (minute));
//     let s = Math.floor((gap % (minute)) / (second));

//     document.getElementById('day').innerText = d;
//     document.getElementById('hour').innerText = h;
//     document.getElementById('minute').innerText = m;
//     document.getElementById('second').innerText = s;

// }

// setInterval(function(){
//     CountDown();
// },1000)


//Testimonial Data
const testimonials = [
    {
        name: "Aarav Patel",
        // job: "CEO, Fashworks",

        image: "./images/testimonial-avatar1.png",
        testimonial:
            "I just received my first box of fruit from this website, and I'm blown away by the quality! Everything was so fresh and delicious. I can't wait to order again.",
    },
    {
        name: "Rohit Singh",
        // job: "Politician",
        image: "./images/testimonial-avatar2.png",
        testimonial:
            "I was skeptical about ordering fruit online, but this website exceeded my expectations. The fruit was ripe and juicy, and the ordering process was easy.",
    },
    {
        name: "Anjali Sharma",
        // job: "Actor",
        image: "./images/testimonial-avatar3.png",
        testimonial:
            "I was impressed by the variety of fruits available on this website. I was able to get everything I needed for a tropical fruit salad, and it turned out delicious!",
    },
    {
        name: "Priya Menon",
        // job: "Product Manager",
        image: "./images/testimonial-avatar4.png",
        testimonial:
            "I appreciate that this website offers organic and locally sourced fruits. It's great to know that I'm supporting small farmers while getting delicious fruits.",
    },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});
prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
});

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
    `;
};
window.onload = displayTestimonial;

// carousel
const CarouselButtons = document.querySelectorAll("[data-carousel-button]");

CarouselButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

const autoSlideDelay = 5000; // Delay between automatic slides (in milliseconds)

let autoSlideInterval = setInterval(() => {
    const nextButton = document.querySelector("[data-carousel-button='next']");
    nextButton.click();
}, autoSlideDelay);

// Stop automatic sliding when user interacts with the carousel
const carousel = document.querySelector("[data-carousel]");
carousel.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
});
carousel.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(() => {
        const nextButton = document.querySelector("[data-carousel-button='next']");
        nextButton.click();
    }, autoSlideDelay);
});
