const { Model } = require('sequelize');

class Users extends Model { }

module.exports = (sequelize, DataTypes) => {
    Users.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        nombre: { type: DataTypes.STRING(150), allowNull: false },
        cedula: { type: DataTypes.STRING(20), allowNull: false, unique: true },
        telefono: { type: DataTypes.STRING(20), allowNull: true },
        correo: { type: DataTypes.STRING(100), allowNull: true },
        clave: { type: DataTypes.STRING(255), allowNull: false },
        id_rol: { type: DataTypes.INTEGER, allowNull: false },
        estatus: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
        fecha_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, {
        sequelize,
        modelName: 'Users',
        underscored: true,
        tableName: 'usuarios',
        timestamps: false 
    });

    Users.associate = function (models) {
        Users.hasMany(models.rols, {
            foreignKey: "id_rol",
            as: "rol"
        });
    };
    
    return Users;
};
