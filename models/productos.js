const { Model } = require('sequelize');

class Productos extends Model { }

module.exports = (sequelize, DataTypes) => {
    Productos.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        nombre: { type: DataTypes.STRING(100), allowNull: false },
        descripcion: { type: DataTypes.STRING(150), allowNull: false },
        id_marca: { type: DataTypes.INTEGER, allowNull: false },
        id_categoria: { type: DataTypes.INTEGER, allowNull: false },
        id_ubicacion: { type: DataTypes.INTEGER, allowNull: true },
        precio_compra: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0.00 },
        stock_actual: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        stock_minimo: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        estatus: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
    }, {
        sequelize,
        modelName: 'Productos',
        underscored: true,
        tableName: 'productos',
        timestamps: false
    });

    Productos.associate = function (models) {
        Productos.belongsTo(models.marcas, { foreignKey: "id_marca", as: "marca" });
        Productos.belongsTo(models.categorias, { foreignKey: "id_categoria", as: "categoria" });
        Productos.belongsTo(models.ubicaciones, { foreignKey: "id_ubicacion", as: "ubicacion" });
        Productos.hasMany(models.detalles_compras, { foreignKey: "id_producto", as: "detalles_compras" });
        Productos.hasMany(models.detalles_despachos, { foreignKey: "id_producto", as: "detalles_despachos" });
    };

    return Productos;
};
