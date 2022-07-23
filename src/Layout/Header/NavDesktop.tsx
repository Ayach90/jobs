import { Box, Button } from "@mui/material";
import { NavItem } from "Types/Menus";

type Props = { navItems: NavItem[] };

const NavDesktop = ({ navItems }: Props) => {
  return (
    <Box display="flex" flexGrow={1}>
      {navItems.map((navItem) => {
        const { id, label, path } = navItem;
        return (
          <Button key={id} sx={{ my: 2, color: "white", display: "block" }}>
            {label}
          </Button>
        );
      })}
    </Box>
  );
};

export default NavDesktop;
