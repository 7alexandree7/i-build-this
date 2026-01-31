import { cn } from "@/lib/utils";

interface StatsCardProps {
    approvedProducts: number;
    pendingProducts: number;
    rejectedProducts: number;
    allProducts: number;
}

const StatsCard = ({
    approvedProducts,
    pendingProducts,
    rejectedProducts,
    allProducts
}: StatsCardProps) => {

    const stats = [
        { label: "Total", count: allProducts, color: "bg-primary/10" },
        { label: "Pending", count: pendingProducts, color: "bg-yellow-500/10" },
        { label: "Approved", count: approvedProducts, color: "bg-green-500/10" },
        { label: "Rejected", count: rejectedProducts, color: "bg-red-500/10" },
    ]

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
              <div key={stat.label} className={cn("status-badge-card", stat.color)}>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.count}</p>
              </div>
          ))}
      </div>
  )
}

export default StatsCard
