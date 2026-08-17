function initials(name) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('');
}

export default function TeamCard({ name, role, bio, photo }) {
  return (
    <div className="card text-center">
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="mx-auto h-20 w-20 rounded-full object-cover"
        />
      ) : (
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-navy text-lg font-bold text-white">
          {initials(name)}
        </div>
      )}
      <h3 className="mt-4 text-lg font-semibold text-brand-ink">{name}</h3>
      <p className="text-sm font-medium text-brand-blue">{role}</p>
      <p className="mt-3 text-sm text-brand-ink/70">{bio}</p>
    </div>
  );
}
