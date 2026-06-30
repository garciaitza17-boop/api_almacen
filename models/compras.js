const { Model } = require('sequelize');

class Compras extends Model { }

module.exports = (sequelize, DataTypes) => {
    Compras.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        id_proveedor: { type: DataTypes.INTEGER, allowNull: false },
        id_usuario: { type: DataTypes.INTEGER, allowNull: false },
        fecha_compra: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        observaciones: { type: DataTypes.TEXT, allowNull: true }
    }, {
        sequelize,
        modelName: 'Compras',
        underscored: true,
        tableName: 'compras',
        timestamps: false
    });

    Compras.associate = function (models) {
        Compras.belongsTo(models.proveedores, { foreignKey: "id_proveedor", as: "proveedor" });
        Compras.belongsTo(models.users, { foreignKey: "id_usuario", as: "usuario" });
        Compras.hasMany(models.detalles_compras, { foreignKey: "id_compra", as: "detalles" });
    };

    return Compras;
};
