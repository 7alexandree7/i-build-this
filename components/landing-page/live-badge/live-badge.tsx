import { Badge } from "@/components/ui/badge"

const LiveBadge = () => {
  return (
    <Badge variant={"outline"} className="px-4 py-2 mb-8 text-sm backdrop">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      <span className="text-muted-foreground">Join thousands of creators sharing their work</span>
    </Badge>
  )
}

export default LiveBadge
