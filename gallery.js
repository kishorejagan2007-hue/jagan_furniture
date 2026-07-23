const images = document.querySelectorAll(".gallery-card img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const close = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    });
});

close.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if(e.target === popup){
        popup.style.display = "none";
    }
});