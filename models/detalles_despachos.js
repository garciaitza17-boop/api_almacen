const { Model } = require('sequelize');

class DetallesDespachos extends Model { }

module.exports = (sequelize, DataTypes) => {
    DetallesDespachos.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        id_despacho: { type: DataTypes.INTEGER, allowNull: false },
        id_producto: { type: DataTypes.INTEGER, allowNull: false },
        cantidad: { type: DataTypes.INTEGER, allowNull: false }
    }, {
        sequelize,
        modelName: 'DetallesDespachos',
        underscored: true,
        tableName: 'detalles_despachos',
        timestamps: false
    });

    DetallesDespachos.associate = function (models) {
        DetallesDespachos.hasMany(models.despachos, { foreignKey: "id_despacho", as: "despacho" });
        DetallesDespachos.hasMany(models.productos, { foreignKey: "id_producto", as: "producto" });
    };

    return DetallesDespachos;
};
