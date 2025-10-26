const openButtons = document.querySelectorAll(".dialodBtn");
const closeButtons = document.querySelectorAll(".closeButton");


// Open specific modal based on data-target
openButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const modal = document.getElementById(targetId);
    if (modal) {
      modal.showModal();
      modal.scrollTop = 0;
    }
  });
});

// Close modal
closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest("dialog");
    if (modal) {
      modal.close();
    }
  });
});

// Close on backdrop click
const modals = document.querySelectorAll(".dataModal");
modals.forEach(dialog => {
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
});
