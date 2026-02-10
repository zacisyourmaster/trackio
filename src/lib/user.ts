// lib/db/syncUser.ts
import { currentUser  } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function syncUser() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return null;
  }

  // Check if user exists in database
  let user = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  });

  // If not, create them
  if (!user) {
    user = await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName?.trim() || null,
        lastName: clerkUser.lastName?.trim() || null,
        // imageUrl: clerkUser.imageUrl,
      },
    });
  }

  return user;
}

// model User {
//   id           String        @id @default(cuid())
//   clerkId      String        @unique
//   email        String        @unique
//   firstName    String?
//   lastName     String?
//   applications Application[]
//   createdAt    DateTime      @default(now())

//   @@index([clerkId])
// }
