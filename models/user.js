module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        User_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        Photo: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        Title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        Location: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        Website: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        Linkedin: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        Github: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        Qrcode: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        }
        

    });

    return User;

}