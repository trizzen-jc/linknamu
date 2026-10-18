import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "🚩 GitHub", href: "https://github.com/trizzen-jc" },
  { label: "✏️ Naver Mail", href: "mailto:etycoon@naver.com" },
  { label: "🚢 X.com", href: "https://x.com/john_tycoon" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-12 px-6 py-20 sm:gap-14 sm:py-24">
      <ProfileHeader
        name="타이쿤"
        bio="전략기획 : 지금은 AI 공부중"
        imageUrl="/profile.jpg"
      />
      <div className="flex w-full flex-col gap-5">
        {links.map((link) => (
          <LinkCard key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </main>
  );
}
