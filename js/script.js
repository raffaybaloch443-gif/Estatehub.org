const images = {
  house: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  villa: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  apartment: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
  plaza: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  plot: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
};

function setImages() {
  document.querySelectorAll("[data-img]").forEach((el) => {
    const src = images[el.dataset.img];
    if (!src) return;
    const existing = el.innerHTML;
    el.innerHTML = `<img src="${src}" alt="${el.dataset.alt || "Property image"}">${existing}`;
  });
}

function enableTabs() {
  document.querySelectorAll(".tabs button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

function enableGallery() {
  const main = document.querySelector("[data-gallery-main]");
  if (!main) return;
  document.querySelectorAll("[data-thumb]").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      document.querySelectorAll("[data-thumb]").forEach((item) => item.classList.remove("active"));
      thumb.classList.add("active");
      main.innerHTML = thumb.innerHTML;
    });
  });
}

function fakeSubmit() {
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button[type='submit'], .btn");
      if (!button) return;
      const text = button.textContent;
      button.textContent = "Submitted";
      setTimeout(() => {
        button.textContent = text;
      }, 1400);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setImages();
  enableTabs();
  enableGallery();
  fakeSubmit();
});
