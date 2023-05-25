// import { DataTypes } from "sequelize";
// import { database } from "../dataBase/db";
const {DataTypes} = require('sequelize')

module.exports = (database) => {
  database.define("contacts", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
  },{timestamps: false});
}
 


