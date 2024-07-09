

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { BiSolidDonateBlood } from 'react-icons/bi';
import useAuth from "../../Hooks/useAuth";
const pages = ["Home","Donation Requests", "Blogs","Payment","About","Services","Contact"];
const nonpages = ["Home","Donation Requests", "Blogs","About","Services","Contact"];
const settings = ["Profile","Dashboard"];
function NavBar() {
// auth user
  const { user,logOut } = useAuth();
const [anchorElNav, setAnchorElNav] =React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#EB2C29", py: "8px" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <div className="flex items-center">
            <BiSolidDonateBlood className="hidden md:flex text-3xl text-white" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BloodCamp
            </Typography>
          </div>

          {/* responsive  */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {user
                ? pages?.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))
                : nonpages?.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BloodUnity
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", columnGap: "20px" },
              justifyContent: "center",
              fontWeight: "500",
            }}
          >
            {user
              ? pages?.map((page) => (
                  <NavLink
                    key={page}
                    onClick={handleCloseNavMenu}
                    to={page === "Home" ? "/" : `/${page}`}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "border-y-4  border-white "
                        : ""
                    }
                  >
                    <p className="px-4 py-2">{page}</p>
                  </NavLink>
                ))
              : nonpages?.map((page) => (
                  <NavLink
                    key={page}
                    onClick={handleCloseNavMenu}
                    to={page === "Home" ? "/" : `/${page}`}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "border-y-4  border-white "
                        : ""
                    }
                  >
                    <p className="px-4 py-2">{page}</p>
                  </NavLink>
                ))}
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user && (
                    <img
                      className="w-[50px] h-[50px] rounded-full object-cover"
                      src={user?.photoURL}
                      alt=""
                    />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <NavLink
                  to={`/dashboard/${setting === "Dashboard" ? "" : setting.toLowerCase()}`}
                    key={setting}
                    onClick={handleCloseUserMenu}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <MenuItem>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </NavLink>
                ))}
                <MenuItem>
                  <Button
                    onClick={logOut}
                    textAlign="center"
                    
                  >
                    Logout
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <div className=" flex gap-8">
              <Link to="/register">
                <button
                  type="button"
                  className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 border-[1px]"
                >
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 border-[1px]"
                >
                  Login
                </button>
              </Link>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;