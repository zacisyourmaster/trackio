// import { KanbanBoard } from "@/components/KanbanBoard";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
export default function Dashboard(){
    return (
    <div className="flex flex-col items-center gap-3 mx-auto py-4">
        <h1 className="text-4xl font-bold">Welcome, Zach</h1>
        <Stats />
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
    </div>)
}