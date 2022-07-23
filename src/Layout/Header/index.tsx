import { AppBar, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import Logo from "Components/Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import UserMenu from "./UserMenu";

const navItems = [
  { id: 1, label: "Products", path: "/products" },
  { id: 2, label: "Pricing", path: "/pricing" },
  { id: 3, label: "Blog", path: "/blog" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" component="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isMobile ? (
            <>
              <NavMobile navItems={navItems} />
              <Logo link="/" flexGrow={1} />
            </>
          ) : (
            <>
              <Logo link="/" />
              <NavDesktop navItems={navItems} />
            </>
          )}
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
