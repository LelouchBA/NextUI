/*
  Warnings:

  - The `clickMultiplier` column on the `clicker` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "clicker" DROP COLUMN "clickMultiplier",
ADD COLUMN     "clickMultiplier" INTEGER;
