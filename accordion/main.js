const accordion = document.querySelector(".accordion");
const content = document.querySelector(".content");

accordion.addEventListener("click", () => {
  console.log(content.classList.contains("open"));
  console.log(content.classList);
  content.classList.contains("open")
    ? content.classList.remove("open")
    : content.classList.add("open");
  // ? content.classList.remove("open")
  // : content.classList.add("open");
});
