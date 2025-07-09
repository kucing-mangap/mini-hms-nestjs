/*
  Warnings:

  - Made the column `phone` on table `doctors` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "doctors" ALTER COLUMN "phone" SET NOT NULL;
