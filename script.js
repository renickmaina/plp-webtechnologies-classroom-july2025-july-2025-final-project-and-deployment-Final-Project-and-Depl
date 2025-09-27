// Hero button
document.addEventListener("DOMContentLoaded", () => {
  const learnBtn = document.getElementById("learnMoreBtn");
  if (learnBtn) {
    learnBtn.addEventListener("click", () => {
      window.location.href = "features.html";
    });
  }
});

// Tabs
function openTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}
window.openTab = openTab;

// Form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();

    if (name === "" || email === "" || msg === "") {
      document.getElementById("formMsg").innerText = "Please fill out all fields.";
      document.getElementById("formMsg").style.color = "red";
    } else {
      document.getElementById("formMsg").innerText = "Message sent successfully!";
      document.getElementById("formMsg").style.color = "green";
      form.reset();
    }
  });
}
