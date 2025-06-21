# 🚀 Next.js + Prisma Starter Project

This project is built with [Next.js](https://nextjs.org/) for the frontend and [Prisma](https://www.prisma.io/) as the ORM for interacting with the database and handling migrations.

---

## 📦 Tech Stack

- ✅ **Next.js** – React-based framework for server-side rendering and routing
- ✅ **Prisma** – Modern ORM for Node.js and TypeScript
- ✅ **PostgreSQL / SQLite / MySQL** – (customize based on your DB)
- ✅ **TypeScript**
- ✅ **Tailwind CSS** (if used)

---

## 📥 Installation & Setup

Follow these steps to install dependencies, run database migrations, and start the dev server:

```bash
# 1. Install dependencies   
npm install

# 2. Run database migration (creates tables based on schema)
npx prisma migrate dev --name init

# 3. Start development server
npm run dev

Your app will be running at:
🔗 http://localhost:3000


🔐 Admin Login
Access the admin panel at:

🌐 URL: http://localhost:3000/admin/login
📧 Email: abd@webuildit.com
🔐 Password: admin123