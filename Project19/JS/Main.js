(() => {
    const pictures = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
  
    document.addEventListener("DOMContentLoaded", () => {
      const buttons = document.querySelectorAll(".btn");
      const imgDiv = document.querySelector(".imageContainer"); 
      let counter = 0;
  
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          if (button.classList.contains("btnLeft")) {
            counter--;
            if (counter < 0) {
              counter = pictures.length - 1;
            }
          }
  
          if (button.classList.contains("btnRight")) {
            counter++;
            if (counter > pictures.length - 1) {
              counter = 0;
            }
          }
  
          imgDiv.style.backgroundImage = `url("./Image/${pictures[counter]}.jpg")`; 
        });
      });
    });
  })();
