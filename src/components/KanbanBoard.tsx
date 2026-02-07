import { KanbanColumn } from "./KanbanColumn";

type Application = {
  id: number;
  company: string;
  title: string;
  status: string;
};

type Props = {
  applications: Application[];
};

export function KanbanBoard({ applications }: Props) {
  const byStatus = (status: string) =>
    applications.filter((app) => app.status === status);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <KanbanColumn
        title="Applied"
        status="APPLIED"
        applications={byStatus("APPLIED")}
      />
      <KanbanColumn
        title="Rejected"
        status="REJECTED"
        applications={byStatus("REJECTED")}
      />
      <KanbanColumn
        title="Interviewing"
        status="INTERVIEW"
        applications={byStatus("INTERVIEW")}
      />
      <KanbanColumn
        title="Offers"
        status="OFFER"
        applications={byStatus("OFFER")}
      />
    </div>
  );
}
