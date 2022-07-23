import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = { children: ReactNode };

const Main = ({ children }: Props) => {
  return (
    <Box component="main" p={3}>
      {children}
    </Box>
  );
};

export default Main;
