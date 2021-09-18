import React from "react";
import "../Style/App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Grid from '@mui/material/Grid';
import FormControl from "@mui/material/FormControl";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';


class login extends React.Component {
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

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value ,errorUsername: false});
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value,errorPassword: false  });
  };
  showPassword = () => {
    this.setState({ show: !this.state.show });
  };
  submit = () => {
    let { username, password } = this.state;
    
    if (username.toLocaleLowerCase() === "admin") {
      this.setState({ errorUsername: false });
    } else {
      this.setState({ errorUsername: true });
    }
    if (password === "1234") {
      this.setState({ errorPassword: false });
    } else {
      this.setState({ errorPassword: true });
    }
    if (username.toLocaleLowerCase() === "admin" && password === "1234") {
      this.props.history.replace("./dashboard");
    }
  };

  render() {
    let { show, errorPassword, errorUsername } = this.state;
    return (
      <div className="backgound">
        <div className="loginBox">
        <Grid container className="height100">  
        <Grid item xs={6}>
        <div className="container">
          <div className="flexLogin">
        <h1 className="mainText">Login.</h1><HdrStrongIcon style={{fontSize:40}} /></div>
              <FormControl className="width100">
                <Stack spacing={5}>
                  {" "}
                  <TextField
                    error={errorUsername ? true : false}
                    id="input-with-icon-textfield"
                    label="Enter Username"
                    variant="outlined"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                    helperText={errorUsername ? "Incorrect Username." : ""}
                  />
                  <TextField
                    error={errorPassword ? true : false}
                    className="passwordInput"
                    id="outlined-password-input"
                    label="Password"
                    type={show ? "text" : "password"}
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    autoComplete="current-password"
                    helperText={errorPassword ? "Incorrect Password" : ""}
                  />
                  <a href="#"className="forgotText">Forgot Password?</a>
                  <span className={errorUsername ? "passwordView2" : "passwordView"}>
                    {show ? (
                      <VisibilityOffIcon onClick={this.showPassword} />
                    ) : (
                      <RemoveRedEyeIcon onClick={this.showPassword} />
                    )}
                  </span>
                  <div className="textAlignCenter mt-0">
                  <Button variant="contained" onClick={this.submit} className="loginButton">
                    Log In
                  </Button>
                  </div>
                 
                </Stack>
              </FormControl>
            </div>
            <Divider className="mb-20">
        <Chip label="Or sign in using" />
      </Divider>
            <Grid container className="textAlignCenter iconPadding" >
               <Grid item xs={4}><FacebookIcon style={{color:"#1e88e5",fontSize:30}}/></Grid> 
               <Grid item xs={4}><GoogleIcon style={{color:"#c62828",fontSize:30}}/></Grid>
               <Grid item xs={4}><TwitterIcon style={{color:"#01579b",fontSize:30}}/></Grid>
            </Grid>
        </Grid>
        <Grid item xs={6} className="gridBackground">
         
       <h1 className="loginText">Welcome Back</h1>
       
       <h1 className="helperText">New User? Please Create An Account.</h1>
       <div className="textAlignCenter">
       <Button variant="contained" className="createAccountButton">
                    Create Account
                  </Button></div>
        </Grid>
        </Grid>
        
           
          
        </div>
      </div>
    );
  }
}
export default login;
