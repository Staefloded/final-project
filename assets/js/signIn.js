let form = document.querySelector("form");
let container = document.querySelector(".container");
const email = form.elements["email"];
const password = form.elements["password"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const emailValue = email.value;
  const passwordValue = password.value;

  (async function signInAuth() {
    try {
      const dataValue = {
        email: emailValue,
        password: passwordValue,
      };

      const response = await fetch("https://jsminnastore.herokuapp.com/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataValue),
      });

      const data = await response.json();
      const { token } = data.payload;

      localStorage.setItem("token", token);
      window.location.href = "suggest.html";
    } catch (err) {
      localStorage.removeItem("token");
      console.error(err.message);
    }
  })();
}
