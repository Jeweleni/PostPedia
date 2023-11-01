-- CreateEnum
CREATE TYPE "Education_level" AS ENUM ('HIGH_SCHOOL', 'UNDERGRADUATE', 'COLLEGE', 'MASTERS', 'PHD', 'OTHER');

-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('ORDER_FILE', 'SUBMISSION_FILE');

-- CreateEnum
CREATE TYPE "Order_status" AS ENUM ('NEW', 'AVAILABLE', 'UNCONFIRMED', 'INPROGRESS', 'COMPLETED', 'CANCELLED', 'REVISION', 'DISPUTE', 'REFUNDED', 'EDITING');

-- CreateEnum
CREATE TYPE "Order_type" AS ENUM ('ESSAY', 'RESEARCH_PAPER', 'TERM_PAPER', 'COURSEWORK', 'CASE_STUDY', 'BOOK_REVIEW', 'ARTICLE_REVIEW', 'ANNOTATED_BIBLIOGRAPHY', 'BOOK_REPORT', 'MOVIE_REVIEW', 'MOVIE_CRITIQUE', 'ARTICLE', 'ARTICLE_CRITIQUE', 'REACTION_PAPER', 'LETTER', 'REFLECTION_PAPER', 'LAB_REPORT', 'LAB_WORK', 'SPEECH', 'PRESENTATION', 'POWERPOINT_PRESENTATION', 'MATH_PROBLEM', 'STATISTICS_PROJECT', 'RESEARCH_SUMMARY', 'THESIS', 'DISSERTATION', 'THESIS_PROPOSAL', 'DISSERTATION_PROPOSAL', 'RESEARCH_PROPOSAL', 'ADMISSION_ESSAY', 'SCHOLARSHIP_ESSAY', 'PERSONAL_STATEMENT', 'EDITING', 'PROOFREADING', 'REWRITING', 'RESUME', 'CV', 'COVER_LETTER', 'OTHER');

-- CreateEnum
CREATE TYPE "Subject" AS ENUM ('MATH', 'SCIENCE', 'ENGLISH', 'BIOLOGY', 'HISTORY', 'GEOGRAPHY', 'CHEMISTRY', 'PHYSICS', 'LITERATURE', 'ECONOMICS', 'ENGINEERING', 'COMPUTER_SCIENCE', 'BUSINESS', 'LAW', 'PHILOSOPHY', 'PSYCHOLOGY', 'POLITICAL_SCIENCE', 'SOCIOLOGY', 'STATISTICS', 'ACCOUNTING', 'PROGRAMMING', 'OTHER', 'SOCIAL_STUDIES', 'SOCIAL_SCIENCE');

-- CreateEnum
CREATE TYPE "User_type" AS ENUM ('WRITER', 'CLIENT', 'SUPER_ADMIN', 'ADMIN', 'MANAGER');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "FileType" NOT NULL,
    "orderId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "orderType" "Order_type" NOT NULL,
    "writerId" TEXT,
    "name" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "subject" "Subject" NOT NULL,
    "pages" INTEGER NOT NULL,
    "words" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientDeadline" TIMESTAMP(3) NOT NULL,
    "writerDeadline" TIMESTAMP(3),
    "price" DOUBLE PRECISION NOT NULL,
    "educationLevel" "Education_level" NOT NULL,
    "status" "Order_status" NOT NULL DEFAULT 'NEW',
    "writerRating" INTEGER,
    "userId" TEXT,
    "assignedById" TEXT,
    "clientId" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "userType" "User_type" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "submission" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "submission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE INDEX "orderId" ON "File"("orderId");

-- CreateIndex
CREATE INDEX "writerId" ON "Order"("writerId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "submission_orderId_key" ON "submission"("orderId");

-- CreateIndex
CREATE INDEX "userId" ON "submission"("userId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_assignedById_fkey" FOREIGN KEY ("assignedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_writerId_fkey" FOREIGN KEY ("writerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission" ADD CONSTRAINT "submission_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission" ADD CONSTRAINT "submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
