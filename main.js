// JavaScript to simulate waitlist counter and form alert

const startDate = new Date("2025-07-10");
const today = new Date();
const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
const baseCount = 187;
const total = baseCount + daysPassed * 15;

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll("#waitlist-count, #waitlist-count-cta");
  counters.forEach(el => el.innerText = total);
});

function joinWaitlist() {
  alert("🎉 Thanks for joining the waitlist! You'll be notified soon.");
}
function joinWaitlist() {
    document.getElementById("waitlist-modal").classList.remove("hidden");
  }
  
  function closeModal() {
    document.getElementById("waitlist-modal").classList.add("hidden");
  }
  
  // Optional: Handle form response
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("waitlist-form");
    const message = document.getElementById("form-message");
  
    if (form) {
      form.addEventListener("submit", () => {
        message.classList.remove("hidden");
        message.textContent = "Submitting...";
      });
  
      form.addEventListener("formsubmit:success", () => {
        message.textContent = "✅ Thank you! You’re on the waitlist.";
      });
  
      form.addEventListener("formsubmit:error", () => {
        message.textContent = "❌ Something went wrong. Try again.";
      });
    }
  });
  