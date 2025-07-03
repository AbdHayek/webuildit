/*
  Warnings:

  - You are about to drop the column `order` on the `testimonials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `testimonials` DROP COLUMN `order`,
    ADD COLUMN `order_number` INTEGER NOT NULL DEFAULT 1;
