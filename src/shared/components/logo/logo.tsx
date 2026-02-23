import { Link } from "react-router";

interface LogoProps {
  size?: "regular";
  color?: "light";
  className?: string;
}

export const Logo = ({ size, color, className }: LogoProps) => {
  const getSize = () => {
    switch (size) {
      case "regular": {
        return {
          width: 256,
          height: 50,
        };
      }
      default: {
        return {
          width: 200,
          height: 40,
        };
      }
    }
  };

  const getVariant = () => {
    switch (color) {
      case "light": {
        return `${import.meta.env.VITE_ASSET_PREFIX}/logo_light.png`;
      }
      default: {
        return `${import.meta.env.VITE_ASSET_PREFIX}/logo.png`;
      }
    }
  };

  const { width, height } = getSize();
  const src = getVariant();

  return (
    <Link to="/">
      <img
        src={src}
        alt="logo"
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
};
