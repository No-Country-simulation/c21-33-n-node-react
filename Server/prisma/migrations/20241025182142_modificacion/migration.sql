/*
  Warnings:

  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(254)` to `VarChar(50)`.
  - You are about to alter the column `apellido` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to alter the column `direccion` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(250)` to `VarChar(100)`.
  - You are about to alter the column `nombre` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(20)`.
  - Added the required column `numeroLegajo` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pasaporte` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "numeroLegajo" INTEGER NOT NULL,
ADD COLUMN     "pasaporte" INTEGER NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "apellido" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "direccion" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(20);
