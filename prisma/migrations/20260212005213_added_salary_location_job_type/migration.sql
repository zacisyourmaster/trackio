-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('ONSITE', 'REMOTE', 'HYBRID');

-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "jobType" "JobType",
ADD COLUMN     "location" TEXT,
ADD COLUMN     "salary" TEXT;
