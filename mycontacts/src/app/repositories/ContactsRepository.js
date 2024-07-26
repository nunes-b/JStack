const db = require('../../database/queries');

class ContactsRepository {
  async findAll(orderBy = "name") {
   const rows = await db.query(`SELECT * FROM contacts order by ${orderBy}`)
   return rows
  }

  async findById(id) {
    const row = await db.query("SELECT * FROM contacts WHERE id = $1", [id])
    return row
  }

   async findByEmail(email) {
    const [row] = await db.query("SELECT * FROM contacts WHERE email = $1", [email])
    return row
  }

  async delete(id) {
   await db.query("DELETE FROM contacts WHERE id = $1", [id])
    return true
  }

  async create({ name, email, phone, category_id }) {
    const rows = await db.query(
      "INSERT INTO contacts(name, email, phone, category_id) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, phone, category_id],
    );
    return rows[0];
  }

  async update(id, { name, email, phone , category_id}) {
    const rows = await db.query(
      "UPDATE contacts SET name = $1, email = $2, phone = $3, category_id = $4 WHERE id = $5  RETURNING *",
      [name, email, phone, category_id, id]
    )
    return rows
  }
}

module.exports = new ContactsRepository();
