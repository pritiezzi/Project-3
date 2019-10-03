module.exports = function(sequelize, DataTypes) {
    var cardProfile = sequelize.define("cardProfile", {
      User_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      Photo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      Title: {
        type: DataTypes.STRING,
        alllowerNull: false,
        
      },
      Location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Website: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Linkedin: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Github: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },

    Qrcode: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [1]
      }
    }
    });
    
    return cardProfile;
  };
  