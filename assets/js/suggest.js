const logoutBtn = document.querySelector(".logout");

window.addEventListener("load", (e) => {
  e.preventDefault();
  if (!localStorage.getItem("token")) {
    window.location.href = "index.html";
  } else {
    window.location.href = "suggest.html";
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "index.html";
});
