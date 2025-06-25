// popup.js
function openModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("popup-form.html")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to load popup-form.html");
      }
      return res.text();
    })
    .then((html) => {
      const div = document.createElement("div");
      div.innerHTML = html;
      document.body.appendChild(div);

      // Attach form submit handler
      const form = document.getElementById("enquiryForm");
      if (form) {
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Form submitted successfully!");
          closeModal();
          form.reset();
        });
      }

      // Attach button click to open modal
      const enquiryBtn = document.getElementById("EnqueryForm");
      if (enquiryBtn) {
        enquiryBtn.addEventListener("click", function (e) {
          e.preventDefault();
          openModal();
        });
      }

      // Optional: Auto-popup after 5 seconds (comment out if not needed)
      // setTimeout(openModal, 5000);
    })
    .catch((err) => console.error(err));
});