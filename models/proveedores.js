const { Model } = require('sequelize');

class Proveedores extends Model { }

module.exports = (sequelize, DataTypes) => {
    Proveedores.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        nombre: { type: DataTypes.STRING(100), allowNull: false },
        telefono: { type: DataTypes.STRING(20), allowNull: true },
        correo: { type: DataTypes.STRING(100), allowNull: true },
        direccion: { type: DataTypes.TEXT, allowNull: true },
        estatus: { type: DataTypes.INTEGER, defaultValue: 1 }
    }, {
        sequelize,
        modelName: 'Proveedores',
        underscored: true,
        tableName: 'proveedores',
        timestamps: false
    });

    Proveedores.associate = function (models) {
        Proveedores.hasMany(models.compras, {
            foreignKey: "id_proveedor",
            as: "compras"
        });
    };

    return Proveedores;
};
