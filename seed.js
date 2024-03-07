const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const seedData = [
    {
      id: 1,
      balance: 50,
      clickMultiplier: 10,
    },
    {
      id: 2,
      balance: 50,
      clickMultiplier: 20,
    },
    {
      id: 3,
      balance: 100,
      clickMultiplier: 30,
    },
  ];

  // Tambahkan setiap data ke dalam tabel Clicker
  for (const data of seedData) {
    await prisma.clicker.create({ data }); 
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
