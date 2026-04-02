const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");
const faqQuestions = document.querySelectorAll(".faq-question");
const fadeItems = document.querySelectorAll(".fade-in");

// スクロールでふわっと表示
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

fadeItems.forEach((item) => {
  observer.observe(item);
});

// ハンバーガーメニュー開閉
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// メニューリンクを押したら閉じる
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
  });
});

// FAQ開閉
faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const icon = this.querySelector(".faq-icon");
    const isOpen = answer.style.display === "block";

    // 他のFAQは閉じず、この項目だけ開閉
    if (isOpen) {
      answer.style.display = "none";
      icon.textContent = "＋";
    } else {
      answer.style.display = "block";
      icon.textContent = "－";
    }
  });
});
