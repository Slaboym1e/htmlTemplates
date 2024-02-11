let accs = document.getElementsByClassName("accordion__header");

[...accs].map((el) => {
  el.addEventListener("click", function () {
    let body = this.nextElementSibling;
    console.log([...body.classList].length === 1);
    body.classList.toggle(
      "accordion__body-show",
      [...body.classList].length === 1
    );
  });
});
