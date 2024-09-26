// components/Navbar.js
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar>
        <Typography variant="h6" className="flex-1">
          RTK- Basic Structure
        </Typography>
        <div className="flex space-x-4">
          <Link href="/" passHref>
            <Button color="inherit">Users</Button>
          </Link>
          <Link href="/counter" passHref>
            <Button color="inherit">Counter</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
