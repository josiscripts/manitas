import { Apple, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function StoreBadges({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-3 rounded-xl border px-4 py-2.5 text-left transition-colors duration-200";
  const styles =
    variant === "light"
      ? "border-border bg-card text-foreground hover:bg-secondary"
      : "border-brand-foreground/25 bg-brand-foreground/10 text-brand-foreground hover:bg-brand-foreground/20";

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <span className={cn(base, styles, "cursor-default")} aria-label="Próximamente en Google Play">
        <Play className="size-5 shrink-0" aria-hidden="true" />
        <span className="leading-tight">
          <span className="block text-[11px] uppercase tracking-wide opacity-70">Próximamente en</span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </span>
      <span className={cn(base, styles, "cursor-default")} aria-label="Próximamente en App Store">
        <Apple className="size-5 shrink-0" aria-hidden="true" />
        <span className="leading-tight">
          <span className="block text-[11px] uppercase tracking-wide opacity-70">Próximamente en</span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </span>
    </div>
  );
}
