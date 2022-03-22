const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User  extends Model {
    // function to check for a valid password on login
    checkPassword(input_pw) {
        return bcrypt.compare(input_pw, this.password);
    };
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        hooks : {
            // hash password before creation or update
            async beforeCreate(data) {
                data.password = await bcrypt.hash(data.password, 10);
                return data;
            },
            async beforeUpdate(data) {
                data.password = await bcrypt.hash(data.password, 10);
                return data;
            }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;