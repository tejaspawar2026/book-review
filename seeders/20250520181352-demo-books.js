export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Books', [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: '1984',
      author: 'George Orwell',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Books', null, {});
}
