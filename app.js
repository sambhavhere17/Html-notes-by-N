// Show alert when page is loaded
window.onload = () => {
  console.log("Welcome Sambhav ❤️ Niharika!");
  alert("Welcome to your HTML learning notes 😄");
};

// Add dynamic love quote at the top
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("header h2");
  if (
    heading.innerText.includes("Sambhav") &&
    heading.innerText.includes("Niharika")
  ) {
    heading.style.color = "#e91e63";
    heading.style.fontWeight = "bold";
    heading.style.textShadow = "1px 1px 3px black";
  }
});

// Smooth scroll to each section on click (Optional: if you add a nav menu)
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight all <section> headers on hover
document.querySelectorAll("section h3, section h2").forEach((heading) => {
  heading.addEventListener("mouseover", () => {
    heading.style.backgroundColor = "#fce4ec";
    heading.style.transition = "0.3s ease";
  });
  heading.addEventListener("mouseout", () => {
    heading.style.backgroundColor = "";
  });
});

// Add a keyboard shortcut to scroll to top
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "ArrowUp") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// Fun Easter Egg: press "L" key for a love message
document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "l") {
    alert("Sambhav ❤️ Niharika forever 💘");
  }
});
