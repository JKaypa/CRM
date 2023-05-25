const { contacts } = require("../dataBase/db");
const { Op } = require("sequelize");

async function createContact(req, res) {
  try {
    const { name, lastName, email, phone, address } = req.body;

    if (!name || !lastName || !email || !phone || !address)
      throw new Error("missing data");

    const fullName = `${name} ${lastName}`;

    await contacts.create({
      fullName,
      email,
      phone,
      address,
    });

    res.send("Contact successfully created");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function getContacts(req, res) {
  const { data } = req.query;
  console.log(data);
  if (data) {
    const response = await contacts.findAll({
      where: {
        fullName: {
          [Op.iLike]: `%${data}%`,
        },
      },
    });
    const query = response.map((contact) => {
      return {
        id: contact.id,
        name: contact.fullName.split(" ")[0],
        lastName: contact.fullName.split(" ")[1],
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
      };
    });
    console.log(query);
    return res.json(query);
  } else {
    const response = await contacts.findAll();

    const allContacts = response.map((contact) => {
      return {
        id: contact.id,
        name: contact.fullName.split(" ")[0],
        lastName: contact.fullName.split(" ")[1],
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
      };
    });

    res.json(allContacts);
  }
}

async function getById(req, res) {
  const { id } = req.params;
  const response = await contacts.findByPk(id);
  const contact = {
    id: response.id,
    name: response.fullName.split(" ")[0],
    lastName: response.fullName.split(" ")[1],
    email: response.email,
    phone: response.phone,
    address: response.address,
  };

  res.json(contact);
}

async function updateContact(req, res) {
  const { id } = req.params;
  const { name, lastName, email, phone, address } = req.body;
  const fullName = `${name} ${lastName}`;
  const toUpdate = { fullName, email, phone, address };
  await contacts.update(toUpdate, { where: {id} });
  res.send("Contact up to date");
}

async function deleteContact(req, res) {
  const { id } = req.params;
  await contacts.destroy({ where: { id: id } });
  res.send("Contact removed");
}

module.exports = {
  createContact,
  getContacts,
  getById,
  updateContact,
  deleteContact,
};
