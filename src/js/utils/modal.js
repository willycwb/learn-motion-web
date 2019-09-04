import {Tools} from "./tools"

export class Modal extends Tools {
    constructor() {
        super();
        let { $ } = this;
        $(".open-modal").forEach($btn => {
            $btn.addEventListener("click", event => {
                event.preventDefault();
                console.log("oi");
                let target = event.target.getAttribute("target");
                this.addClass(this.$(target)[0], "modal--opened");
            });
        });

        $(".modal .close").forEach($btn => {
            $btn.addEventListener("click", event => {
                event.preventDefault();
                this.$(".modal--opened").forEach($modal => {
                    this.removeClass($modal, "modal--opened");
                });
            })
        });

        document.addEventListener("keyup", event => {
            if (event.keyCode == 27) {
                this.$(".modal--opened").forEach($modal => {
                    this.removeClass($modal, "modal--opened");
                });
            }
        });
    }
}