let form = document.querySelector("form");
let container = document.querySelector(".container");
const fullName = form.elements["fullname"];
const email = form.elements["email"];
const mobileNumber = form.elements["telephone"];
const address = form.elements["address"];
const gender = form.elements["gender"];
const password = form.elements["password"];
const password2 = form.elements["password2"];
const btn = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const addressValue = address.value;
  const mobileNumberValue = mobileNumber.value;
  const genderValue = gender.value;
  const passwordValue = password.value;
  const password2Value = password2.value;

  if (passwordValue === password2Value) {
    (async function signUpAuth() {
      try {
        const data = {
          fullName: fullNameValue,
          email: emailValue,
          mobileNumber: mobileNumberValue,
          address: addressValue,
          gender: genderValue,
          password: passwordValue,
        };

        const response = await fetch("https://jsminnastore.herokuapp.com/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const json = await response.json();
        // console.log(json.payload.message);
        localStorage.setItem("token", json.payload.token);
        window.location.href = "suggest.html";
      } catch (err) {
        localStorage.removeItem("token");
        console.error(err.message);
      }
    })();
  } else {
  }
}
