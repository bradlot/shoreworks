function startBounceAnimation() {
    const elements = document.querySelectorAll(".bounce-container");
    elements.forEach((element) => {
      element.classList.add("bounce-animation");
    });
  
    setTimeout(function() {
      elements.forEach((element) => {
        element.classList.remove("bounce-animation");
      });
    }, 1000);
  }