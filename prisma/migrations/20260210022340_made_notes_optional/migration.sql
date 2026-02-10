-- AlterTable
ALTER TABLE "Application" ALTER COLUMN "appliedAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "notes" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "User_clerkId_idx" ON "User"("clerkId");
