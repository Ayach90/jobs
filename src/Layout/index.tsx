import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
