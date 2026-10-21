import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";

const links = [
  { id: "github", label: "🚩 GitHub", href: "https://github.com/trizzen-jc" },
  {
    id: "naver-mail",
    label: "✏️ Naver Mail",
    href: "mailto:etycoon@naver.com",
  },
  { id: "x", label: "🚢 X.com", href: "https://x.com/john_tycoon" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-12 px-6 py-20 sm:gap-14 sm:py-24">
      <ProfileHeader
        name="타이쿤"
        bio="전략기획 : 지금은 AI 공부중"
        imageUrl="/profile.jpg"
      />
      <LinkList links={links} />
    </main>
  );
}
