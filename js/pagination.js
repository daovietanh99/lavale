class Pagination {
    constructor(id, display_pages, num_pages, current_page) {
        this.id = id
        this.pagination = document.getElementById(id);
        this.pagination_list = this.pagination.querySelectorAll("[data-pagination-pages]")[0]
        this.pagination_prev = this.pagination.querySelectorAll("[data-pagination-prev]")[0]
        this.pagination_next = this.pagination.querySelectorAll("[data-pagination-next]")[0]
        this.display_pages = display_pages
        this.num_pages = num_pages

        this.change_current_page(current_page)

        return this.pagination
    }

    get_inner_html(start_page, end_page) {
        let inner_html = ""
        for (let i = start_page; i <= end_page; i++) {
            inner_html += `
                <div id=${this.id + "_" + i} class="
                    w-[55px] aspect-[1/1] cursor-pointer
                    border-0 border-white rounded-[8px]
                    flex justify-center align-center items-center
                    font-monsterrat font-semibold text-[18px] leading-[24px] text-white
                ">
                    ${i}
                </div>
            `
        }
        return inner_html
    }

    set_current_page(current_page) {
        try {
            let current = this.pagination_list.getElementsByClassName("border-[2px]")[0]
            current.classList.add("border-0")
            current.classList.remove("border-[2px]")
        } catch {
            console.log("DO NOT HAVE ACTIVE")
        }

        document.getElementById(this.id + "_" + current_page).classList.add("border-[2px]")
        document.getElementById(this.id + "_" + current_page).classList.remove("border-0")

        if (current_page - 1 > 0) {
            this.pagination_prev.classList.add("text-white")
            this.pagination_prev.classList.remove("text-white/30")
        } else {
            this.pagination_prev.classList.remove("text-white")
            this.pagination_prev.classList.add("text-white/30")
        }

        if (current_page + 1 > this.num_pages) {
            this.pagination_next.classList.remove("text-white")
            this.pagination_next.classList.add("text-white/30")
        } else {
            this.pagination_next.classList.add("text-white")
            this.pagination_next.classList.remove("text-white/30")
        }
    }

    change_current_page(current_page) {
        let start_index = current_page
        let end_index = current_page

        while (true) {
            let running = false
            if (start_index - 1 > 0 && end_index - start_index + 2 <= this.display_pages) {
                start_index -= 1
                running = true
            }
            if (end_index + 1 <= this.num_pages && end_index - start_index + 2 <= this.display_pages) {
                end_index += 1
                running = true
            }
            if (!running || end_index - start_index + 1 == this.display_pages) {
                break
            } 
        }

        this.pagination_list.innerHTML = this.get_inner_html(start_index, end_index)

        this.set_current_page(current_page)
    }
}