/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "react-router-dom";

export default function Logo({ src, ...rest }) {
  return (
    <Link
      to="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
      }}
      {...rest}
    >
      <Image
        src={src}
        alt="one egate website logo"
        sx={{ width: "12rem", height: "4rem" }}
      />
    </Link>
  );
}
