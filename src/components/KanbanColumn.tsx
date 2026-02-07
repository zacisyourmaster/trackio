import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Application = {
  id: number;
  company: string;
  title: string;
  status: string;
};

type Props = {
  title: string;
  status: string;
  applications: Application[];
};

export function KanbanColumn({ title, status, applications }: Props) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex justify-between">
          {title}
          <Badge variant="secondary">{applications.length}</Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {applications.length === 0 && (
          <p className="text-sm text-muted-foreground">No applications</p>
        )}

        {applications.slice(0, 5).map((app) => (
          <div
            key={app.id}
            className="rounded-md border p-3 hover:bg-muted cursor-pointer"
          >
            <p className="font-medium">{app.company}</p>
            <p className="text-sm text-muted-foreground">{app.title}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
