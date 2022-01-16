import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Paper, Switch } from "@mui/material/";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../pictures/devshop-logo-white.png";
import CableIcon from "@mui/icons-material/Cable";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import FaceIcon from "@mui/icons-material/Face";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TextField from "@mui/material/TextField";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ dark, setDark }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { loggedIn, setLoggedIn, setUser } = useContext(UserContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDarkMode = () => {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    setUser({ username: "" });
    // navigate("/login");
  };

  const authNav = () => {
    return (
      <Box sx={{ flexGrow: 1,}}>
        <CssBaseline />
        <AppBar position="static" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mt: 2, flexGrow: 1 }}
            >
              <img src={logo} />
            </Typography>

            <Box
              sx={{
                position: "absolute",
                top: 6,
                left: '45%',
                marginTop: 1, 
              }}
            >
              <TextField
                id="outlined-search"
                label="Search"
                type="search"
                size="small"
              />
            </Box>

            <Box>
              <Tooltip title="Logout">
                <IconButton onClick={handleLogOut}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Account">
                <IconButton>
                  <FaceIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: "10px" }}>Toggle Darkmode</Typography>
              <Switch onClick={handleDarkMode} color="primary" />
            </Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <MaleIcon />
              </ListItemIcon>
              <ListItemText primary={"Men's Clothing"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FemaleIcon />
              </ListItemIcon>
              <ListItemText primary={"Women's Clothing"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AutoAwesomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Jewelry"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CableIcon />
              </ListItemIcon>
              <ListItemText primary={"Electronics"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText />
            </ListItem>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
    );
  };

  const unAuthNav = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="static" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mt: 2, flexGrow: 1 }}
            >
              <img src={logo} />
            </Typography>

            <Box
              sx={{
                position: "absolute",
                top: 6,
                left: '45%',
                marginTop: 1
              }}
            >
              <TextField
                id="outlined-search"
                label="Search"
                type="search"
                size="small"
              />
            </Box>

            <Box>
              <Tooltip title="Login">
                <IconButton onClick={() => setLoggedIn(true)}>
                  <LoginIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Register">
                <IconButton>
                  <PersonAddIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: "10px" }}>Toggle Darkmode</Typography>
              <Switch onClick={handleDarkMode} color="primary" />
            </Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <MaleIcon />
              </ListItemIcon>
              <ListItemText primary={"Men's Clothing"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FemaleIcon />
              </ListItemIcon>
              <ListItemText primary={"Women's Clothing"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AutoAwesomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Jewelry"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CableIcon />
              </ListItemIcon>
              <ListItemText primary={"Electronics"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText />
            </ListItem>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
    );
  };

  return <>{loggedIn ? authNav() : unAuthNav()}</>;
}
