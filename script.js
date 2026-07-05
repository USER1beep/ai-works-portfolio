const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("close-btn");

let lastFocused = null;

function openModal(card) {
  const img = card.querySelector("img");
  const title = card.querySelector(".card-title").textContent;
  const desc = card.querySelector(".card-desc").textContent;
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  lastFocused = document.activeElement;
  modal.hidden = false;
  closeBtn.focus();
}

function closeModal() {
  modal.hidden = true;
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => openModal(card));
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "Tab") {
    // モーダル内でフォーカス可能なのは閉じるボタンのみのため、Tab/Shift+Tabとも
    // 閉じるボタンに固定してモーダル外(背後のヘッダー等)へフォーカスが漏れないようにする
    e.preventDefault();
    closeBtn.focus();
  }
});
