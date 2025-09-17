import { Skeleton } from "@/components/ui/skeleton";

export function DevActivitySkeleton() {
  return (
    <div className="max-w-4xl space-y-1.5 p-3 rounded-r-2xl rounded-b-2xl bg-foreground/25">
      {/* CONTENT */}
      <Skeleton className="h-[133px] rounded-tr-[10px]" />

      {/* FOOTER */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-48 rounded-b-[10px]" />

        <Skeleton className="h-4 w-40 rounded-b-[10px]" />
      </div>
    </div>
  );
}
