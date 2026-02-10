// import { KanbanBoard } from "@/components/KanbanBoard";
import Stats from "@/components/Stats";
import EmptyState from "@/components/EmptyState";
import { prisma } from "@/lib/prisma";
import { syncUser } from "@/lib/user";

export default async function Dashboard() {
  const user = await syncUser();
  const applications = await prisma.application.findMany({
    where: { userId: user?.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl py-4 space-y-4">
      <h1 className="text-4xl font-bold">{`Welcome Back, ${user?.firstName}`}</h1>
<div className="flex flex-col items-center gap-4">

      <Stats />
      <div className="border-top border p-3 rounded">

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
