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
        name: "Eva Sawyer",
        job: "CEO, Fashworks",
        image: "https://i.postimg.cc/mgp4pfz5/profile-image-1.png",
        testimonial:
            "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
    },
    {
        name: "Nitin Gadkari",
        job: "Politician",
        image: "https://i.postimg.cc/PfSSwtB9/profile-image-2.png",
        testimonial:
            "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
    },
    {
        name: "Akshay Kumar",
        job: "Actor",
        image: "https://i.postimg.cc/W4mnbjG9/profile-image-3.png",
        testimonial:
            "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    },
    {
        name: "Rajesh Mehata",
        job: "Product Manager",
        image: "https://i.postimg.cc/xdLsJL23/profile-image-4.png",
        testimonial:
            "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
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
      <h6>${testimonials[i].job}</h6>
    `;
};
window.onload = displayTestimonial;


// gallery
// document.querySelectorAll('.gallery-container video').forEach(vid => {
//     vid.onclick = () => {
//         console.log(vid);
//         document.querySelector('.popup-video').style.display = 'block';
//         document.querySelector('.popup-video video').src = vid.getAttribute('src');
//     }
// });