/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(254)`.
  - Added the required column `apellido` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `celular` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `celularOpcional` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigoPostal` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departamento` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dni` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaInicio` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaNacimiento` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localidad` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pais` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `piso` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "name",
ADD COLUMN     "apellido" VARCHAR(100) NOT NULL,
ADD COLUMN     "celular" VARCHAR(15) NOT NULL,
ADD COLUMN     "celularOpcional" VARCHAR(15) NOT NULL,
ADD COLUMN     "codigoPostal" INTEGER NOT NULL,
ADD COLUMN     "departamento" INTEGER NOT NULL,
ADD COLUMN     "direccion" VARCHAR(250) NOT NULL,
ADD COLUMN     "dni" INTEGER NOT NULL,
ADD COLUMN     "fechaInicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fechaNacimiento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "localidad" VARCHAR(35) NOT NULL,
ADD COLUMN     "nombre" VARCHAR(100) NOT NULL,
ADD COLUMN     "pais" VARCHAR(35) NOT NULL,
ADD COLUMN     "password" VARCHAR(100) NOT NULL,
ADD COLUMN     "piso" INTEGER NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(254);
