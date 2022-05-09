const box = document.querySelector(".testimonial__box");
const tab = document.querySelectorAll(".testimonial__testimony");

box.addEventListener("click", function (e) {
  const click = e.target.closest(".testimonial__img");
  if (!click) return;

  tab.forEach((e) => e.classList.remove("testimonial__testimony--active"));

  click.classList.add(".testimonial__testimony--active");

  document
    .querySelector(`.testimonial__testimony--${click.dataset.tab}`)
    .classList.add("testimonial__testimony--active");
});

const btnRight = document.querySelector(".btnRight");
const btnLeft = document.querySelector(".btnLeft");
const slide = document.querySelectorAll(".testimonial__testimony");

let index = 0;
const maxTab = tab.length;

function next(direction) {
  if (direction === "next") {
    index++;

    if (index === maxTab) {
      index = 0;
    }
  } else {
    if (index === 0) {
      index = maxTab - 1;
    } else {
      index--;
    }
  }

  for (i = 0; i < tab.length; i++) {
    slide[i].classList.remove("testimonial__testimony--active");
  }

  slide[index].classList.add("testimonial__testimony--active");
}

btnRight.onclick = function () {
  next("next");
};
btnLeft.onclick = function () {
  next("prev");
};
