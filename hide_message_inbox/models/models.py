from odoo import models, fields

class ResConfigSettings(models.TransientModel):
    _inherit = "res.config.settings"

    enable_message_icon = fields.Boolean(
        string="Hide Inbox Icon",
        config_parameter="hide_message_inbox.enable_message_icon",
    )
    
    hide_notification_icon = fields.Boolean(
        string="Hide Activity Counter",
        config_parameter="hide_message_inbox.hide_notification_icon",
    )
