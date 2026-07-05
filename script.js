const projects = [
  {
    img: "assets/images/bracket-visualizer.jpeg",
    title: "大会トーナメント表 可視化アプリ",
    desc: "AIコーディングで実装した、試合結果に応じて自動でブラケットが更新される可視化ツールです。"
  },
  {
    img: "assets/images/trophy-landing.jpeg",
    title: "優勝トロフィー演出ページ",
    desc: "大会の象徴であるトロフィーを主役に据えた、余韻を残すランディングページです。"
  },
  {
    img: "assets/images/player-collage.jpeg",
    title: "注目選手紹介コラージュ",
    desc: "複数の選手アイコンを1枚のビジュアルに合成し、注目カードとして紹介する機能です。"
  },
  {
    img: "assets/images/hero-visual.jpeg",
    title: "大会トップビジュアル",
    desc: "スタジアムの臨場感とトロフィーを組み合わせたトップページ用ヒーロー画像です。"
  },
];

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("close-btn");

let lastFocused = null;

function openModal(index) {
  const p = projects[index];
  if (!p) return;
  modalImg.src = p.img;
  modalImg.alt = p.title;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  lastFocused = document.activeElement;
  modal.hidden = false;
  closeBtn.focus();
}

function closeModal() {
  modal.hidden = true;
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    openModal(Number(card.dataset.project));
  });
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});
