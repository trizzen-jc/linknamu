type LinkCardProps = {
  label: string;
  href: string;
  count?: number;
  onClick?: () => void;
};

export default function LinkCard({
  label,
  href,
  count = 0,
  onClick,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-2xl border border-white/60 bg-white/40 px-6 py-4 font-medium text-foreground shadow-sm shadow-orange-900/5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-md"
    >
      <span>{label}</span>
      <span className="text-xs font-normal text-foreground/50">
        {count}회
      </span>
    </a>
  );
}
