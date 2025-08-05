import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.users.upsert({
    where: { email: 'abd@webuildit.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'abd@webuildit.com',
      password: hashedPassword,
    },
  });

  console.log('Seeded admin:', admin);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
