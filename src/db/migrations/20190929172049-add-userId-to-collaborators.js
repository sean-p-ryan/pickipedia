'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        try {
            await queryInterface.addColumn('Collaborators', 'userId', {
                type: Sequelize.INTEGER
            });
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    },

    down: async(queryInterface, Sequelize) => {
        try {
            await queryInterface.removeColumn('Collaborators', 'userId');
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    }
};