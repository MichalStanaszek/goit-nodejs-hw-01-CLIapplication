import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from "./contacts.js";

import { Command } from "commander";
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      try {
        const allContacts = listContacts();
        console.log("\nContact list".blue);
        console.table(allContacts);
      } catch (error) {
        console.error(error);
      }
      break;

    case "get":
      try {
        const contact = getContactById();
        console.log(`\nContact: ID ${id}`.blue);
        console.table(contact);
      } catch (error) {
        console.error(error);
      }
      break;

    case "add":
      try {
        const newContact = addContact(name, email, phone);
        console.log(`\nNew contact added: ${name}`.blue);
        console.table(newContact);
      } catch (error) {
        console.error(error);
      }
      break;

    case "remove":
      try {
        const newContact = removeContact(id);
        console.log(`\nContact ${name} has been deleted`.blue);
        console.table(newContact);
      } catch (error) {
        console.error(error);
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
