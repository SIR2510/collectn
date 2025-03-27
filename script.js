document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".poll-option input").forEach(input => {
        input.addEventListener("change", function() {
            document.querySelectorAll(".progress-container").forEach(container => {
                container.style.display = "block";
            });

            document.querySelectorAll(".percent").forEach(percent => {
                percent.style.display = "block";
            });

            const progressBars = document.querySelectorAll(".progress");
            const percentages = [75, 15, 5];

            progressBars.forEach((bar, index) => {
                bar.style.width = percentages[index] + "%";
            });
        });
    });

    const imageGrid = document.querySelector('.image-grid');
    let startX, scrollLeft;
    let isDragging = false;

    imageGrid.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - imageGrid.offsetLeft;
        scrollLeft = imageGrid.scrollLeft;
    });

    imageGrid.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    imageGrid.addEventListener('mouseup', () => {
        isDragging = false;
    });

    imageGrid.addEventListener('mousemove', (e) => {
        if(!isDragging) return;
        e.preventDefault();
        const x = e.pageX - imageGrid.offsetLeft;
        const walk = (x - startX) * 2;
        imageGrid.scrollLeft = scrollLeft - walk;
    });

    imageGrid.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - imageGrid.offsetLeft;
        scrollLeft = imageGrid.scrollLeft;
    });

    imageGrid.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - imageGrid.offsetLeft;
        const walk = (x - startX) * 2;
        imageGrid.scrollLeft = scrollLeft - walk;
    });
}); 