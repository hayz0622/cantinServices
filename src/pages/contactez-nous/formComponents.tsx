import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export function RadioBlock({
  label,
  required,
  value,
  onChange,
  options,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-bold leading-snug">
        {label}
        {required ? <span className="text-destructive ml-0.5">*</span> : null}
      </Label>
      <RadioGroup value={value} onValueChange={onChange} className="gap-2.5">
        {options.map((o) => (
          <label
            key={o.value}
            className={cn(
              "flex items-start gap-3 rounded-xl border border-border/60 px-3 py-2.5 cursor-pointer transition-colors",
              value === o.value ? "border-primary/50 bg-primary/5" : "hover:bg-muted/40",
            )}
          >
            <RadioGroupItem value={o.value} className="mt-0.5" />
            <span className="text-sm font-medium leading-snug">{o.label}</span>
          </label>
        ))}
      </RadioGroup>
    </div>
  );
}

export function CanopyHintIllustration() {
  return (
    <div
      className="shrink-0 flex items-center justify-center rounded-xl border border-dashed border-primary/25 bg-primary/5 p-2"
      aria-hidden
    >
      <svg viewBox="0 0 72 88" className="w-14 h-[4.5rem] text-primary/55">
        <ellipse cx="36" cy="78" rx="28" ry="5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
        <ellipse cx="36" cy="72" rx="22" ry="4" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.85" />
        <path
          d="M36 70 C28 58 22 48 24 36 C26 22 34 14 36 12 C38 14 46 22 48 36 C50 48 44 58 36 70 Z"
          fill="currentColor"
          opacity="0.35"
        />
        <path d="M36 70 L36 84" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
