# CLI Application - Contact Manager
Application to manage your contact list. You can display contacts, get contact by ID, add and remove contacts.

## Installation
- `npm install` - install all necessary dependencies
- `npm start` - launch application in production mode. Allowing you to manage contacts using the command-line interface. (described in "usage" section)
- `npm run start:dev` - launch application in development mode using the `nodemon` tool, which enables automatic reloading of the application when changes are made in the code.

## Usage
Necessary commands to run this application:

### List Contacts
- `node index.js --action list` - display your contact list

### Get Contact by ID
- `node index.js --action get --id (enter ID)` - get contact by ID

### Add a New Contact
- `node index.js --action add --name (enter name) --(enter email) --phone (enter phone number)` - add new contact (it will add to contacts.js: id, name, email, phone)

### Remove a Contact
- `node index.js --action remove --id (enter ID)` - remove contact by ID
