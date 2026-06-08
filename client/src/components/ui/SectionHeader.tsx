interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  editorial?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  editorial = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`${editorial ? "editorial" : ""} ${className}`.trim()}>
      {label && <p className="section__label">{label}</p>}
      <h2 className={editorial ? "editorial__headline" : "section__title"}>
        {title}
      </h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </header>
  );
}
