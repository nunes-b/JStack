const client = require('./index');

exports.query = async (query, values) => {
  const result = await client.query(query, values);
  return result.rows;
};
