// JavaScript code
const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  delete data.applicantEmail;
  data.applicantName = `${data.firstName} ${data.lastName}`;

  const postData = async () => {
    const response = await fetch("https://eodh6njvzgfl22j.m.pipedream.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };
  postData()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  submitButton.disabled = true;
  submitButton.classList.add("submitted");
  submitButton.textContent = "Submitted";

  setTimeout(function () {
    form.reset();
    submitButton.disabled = false;
    submitButton.classList.remove("submitted");
    submitButton.textContent = "Submit";
  }, 2000);
});
