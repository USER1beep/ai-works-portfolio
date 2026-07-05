const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("close-btn");

let lastFocused = null;

function openModal(card) {
  const img = card.querySelector("img");
  const title = card.querySelector(".card-title")?.textContent;
  const desc = card.querySelector(".card-desc")?.textContent;
  if (!img || !title || !desc) return;
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
    // モーダル内のフォーカス可能要素の先頭/末尾でTabを折り返し、
    // 背後のヘッダー等にフォーカスが漏れないようにする
    const focusable = modal.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});
