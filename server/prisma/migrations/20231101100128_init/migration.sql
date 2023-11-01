/*
  Warnings:

  - The values [CLIENT,SUPER_ADMIN,ADMIN,MANAGER] on the enum `User_type` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `orderId` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `File` table. All the data in the column will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `submission` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "User_type_new" AS ENUM ('WRITER', 'READER');
ALTER TABLE "User" ALTER COLUMN "userType" TYPE "User_type_new" USING ("userType"::text::"User_type_new");
ALTER TYPE "User_type" RENAME TO "User_type_old";
ALTER TYPE "User_type_new" RENAME TO "User_type";
DROP TYPE "User_type_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_assignedById_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_writerId_fkey";

-- DropForeignKey
ALTER TABLE "submission" DROP CONSTRAINT "submission_orderId_fkey";

-- DropForeignKey
ALTER TABLE "submission" DROP CONSTRAINT "submission_userId_fkey";

-- DropIndex
DROP INDEX "orderId";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "orderId",
DROP COLUMN "type",
ADD COLUMN     "postId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "submission";

-- DropEnum
DROP TYPE "Education_level";

-- DropEnum
DROP TYPE "FileType";

-- DropEnum
DROP TYPE "Order_status";

-- DropEnum
DROP TYPE "Order_type";

-- DropEnum
DROP TYPE "Subject";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "words" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientDeadline" TIMESTAMP(3) NOT NULL,
    "writerDeadline" TIMESTAMP(3),
    "price" DOUBLE PRECISION NOT NULL,
    "writerRating" INTEGER,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "userId" ON "Post"("userId");

-- CreateIndex
CREATE INDEX "postId" ON "File"("postId");

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
