const popup = document.querySelector(".popup");
const share_icons = document.querySelectorAll(".share_icon");

share_icons.forEach((share_icon) =>
    share_icon.addEventListener("click", () => {
        popup.classList.toggle("hidden");
        document.getElementById("regular_icon").classList.toggle("change_btn_colour");
    }))