const { Model } = require('sequelize');

class Despachos extends Model { }

module.exports = (sequelize, DataTypes) => {
    Despachos.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        id_usuario: { type: DataTypes.INTEGER, allowNull: false },
        destino_departamento: { type: DataTypes.STRING(100), allowNull: false },
        motivo_salida: { type: DataTypes.STRING(50), allowNull: false },
        fecha_despacho: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        observaciones: { type: DataTypes.TEXT, allowNull: true }
    }, {
        sequelize,
        modelName: 'Despachos',
        underscored: true,
        tableName: 'despachos',
        timestamps: false
    });

    Despachos.associate = function (models) {
        Despachos.hasMany(models.users, { foreignKey: "id_usuario", as: "usuario" });
        Despachos.hasMany(models.detalles_despachos, { foreignKey: "id_despacho", as: "detalles" });
    };

    return Despachos;
};
