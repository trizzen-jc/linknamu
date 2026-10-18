import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Naver Mail", href: "https://mail.naver.com" },
  { label: "X.com", href: "https://x.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-10 px-6 py-16">
      <ProfileHeader name="TYCOON" bio="최강 Investor" />
      <div className="flex w-full flex-col gap-6">
        {links.map((link) => (
          <LinkCard key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </main>
  );
}
