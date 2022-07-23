import { Box, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { BoxProps } from "@mui/material";

type Props = BoxProps & { link?: string };

const Logo = ({ link = undefined, ...props }: Props) => {
  return (
    <Box {...props}>
      <AdbIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href={link}
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </Box>
  );
};

export default Logo;
