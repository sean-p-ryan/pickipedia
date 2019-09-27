'use strict';
module.exports = (sequelize, DataTypes) => {
    var Collaborator = sequelize.define('Collaborator', {
        name: DataTypes.STRING,
        wikiId: {
            type: DataTypes.INTEGER,
            onDelete: "CASCADE",
            references: {
                model: "Wikis",
                key: "id",
                as: "wikiId",
            }
        }
    }, {});
    Collaborator.associate = function(models) {
        Collaborator.belongsTo(models.Wiki, {
            foreignKey: "wikiId",
            onDelete: "CASCADE",
        });
    };
    return Collaborator;
};