type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/60 bg-white/40 px-6 py-4 text-center font-medium text-foreground shadow-sm shadow-orange-900/5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-md"
    >
      {label}
    </a>
  );
}
