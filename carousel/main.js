const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
const img = document.querySelector("img");
const dots = document.querySelectorAll(".dot");
const carouselAuthor = document.querySelector(".carousel-author");
const carouselJob = document.querySelector(".carousel-job");
const carouselText = document.querySelector(".carousel-text");

// console.log(img.src);
// console.log(img.alt);

// dots.forEach((dot) => {
//   console.log(dot.classList.contains("dot--fill") ? "True" : "False");
// });

let index = 0;

const quotes = [
  {
    quote: `“You've gotta dance like there's nobody watching, Love like you'll
          never be hurt, Sing like there's nobody listening, And live like it's
          heaven on earth.”`,
    author: "William W. Purkey",
    job: "A public school teacher",
    image: "image2.png",
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm
          not sure about the universe.”`,
    author: "Albert Einstein",
    job: "German-American physicist",
    image: "image1.png",
  },
];

const toggleFill = () => {
  dots.forEach((dot) => {
    dot.classList.contains("dot--fill")
      ? dot.classList.remove("dot--fill")
      : dot.classList.add("dot--fill");
  });
};

btnLeft.addEventListener("click", () => {
  if (index === -1) {
    carouselText.innerHTML = quotes[index].quote;
    carouselAuthor.innerHTML = quotes[index].author;
    carouselJob.innerHTML = quotes[index].job;
    img.src = quotes[index].image;
    img.alt = quotes[index].author;
    index == 1;
  }
  carouselText.innerHTML = quotes[0].quote;
  carouselAuthor.innerHTML = quotes[0].author;
  carouselJob.innerHTML = quotes[0].job;
  img.src = quotes[0].image;
  img.alt = quotes[0].author;

  index--;
  toggleFill();
});
btnRight.addEventListener("click", () => {
  if (index === 2) {
    carouselText.innerHTML = quotes[0].quote;
    carouselAuthor.innerHTML = quotes[0].author;
    carouselJob.innerHTML = quotes[0].job;
    img.src = quotes[0].image;
    img.alt = quotes[0].author;
    index = 0;
  }

  carouselText.innerHTML = quotes[1].quote;
  carouselAuthor.innerHTML = quotes[1].author;
  carouselJob.innerHTML = quotes[1].job;
  img.src = quotes[1].image;
  img.alt = quotes[1].author;

  index++;
  toggleFill();
});
