const openButton = document.getElementById("modalBtn");
const closeButton = document.getElementById("closeModal");
const modal = document.querySelector("[data-modal]");
const moreDetail = document.querySelector("[more-detail-btn]");
const dialog = document.querySelector("dialog")

openButton.addEventListener("click", () =>{
    modal.showModal()
})

closeButton.addEventListener("click", () => {
    modal.close()
})

dialog.addEventListener("click", e => {
  const dialogDimensions = dialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close()
  }
})



