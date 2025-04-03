document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll(".poll-option input");
    const percentages = [75, 15, 5];
    const pollContainer = document.querySelector(".poll-container");
    
    options.forEach((input, index) => {
        input.addEventListener("change", function() {
            if (this.checked) {
                pollContainer.classList.add("voted");
                this.closest('.poll-option').classList.add('selected');
                
                options.forEach(opt => {
                    if (opt !== this) {
                        opt.disabled = true;
                    }
                });
                
                setTimeout(() => {
                    document.querySelectorAll(".progress").forEach((bar, i) => {
                        setTimeout(() => {
                            bar.style.width = percentages[i] + "%";
                        }, i * 200);
                    });
                }, 300);
            }
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