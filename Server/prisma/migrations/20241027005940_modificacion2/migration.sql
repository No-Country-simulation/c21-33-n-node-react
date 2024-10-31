/*
  Warnings:

  - Added the required column `statusId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "statusId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "userStatus" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(3) NOT NULL,
    "description" VARCHAR(20) NOT NULL,

    CONSTRAINT "userStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userStatus_code_key" ON "userStatus"("code");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "userStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
