const { Model } = require('sequelize');

class DetallesCompras extends Model { }

module.exports = (sequelize, DataTypes) => {
    DetallesCompras.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        id_compra: { type: DataTypes.INTEGER, allowNull: false },
        id_producto: { type: DataTypes.INTEGER, allowNull: false },
        cantidad: { type: DataTypes.INTEGER, allowNull: false },
        precio_compra: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
    }, {
        sequelize,
        modelName: 'DetallesCompras',
        underscored: true,
        tableName: 'detalles_compras',
        timestamps: false
    });

    DetallesCompras.associate = function (models) {
        DetallesCompras.belongsTo(models.compras, { foreignKey: "id_compra", as: "compra" });
        DetallesCompras.belongsTo(models.productos, { foreignKey: "id_producto", as: "producto" });
    };

    return DetallesCompras;
};
