/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Blogs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Blogs` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Testimonials` ADD COLUMN `url` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Blogs_slug_key` ON `Blogs`(`slug`);
