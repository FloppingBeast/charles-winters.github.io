document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const codeBlocks = document.querySelectorAll(".code-block");
  const explanations = document.querySelectorAll(".explanation");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove("active"));
      codeBlocks.forEach(c => c.classList.remove("active"));
      explanations.forEach(e => e.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(target)?.classList.add("active");
      document
        .querySelector(`.explanation[data-tab="${target}"]`)
        ?.classList.add("active");
    });
  });
});