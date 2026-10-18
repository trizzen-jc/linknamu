type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={name}
        className="h-32 w-32 rounded-full object-cover shadow-xl shadow-orange-900/15 ring-4 ring-white/70 sm:h-36 sm:w-36"
      />
      <h1 className="mt-5 text-xl font-bold tracking-tight">{name}</h1>
      <p className="mt-1.5 text-sm text-foreground/60">{bio}</p>
    </div>
  );
}
