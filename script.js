// ===== Image Slider (Home Page) =====
let images = ["images/slide1.jpg","images/slide2.jpg","images/slide3.jpg"];
let i = 0;
if (document.getElementById("slide")) {
  setInterval(() => {
    i = (i + 1) % images.length;
    document.getElementById("slide").src = images[i];
  }, 3000);
}

// ===== Skills Progress Bars (About Page) =====
window.addEventListener("scroll", () => {
  let bars = document.querySelectorAll(".progress");
  bars.forEach(bar => {
    let value = bar.textContent;
    if (bar.getBoundingClientRect().top < window.innerHeight) {
      bar.style.width = value;
    }
  });
});

// ===== Contact Form Validation =====
let contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || !email.includes("@")) {
      alert("⚠️ Please enter a valid name and email.");
    } else {
      document.getElementById("successMsg").style.display = "block";
      contactForm.reset();
    }
  });
}

let exploreBtn = document.getElementById("exploreBtn");
// click event
exploreBtn.addEventListener("click", function() {
  let exploreText = document.getElementById("exploreText");
  
  // Show the text
  exploreText.style.display = "block";
});
