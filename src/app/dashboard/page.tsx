// import { KanbanBoard } from "@/components/KanbanBoard";
import Stats from "@/components/Stats";
import CreateJobDialog from "@/components/CreateJobDialog";
import EmptyState from "@/components/EmptyState";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
// import { getCachedUser } from '@/lib/auth';

export default async function Dashboard() {
  const user = await currentUser();

  const applications = await prisma.application.findMany({
    where: { userId: user?.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl py-4 space-y-4">
      <div className="mb-6">
      <h1 className="text-3xl font-bold">{`Welcome Back, ${user?.firstName}`}</h1>
      <p className="text-muted-foreground">Track your job applications</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Stats />
        <CreateJobDialog />
        <div className="border-t w-full p-3 rounded">
          {applications.length > 0 ? (
            applications.map((app) => (
              <div key={app.id}>
                {app.company} — {app.position}
              </div>
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}
