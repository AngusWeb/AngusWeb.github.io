document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.getElementById("menuBtn");
  var fullscreenmenu = document.querySelector(".fullscreen-menu");
  var cross = document.querySelector('.fas.fa-times');
  var bars = document.querySelector('.fas.fa-bars');

  menuBtn.addEventListener("change", function () {
    if (menuBtn.checked) {
      // Trigger animation when checkbox is checked
      fullscreenmenu.classList.add("animate");
      cross.classList.add("animate");
      bars.classList.add("animate");

      // Move the objects into view by changing the right position
      fullscreenmenu.style.right = "6%";
      cross.style.right = "1%"; // Adjust as needed
      bars.style.right = "-100%"; // Move bars off-screen to the right
    } else {
      fullscreenmenu.classList.remove("animate");
      cross.classList.remove("animate");
      bars.classList.remove("animate");

      // Move the objects off-screen to the right when checkbox is unchecked
      fullscreenmenu.style.right = "100%";
      cross.style.right = "-100%";
      bars.style.right = "20px"; // Move bars back on-screen to the right
    }
  });


});