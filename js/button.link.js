class ButtonLink {
    static init() {
        this.button_links = document.querySelectorAll('[data-button-link]:not([data-button-link=""])');
        this.button_links.forEach((ele) => {
            ele.addEventListener("click", (e) => {
                window.location = ele.getAttribute("data-button-link")
            })
        })
        return this.button_links
    }
}