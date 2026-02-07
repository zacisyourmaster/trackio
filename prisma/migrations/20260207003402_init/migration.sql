-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('APPLIED', 'INTERVIEW', 'OFFER', 'REJECTED', 'GHOSTED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "authId" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL,
    "followUpAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_authId_key" ON "User"("authId");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
