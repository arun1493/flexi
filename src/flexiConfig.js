export const flexiConfig = {

    items: [

        {
            "name": "person_name",

            "label": "Person's Name",

            "type": 'TextField',

        },

        {

            "name": "states",

            "label": "Person's state",

            "type": "DropDown",

            "values": [

                "Maharashtra",

                "Kerala",

                "Tamil Nadu"

            ]

        },

        {

            "title": "College Details",

            "type": 'Container',

            "children": [
                {
                    "name": "college",

                    "label": "College",

                    "type": 'TextField',

                },
                {
                    "title": "Department details",

                    "type": 'Container',

                    "children": [
                        {
                            "name": "department",

                            "label": "Department",

                            "type": 'TextField',

                        },

                    ]

                }

            ]

        }

    ]

};