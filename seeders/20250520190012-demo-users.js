import bcrypt from 'bcrypt';

export async function up(queryInterface, Sequelize) {
  const hashedPassword1 = await bcrypt.hash('password123', 10);
  const hashedPassword2 = await bcrypt.hash('admin123', 10);

  await queryInterface.bulkInsert('Users', [
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: hashedPassword1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPassword2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {});
}
