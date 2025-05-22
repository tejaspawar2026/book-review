export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Books', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
  await queryInterface.sequelize.query(`ALTER TABLE Books ADD FULLTEXT INDEX book_fulltext_index (title, author, genre);`);
}


export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Books');
}