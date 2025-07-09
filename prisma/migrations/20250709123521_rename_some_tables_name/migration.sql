/*
  Warnings:

  - You are about to drop the column `password_hash` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `password_hash` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `password_hash` on the `patients` table. All the data in the column will be lost.
  - Added the required column `password` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `doctors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `patients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admin" DROP COLUMN "password_hash",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "password_hash",
ADD COLUMN     "password" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "patients" DROP COLUMN "password_hash",
ADD COLUMN     "password" VARCHAR(255) NOT NULL;
