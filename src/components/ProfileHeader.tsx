type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-32 w-32 rounded-full bg-sky-300 sm:h-40 sm:w-40" />
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-foreground/70">{bio}</p>
    </div>
  );
}
