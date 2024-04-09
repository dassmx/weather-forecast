const submitButton = document.querySelector(".custom-input");

submitButton.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    const cityName = document.querySelector("#seach-city").value;

    console.log(cityName); // futuro passar como parametro para um seach em  api.
  }
});
