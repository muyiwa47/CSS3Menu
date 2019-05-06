var leftMenuIcon = document.querySelector("#left_menu_icon");
var rightMenuIcon = document.querySelector("#right_menu_icon");
var body = document.querySelector("body");
var l_menu_wrapper = document.querySelector(".l_menu-wrapper");
var r_menu_wrapper = document.querySelector(".r_menu-wrapper");
leftMenuIcon.addEventListener("click", function() {
    if (!this.classList.contains("open")) {
        this.classList.add("open");
        this.classList.remove("closed");
        l_menu_wrapper.classList.add("open");
        l_menu_wrapper.classList.remove("closed");
    } else {
        this.classList.add("closed");
        this.classList.remove("open");
        l_menu_wrapper.classList.add("closed");
        l_menu_wrapper.classList.remove("open");
    }
})

rightMenuIcon.addEventListener("click", function() {
    if (!this.classList.contains("open_r")) {
        this.classList.add("open_r");
        this.classList.remove("closed_r");
        r_menu_wrapper.classList.add("open_r");
        r_menu_wrapper.classList.remove("closed_r");
    } else {
        this.classList.add("closed_r");
        this.classList.remove("open_r");
        r_menu_wrapper.classList.add("closed_r");
        r_menu_wrapper.classList.remove("open_r");
    }
})