(() => {
  "use strict";

  const WHATSAPP_NUMBER = "919844555488";

  function initGallery() {
    const track = document.getElementById("galleryTrack");
    const prev = document.getElementById("galleryPrev");
    const next = document.getElementById("galleryNext");
    if (!track || !prev || !next) return;

    function scrollByCard(dir) {
      const card = track.firstElementChild;
      const amount = card ? card.getBoundingClientRect().width + 12 : 280;
      track.scrollBy({ left: dir * amount, behavior: "smooth" });
    }

    prev.addEventListener("click", () => scrollByCard(-1));
    next.addEventListener("click", () => scrollByCard(1));
  }

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("contactSuccess");
    if (!form || !success) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
      const text =
        `New enquiry from the RR Cycle Mart website:\nName: ${name}\nPhone: ${phone}\nMessage: ${message || "(none)"}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
      form.classList.add("hidden");
      success.classList.remove("hidden");
    });
  }

  initGallery();
  initContactForm();
})();

