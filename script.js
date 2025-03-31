// Home page
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}
document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((element) => {
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight) {
            element.classList.add("visible");
        }
    });
});
// Result and outcome
    document.querySelectorAll('.progress-circle').forEach(circle => {
      const percent = circle.dataset.percent;
      const color = circle.dataset.color;
      const progressBar = circle.querySelector('.progress-bar');
      const percentage = circle.querySelector('.percentage');
      const circumference = 339.292; // 2 * π * radius (54)
      
      // Set stroke color
      progressBar.style.stroke = color;

      // Animate percentage
      let currentPercent = 0;
      const interval = setInterval(() => {
        if (currentPercent >= percent) {
          clearInterval(interval);
        } else {
          currentPercent++;
          const offset = circumference - (currentPercent / 100) * circumference;
          progressBar.style.strokeDashoffset = offset;
          percentage.textContent = `${currentPercent}%`;
        }
      }, 15);
    });