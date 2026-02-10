import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
export default function EmptyState() {
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyTitle>No Applications Yet!</EmptyTitle>
        <EmptyDescription>
          You need to add some applications to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Add Job</Button>
        <Button variant="outline">Import from CSV</Button>
      </EmptyContent>
    </Empty>
  );
}
