/*
  Warnings:

  - The `balance` column on the `clicker` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "clicker" DROP COLUMN "balance",
ADD COLUMN     "balance" INTEGER;
