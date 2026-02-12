import { prisma } from "@/lib/prisma";

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// Get all Applications
// export async function GET() {
//   return NextResponse.json({ message: "it worked" });
// }

//Create Application
export async function POST(req: Request) {
  const { userId } = await auth();
  console.log(userId);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();

    const {
      company,
      position,
      status,
      notes,
      appliedAt,
      followUpAt,
      salary,
      location,
      jobType,
    } = data;

    const application = await prisma.application.create({
      data: {
        userId,
        company,
        position,
        status,
        appliedAt,
        ...(notes && { notes }),
        ...(followUpAt && { followUpAt }),
        ...(salary && { salary }),
        ...(location && { location }),
        ...(jobType && { jobType }),
      },
      omit: {
        userId: true,
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (e) {
    console.error("Error: ", e);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 },
    );
  }
}