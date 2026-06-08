import {
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
} from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "md" | "sm";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    to?: undefined;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined };

type ButtonAsRouterLink = BaseProps &
  Omit<LinkProps, "className"> & { to: string; href?: undefined };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink;

function getClasses(variant: ButtonVariant, size: ButtonSize, className: string) {
  return [
    "btn",
    `btn--${variant}`,
    size === "sm" ? "btn--sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = getClasses(variant, size, className);

  if ("to" in props && props.to) {
    const { to, ...rest } = props as ButtonAsRouterLink;
    return <Link to={to} className={classes} {...rest} />;
  }

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return <a href={href} className={classes} {...rest} />;
  }

  return <button type="button" className={classes} {...(props as ButtonAsButton)} />;
}
