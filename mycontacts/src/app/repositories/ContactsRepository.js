const contacts = require("../../../mocks/contacts");
const { v4 } = require("uuid");

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const filtered = contacts.find((contact) => contact.id === id);
      resolve(filtered);
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      const filtered = contacts.find((contact) => contact.email === email);
      resolve(filtered);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      const index = contacts.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        contacts.splice(index, 1);
      }
      resolve();
    });
  }

  create({ name, email, phone }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id: v4(),
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, { name, email, phone }) {
    return new Promise((resolve) => {
      const index = contacts.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        contacts[index] = {
          ...contacts[index],
          name,
          email,
          phone,
        };
        resolve(contacts[index]);
      } else {
        resolve(null);
      }
    });
  }
}

module.exports = new ContactsRepository();
