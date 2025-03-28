document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll(".poll-option input");
    const percentages = [75, 15, 5];
    
    options.forEach((input, index) => {
        input.addEventListener("change", () => {
            document.querySelectorAll(".progress-container, .percent").forEach(el => {
                el.style.display = "block";
            });
            document.querySelectorAll(".progress").forEach((bar, i) => {
                bar.style.width = percentages[i] + "%";
            });
        });
    });

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".gallery-image");

    images.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});