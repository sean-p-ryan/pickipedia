module.exports = {
    up: async(queryInterface, Sequelize) => {
        try {
            await queryInterface.addColumn('Collaborators', 'first_name', {
                type: Sequelize.STRING
            });
            await queryInterface.addColumn('Collaborators', 'username', {
                type: Sequelize.STRING
            });
            await queryInterface.addColumn('Collaborators', 'last_name', {
                type: Sequelize.STRING
            });
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    },

    down: async(queryInterface, Sequelize) => {
        try {
            await queryInterface.removeColumn('Collaborators', 'first_name');
            await queryInterface.removeColumn('Collaborators', 'username');
            await queryInterface.removeColumn('Collaborators', 'last_name');
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    }
};