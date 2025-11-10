// Set dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Add your social links
document.getElementById("fb-link").href = "https://www.facebook.com/zubauru.tukur";
document.getElementById("tw-link").href = "https://x.com/Cyber_Ghostz";
document.getElementById("wa-link").href = "https://wa.me/2348102341729";

// Optional: open tech pictures alert
document.getElementById("open-gallery").addEventListener("click", () => {
  const gallery = document.querySelector(".gallery");
  gallery.scrollIntoView({ behavior: "smooth" });
});
