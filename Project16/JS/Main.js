const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index01) => {
  star.addEventListener("click", () => { 
    stars.forEach((star, index02) => {
        index01 >= index02 ? star.classList.add("active") : star.classList.remove("active");
  });
 
  });
});
