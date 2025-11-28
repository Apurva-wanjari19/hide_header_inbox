/** @odoo-module **/

import { MessagingMenu } from "@mail/core/public_web/messaging_menu";
import { patch } from "@web/core/utils/patch";
import { useService } from "@web/core/utils/hooks";
import { user } from "@web/core/user";

patch(MessagingMenu.prototype, {
    async setup() {
        // console.log("[MessagingMenu Patch] setup() starting...");
        super.setup();

        this.action = useService("action");
        this.orm = useService("orm");      

        let hide = await this.orm.call(
            "ir.config_parameter",
            "get_param",
            ["hide_message_inbox.enable_message_icon"]
        );

        this.hideInbox = hide === "True" || hide === true;
        // console.log("Hide Inbox From Config:", this.hideInbox);

        // HIDE LOGIC
        if (this.hideInbox) {
            setTimeout(() => {
                const el =
                    document.querySelector("div.o-mail-DiscussSystray-class") ||
                    document.querySelector("button.o-mail-DiscussSystray-class");

                if (el) {
                    el.style.display = "none";
                    // console.log("Inbox icon hidden");
                } else {
                    // console.warn("Messaging systray element not found");
                }
            }, 400);
        }

        // console.log("[MessagingMenu Patch] setup() completed!");
        
        let hideActivity = await this.orm.call(
            "ir.config_parameter",
            "get_param",
            ["hide_message_inbox.hide_notification_icon"]
        );

        this.hideActivity = hideActivity === "True" || hideActivity === true;
        // console.log("Hide Activity Counter Setting:", this.hideActivity);

        if (this.hideActivity) {
            setTimeout(() => {

                const badge = document.querySelector(".o-mail-ActivityMenu-counter");
                const iconBtn = badge ? badge.closest("button") : null;

                if (iconBtn) {
                    iconBtn.style.display = "none";
                    // console.log("Activity Counter icon hidden");
                } else {
                    // console.warn("Activity Counter element NOT found");
                }
            }, 700);
        }
    },

});
