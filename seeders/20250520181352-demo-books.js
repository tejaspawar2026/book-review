export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Books', [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Mystery',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Romance',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: '1984',
      author: 'George Orwell',
      genre: 'Fantasy',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Books', null, {});
}
