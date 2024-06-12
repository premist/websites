export function Header({
  title,
  subtitle,
  tagline,
}: {
  title: string;
  subtitle: string;
  tagline: string;
}): JSX.Element {
  return (
    <div className="container px-12 sm:px-20 py-6 sm:py-10 flex flex-row">
      <h1>{title}</h1>
      <span className="ml-24">{subtitle}</span>
      <p className="ml-48">{tagline}</p>
    </div>
  );
}
