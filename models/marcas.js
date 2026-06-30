const { Model } = require('sequelize');

class Marcas extends Model { }

module.exports = (sequelize, DataTypes) => {
    Marcas.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        nombre: { type: DataTypes.STRING(50), allowNull: false },
        estatus: { type: DataTypes.INTEGER, defaultValue: 1 }
    }, {
        sequelize,
        modelName: 'Marcas',
        underscored: true,
        tableName: 'marcas',
        timestamps: false
    });

    Marcas.associate = function (models) {
        Marcas.hasMany(models.productos, {
            foreignKey: "id_marca",
            as: "productos"
        });
    };

    return Marcas;
};
