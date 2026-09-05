

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const dots = carousel.querySelectorAll(".dot");
        const titles = carousel.closest('.box, .mini-panel')?.querySelectorAll(".carousel-title");
        const texts = carousel.closest('.box, .mini-panel, .delta-panel')?.querySelectorAll(".carousel-text");
        const images = carousel.closest('.visual-example-panel')?.querySelectorAll(".carousel-visual-example-image");

        dots.forEach(dot => {
            dot.addEventListener("click", () => {
                const index = dot.getAttribute("data-index");

                dots.forEach(d => d.classList.remove("active"));
                titles?.forEach(t => t.classList.remove("active"));
                texts?.forEach(t => t.classList.remove("active"));
                images?.forEach(i => i.classList.remove("active"));

                dot.classList.add("active");
                titles?.[index]?.classList.add("active");
                texts?.[index]?.classList.add("active");
                images?.[index]?.classList.add("active");

      
            });
        });
    });
});



window.onload = function () {
    const videoButton = document.getElementById("openVideo");
    const modal = document.getElementById("videoModal");
    const closeButton = document.querySelector(".close-button");
  
    
    videoButton.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    
    closeButton.onclick = function () {
      modal.style.display = "none";
    };
  
    
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        document.querySelector('.timerClock').innerHTML = timeString;
    }


    setInterval(updateClock, 1000);

    updateClock();
  };
  

 


