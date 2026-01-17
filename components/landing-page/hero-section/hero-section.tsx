import { Button } from "@/components/ui/button"
import LiveBadge from "../live-badge/live-badge"
import Link from "next/link"
import { EyeIcon, RocketIcon, UsersIcon, ArrowRightIcon, SparkleIcon } from "lucide-react";
import StatsCard from "../stats-card/stats-card"

const statsData = [
    {
        icon: RocketIcon,
        value: "2.5K+",
        label: "Projects Shared",
    },
    {
        icon: UsersIcon,
        value: "10K+",
        label: "Active Creators",
        hasBorder: true,
    },
    {
        icon: EyeIcon,
        value: "50K+",
        label: "Monthly Visitors",
    },
];


const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
            <div className="wrapper">
                <div className="flex flex-col items-center justify-center lg:py-24 py-12  text-center">
                    <LiveBadge />
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-5xl">
                        Share What You&apos;ve Built, Discover What&apos;s Launching
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                        A community platform for creators to showcase their apps, AI tools,
                        SaaS products, and creative projects. Authentic launches, real
                        builders, genuine feedback.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <Button asChild size={"lg"} className="text-base px-8 shadow-lg">
                            <Link href={"/submit"}>
                                <SparkleIcon className="size-5" />
                                Share Your Project
                            </Link>
                        </Button>
                        <Button variant={"secondary"} asChild size={"lg"} className="text-base px-8 shadow-lg">
                            <Link href={"/explore"}>
                                Explore Projects
                                <ArrowRightIcon className="size-5" />
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
                        {statsData.map((stat) => (
                            <StatsCard key={stat.label} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
