import { Card } from "./ui/card";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 min-w-full min-h-60">
      <Card className="@container/card" />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
