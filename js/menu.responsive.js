class MenuResponsive {
    static init() {
        this.full_doc = document.getElementsByTagName("html")
        this.full_menu = document.querySelectorAll('[data-menu="full-menu"]');
        this.simple_menu_show = document.querySelectorAll('[data-menu="simple-menu-show"]');
        this.simple_menu_popup = document.querySelectorAll('[data-menu="simple-menu-popup"]');
        this.toggle_open = document.querySelectorAll('[data-menu="toggle-open"]');
        this.toggle_close = document.querySelectorAll('[data-menu="toggle-close"]');

        this.toggle_open[0].addEventListener("click", (e) => {
            this.simple_menu_popup[0].classList.remove("hidden");
            this.simple_menu_popup[0].classList.remove("fade-out-right");
            this.simple_menu_popup[0].classList.add("fade-in-right");
            this.full_doc[0].classList.add("overflow-hidden")
        })

        this.toggle_close[0].addEventListener("click", (e) => {
            this.simple_menu_popup[0].classList.remove("fade-in-right");
            this.simple_menu_popup[0].classList.add("fade-out-right");
            setTimeout(() => {this.simple_menu_popup[0].classList.add("hidden");}, 500)
            this.full_doc[0].classList.remove("overflow-hidden")
        })
    }
}