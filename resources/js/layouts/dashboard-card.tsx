import { ReactNode } from "react";
import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";

interface DashboardCardProps {
    loading?: boolean;
    children?: ReactNode;
}

export default function DashboardCard({
                                          loading = false,
                                          children,
                                      }: DashboardCardProps) {
    return (
        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-6">
            {loading ? (
                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
            ) : (
                children
            )}
        </div>
    );
}
