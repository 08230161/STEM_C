
// === Feedback Modal ===
// const overlay = document.getElementById('modalOverlay'); // Removed duplicate declaration

// Open feedback modal
const feedbackBtn = document.querySelector('.feedback-modal-btn');
if (feedbackBtn) {
  feedbackBtn.addEventListener('click', (e) => {
    e.preventDefault(); // stop page jump
    feedbackModal.style.display = 'block';
    overlay.style.display = 'block';
  });
}

/// Select elements
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const feedbackModal = document.getElementById("feedbackModal");

const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");
const closeFeedback = document.getElementById("closeFeedback");

const overlay = document.getElementById("modalOverlay");

// 🔹 Function to open a modal
function openModal(modal) {
  modal.classList.add("active");
  overlay.classList.add("active");
}

// 🔹 Function to close all modals
function closeModals() {
  [loginModal, signupModal, feedbackModal].forEach(m => m.classList.remove("active"));
  overlay.classList.remove("active");
}

// 🔹 Event Listeners
loginBtn.addEventListener("click", () => openModal(loginModal));
signupBtn.addEventListener("click", () => openModal(signupModal));
feedbackBtn.addEventListener("click", () => openModal(feedbackModal));

closeLogin.addEventListener("click", closeModals);
closeSignup.addEventListener("click", closeModals);
closeFeedback.addEventListener("click", closeModals);

overlay.addEventListener("click", closeModals); // close when clicking outside

// === Hamburger Menu ===
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

if (hamburger && sideMenu) {
  // Toggle menu when hamburger is clicked
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent immediate closing
    sideMenu.classList.toggle('active');
  });

  // Prevent closing when clicking inside the menu
  sideMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close menu when clicking anywhere else on the page
  document.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });
}
