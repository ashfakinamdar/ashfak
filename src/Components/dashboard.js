import React from "react";
import "../Style/App.css";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


class dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      show: false,
      errorUsername: false,
      errorPassword: false,
    };
  }

  componentDidMount = () => {
    console.log("dv", this.props);
  };

  logout=()=>{
    this.props.history.replace("./login");
  }

  
  render() {
 
    return (
      <div className="backgound2">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>
          <Button color="inherit" onClick={this.logout} startIcon={<LogoutIcon />}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div className="flex">
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         Dashboard Menu
        </ListSubheader>
      }
    > <ListItemButton>
    <ListItemIcon>
      <AccountBoxIcon />
    </ListItemIcon>
    <ListItemText primary="Profile" />
  </ListItemButton>
  <ListItemButton>
    <ListItemIcon>
      <ContactPhoneIcon />
    </ListItemIcon>
    <ListItemText primary="Contact" />
  </ListItemButton>
  <ListItemButton>
    <ListItemIcon>
      <InfoIcon />
    </ListItemIcon>
    <ListItemText primary="About" />
  </ListItemButton></List>
  <div className="mainContent">
  <Grid container className="textAlignCenter " rowSpacing={2} columnSpacing={5} className="dashboardPadding">
      <Grid item xs={4}> 
      <Card  className="textAlignCenter cards" >
      <CardContent>
        <div className="flexLogin">
        <LoyaltyIcon className="dashboardIcons"/>
        <h1>Todays Sales</h1>
      </div>
      <h2>30</h2>
      </CardContent>
      </Card></Grid> 
      <Grid item xs={4}> 
      <Card  className="textAlignCenter cards" >
      <CardContent>
      <div className="flexLogin">
        <SupervisedUserCircleIcon  className="dashboardIcons"/>
      <h1>New Members</h1>
      </div>
      <h2>250+</h2>
      </CardContent>
      </Card></Grid>
      <Grid item xs={4}> 
      <Card  className="textAlignCenter cards" >
      <CardContent>
      <div className="flexLogin">
        <MonetizationOnIcon  className="dashboardIcons"/>
      <h1>Total Profit</h1>
      </div>
      <h2>40%</h2>
      </CardContent>
      </Card></Grid>
    </Grid>
 
  </div>
  </div>
      </div>
    );
  }
}
export default dashboard;
