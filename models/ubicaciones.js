const { Model } = require('sequelize');

class Ubicaciones extends Model { }

module.exports = (sequelize, DataTypes) => {
    Ubicaciones.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        codigo: { type: DataTypes.STRING(50), allowNull: false, unique: true },
        zona: { type: DataTypes.STRING(50), defaultValue: 'General' },
        estatus: { type: DataTypes.INTEGER, defaultValue: 1 }
    }, {
        sequelize,
        modelName: 'Ubicaciones',
        underscored: true,
        tableName: 'ubicaciones',
        timestamps: false
    });

    Ubicaciones.associate = function (models) {
        Ubicaciones.hasMany(models.productos, {
            foreignKey: "id_ubicacion",
            as: "productos"
        });
    };

    return Ubicaciones;
};
