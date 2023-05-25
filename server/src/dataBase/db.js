// import { Sequelize } from "sequelize";
// import ContactModel from '../models/contacts'
const {Sequelize} = require('sequelize')
// import model from '../models/model'
const ContactModel = require('../models/Contacts')

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/crm`, {logging: false});

ContactModel(database)

module.exports = {database, ...database.models}

