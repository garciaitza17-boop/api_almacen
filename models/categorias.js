const { Model } = require('sequelize');

class Categorias extends Model { }

module.exports = (sequelize, DataTypes) => {
    Categorias.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        nombre: { type: DataTypes.STRING(50), allowNull: false },
        descripcion: { type: DataTypes.TEXT, allowNull: true },
        estatus: { type: DataTypes.INTEGER, defaultValue: 1 }
    }, {
        sequelize,
        modelName: 'Categorias',
        underscored: true,
        tableName: 'categorias',
        timestamps: false
    });

    Categorias.associate = function (models) {
        Categorias.hasMany(models.productos, {
            foreignKey: "id_categoria",
            as: "productos"
        });
    };

    return Categorias;
};
