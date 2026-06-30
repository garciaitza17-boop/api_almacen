const { Model } = require('sequelize');

class Rols extends Model { }

module.exports = (sequelize, DataTypes) => {
    Rols.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        nombre: { type: DataTypes.STRING(50), allowNull: false },
        estatus: { type: DataTypes.INTEGER, defaultValue: 1 }
    }, {
        sequelize,
        modelName: 'Rols',
        underscored: true,
        tableName: 'roles',
        timestamps: false
    });

    Rols.associate = function (models) {
        Rols.hasMany(models.users, {
            foreignKey: "id_rol",
            as: "usuarios"
        });
    };

    return Rols;
};
