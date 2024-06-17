export function Header({
  title,
  subtitle,
  tagline,
}: {
  title: string;
  subtitle?: string;
  tagline: string;
}): JSX.Element {
  return (
    <div className="container px-10 md:px-20 py-5 md:py-10 flex flex-col md:flex-row">
      <h1 className="md:w-[20%] pr-10">{title}</h1>
      <span className="md:w-[30%] pr-10">{subtitle}</span>
      <p className="md:w-[50%]">{tagline}</p>
    </div>
  );
}
