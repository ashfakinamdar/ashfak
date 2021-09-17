import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

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
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
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
      this.props.history.push("./dashboard");
    }
  };

  render() {
    let { show, errorPassword, errorUsername } = this.state;
    return (
      <div className="backgound">
        <div className="loginBox">
          <div className="header">
            <h1 className="headerText">Welcome</h1>
            <div className="container">
              <FormControl>
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
                  <span className="passwordView">
                    {show ? (
                      <VisibilityOffIcon onClick={this.showPassword} />
                    ) : (
                      <RemoveRedEyeIcon onClick={this.showPassword} />
                    )}
                  </span>
                  <Button variant="contained" onClick={this.submit}>
                    Log In
                  </Button>
                </Stack>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default login;