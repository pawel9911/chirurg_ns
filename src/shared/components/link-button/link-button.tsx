import { Link } from "react-router";
import { Button } from "@/components/ui/button";

interface LinkButtonProps extends React.ComponentProps<typeof Button> {
  href: string;
  external?: boolean;
}

const isExternalLink = (href: string) =>
  /^(https?:\/\/|mailto:|tel:)/.test(href);

export const LinkButton = ({
  href,
  external,
  children,
  ...props
}: LinkButtonProps) => {
  const isExternal = external ?? isExternalLink(href);

  return (
    <Button asChild {...props}>
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link to={href}>{children}</Link>
      )}
    </Button>
  );
};
