import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { NavItem } from "Types/Menus";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEvent, useState } from "react";

type Props = {
  navItems: NavItem[];
};

const NavMobile = ({ navItems }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box display="flex" flexGrow={1}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {navItems.map((navItem) => {
          const { id, label, path } = navItem;
          return (
            <MenuItem key={id} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{label}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default NavMobile;
