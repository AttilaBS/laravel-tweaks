import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import DashboardCard from "@/layouts/dashboard-card";

interface Stats {
    users: number;
    orders: number;
    revenue: number;
}

interface DashboardProps {
    stats?: Stats;
}

const breadcrumbs = [{ title: "Dashboard", href: "/" }];

export default function Dashboard({ stats }: DashboardProps) {
    const loading = !stats;

    const cards = [
        { title: "Users", value: stats?.users },
        { title: "Orders", value: stats?.orders },
        { title: "Revenue", value: stats?.revenue },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Same grid as original starter */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <DashboardCard key={index} loading={loading}>
                            {!loading && (
                                <>
                                    <h2 className="text-lg font-semibold">{card.title}</h2>
                                    <p className="mt-3 text-4xl font-bold">{card.value}</p>
                                </>
                            )}
                        </DashboardCard>
                    ))}
                </div>

                {/* Full-width section */}
                <DashboardCard loading={loading}>
                    {!loading && (
                        <div>
                            <h2 className="text-xl font-semibold mb-3">Recent Activity</h2>
                            {/* charts, tables, etc */}
                        </div>
                    )}
                </DashboardCard>
            </div>
        </AppLayout>
    );
}
