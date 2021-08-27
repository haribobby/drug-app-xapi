const { DataTypes } = require('sequelize');
const sequelize = require('../dao/databaseconfig')
const Drug = sequelize.define('drugs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    popular: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'drugs',
    timestamps: false
});

module.exports = Drug;