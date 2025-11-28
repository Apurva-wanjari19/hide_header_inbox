{
    'name': "hide_message_inbox",

    'summary': "Allows administrators to show or hide the messaging inbox icon based on a system configuration setting.",

    'description': """
This module adds a configuration option under General Settings to control the visibility
of the messaging inbox icon in the Odoo top bar. Administrators can enable or disable
the inbox icon with a single checkbox. When enabled, the module dynamically hides the
messaging icon using a frontend script without modifying any core Odoo files.    """,

    'author': "Apurva Wanjari",
    'license': 'LGPL-3',
    'version': '0.17',

    'depends': ['base', 'mail'],

    # always loaded
    'data': [
        'views/views.xml',
    ],
    
     'assets': {
        'web.assets_backend': [
            'hide_message_inbox/static/src/js/message_menu_hide.js',
        ]
    },
    'images': ['static/description/banner.jpg'],
    'installable': True,
}

