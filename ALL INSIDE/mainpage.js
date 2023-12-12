var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}

function showDetails() {
    // Logika untuk menampilkan detail film
    alert("Movie details will be shown here.");
}

let currentSet = 0;
    const totalSets = 2; // Total set gambar
    const images = [
        [
            "Ghibli Inspired Wallapaper.jpg",
            "coffee shop with warm atmosphere [ wallpaper 4k ].jpg",
            "download.jpg"
        ],
        [
            // Tambahkan 3 gambar lagi untuk set kedua
            "mesin raksasa.jpg",
            "orang melamun.jpg",
            "rumah hobbit.jpg"
        ]
    ];

    function showDetails() {
        // Logika untuk menampilkan detail film
        alert("Movie details will be shown here.");
    }

    function changeSlide(direction) {
        const movieCarousel = document.querySelector('.movie-carousel');

        currentSet += direction;

        if (currentSet >= totalSets) {
            currentSet = 0;
        } else if (currentSet < 0) {
            currentSet = totalSets - 1;
        }

        updateImage(images[currentSet]);
        const translateValue = -100 * currentSet;
        movieCarousel.style.transform = `translateX(${translateValue}%)`;
    }

    function updateImage(imageSet) {
        const imageElements = document.querySelectorAll('.movie-entry img');

        for (let i = 0; i < 3; i++) {
            imageElements[i].src = imageSet[i];
        }
    }