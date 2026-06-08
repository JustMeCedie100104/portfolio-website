import { SITE } from "@/data/portfolio";

interface PortraitFrameProps {
  mode?: "system" | "editorial";
  size?: "default" | "large" | "compact";
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function PortraitFrame({
  mode = "system",
  size = "default",
  className = "",
}: PortraitFrameProps) {
  // Check if portrait image is available
  const hasImage = SITE.portraitImageUrl;

  return (
    <div
      className={[
        "portrait",
        `portrait--${mode}`,
        `portrait--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="portrait__inner">
        {hasImage ? (
          <img
            src={SITE.portraitImageUrl ?? undefined}
            alt={`${SITE.name} portrait`}
            className="portrait__image"
          />
        ) : (
          <span className="portrait__initials" aria-hidden="true">
            {getInitials(SITE.name)}
          </span>
        )}
      </div>
    </div>
  );
}
