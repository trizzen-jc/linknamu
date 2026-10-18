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
      className="block w-full rounded-xl bg-sky-300 px-6 py-4 text-center font-medium text-sky-950 transition-colors hover:bg-sky-400"
    >
      {label}
    </a>
  );
}
