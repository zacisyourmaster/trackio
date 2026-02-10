import { prisma } from "@/lib/prisma";
import { syncUser } from "@/lib/user";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
//Get all Applications
export async function GET(request: Request) {}
export async function POST(request: Request, response: NextResponse) {
  try {
    // const session = await getServerSession(authOptions);

    // if (!session?.user?.id) {
    //   return NextResponse.json(
    //     { error: 'Unauthorized' },
    //     { status: 401 }
    //   );
    // }
    const user = await syncUser();

    const body = await request.json();

    const { company, position, status, notes, appliedAt } = body;
    
    const application = await prisma.application.create({
      data: {
        userId: user!.id,
        company: company,
        position: position,
        status: status || "APPLIED",
        notes: notes,
        appliedAt: appliedAt ? new Date(appliedAt) : new Date(),
        // userId: user?.id,
        // company: company,
        // position: position,
        // status: status,
        // notes: notes,
        // appliedAt: appliedAt
      },
    });
    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// model Application {
//   id         String            @id @default(cuid())
//   userId     String
//   company    String
//   position   String
//   status     ApplicationStatus @default(APPLIED)
//   notes      String
//   appliedAt  DateTime
//   followUpAt DateTime?
//   createdAt  DateTime          @default(now())

//   user User @relation(fields: [userId], references: [id])
// }
