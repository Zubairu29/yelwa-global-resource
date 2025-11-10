document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("fb-link").href = "https://www.facebook.com/zubauru.tukur";
document.getElementById("tw-link").href = "https://x.com/Cyber_Ghostz";
document.getElementById("wa-link").href = "https://wa.me/2348102341729";

document.getElementById("open-gallery").addEventListener("click", () => {
  const gallery = document.querySelector(".gallery");
  gallery.scrollIntoView({ behavior: "smooth" });
});
