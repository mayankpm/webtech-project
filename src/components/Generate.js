import React, { useState } from "react";
import generatePassword from "./password";
import PasswordDisplay from "./PasswordDisplay";
import CheckBoxes from "./Checkboxes";
import Tips from "./Tips";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./Context/Theme";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Generate() {
  const [theme, setTheme] = useState("light");
  const [password, setPassword] = useState(null);
  const [length, setLength] = useState(8);
  const [rangeOutput, setrangeOutput] = useState(8);
  const [open, setOpen] = useState(false);
  const [setting, setSetting] = useState({
    lowercase: true,
    upperCase: false,
    number: false,
    symbol: false,
  });
  const [errorMsg, setErrorMsg] = useState("");
  function myFunction() {

    if (length < 8 || length > 32) { // If request is less than 8 characters or more than 32, return an error.
      setOpen(true);
      setrangeOutput("")
      setPassword(null) // Clear previous password.
      setErrorMsg('Please enter length between 8-32') // Provides error for error box.

    } else if ((setting.lowercase === false) && (setting.upperCase === false) && (setting.number === false) && (setting.symbol === false)) { // Else if User has not chosen at least 1 of the options.
      setOpen(true);
      setrangeOutput("")
      setPassword(null) // Clear previous password.
      setErrorMsg('Please choose at least 1 option.') // Provides error for error box.

    } else { // Else user has asked for valid password length using at least 1 option.
      setPassword(null) // Clear previous password.
      setErrorMsg('') // Erases previous error.
      setPassword(generatePassword(length, setting));
    }

  }
  function onChange() {
    setLength(document.getElementById("rangeInput").value);
    setrangeOutput(document.getElementById("rangeInput").value);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar></Navbar>
      <div className={theme}>
        <div className="flex-column d-flex w-60 align-items-center p-5">
          <ThemeToggle />
          <div className="card text-center">
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle> Error</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {errorMsg}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </DialogActions>
            </Dialog>
            <div className="card-header">
              <h1 className="text-center">Random Password Generator</h1>
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex flex-column w-50">
                <div className="row justify-content-center align-items-center">
                  <label
                    className="form-label d-flex h-100 w-100"
                    htmlFor="customRange1"
                  >
                    <span className="w-100">Password Length (8-32) :</span>
                  </label>
                  <input
                    className="text-primary fs-5 font-weight-bold w-50"
                    id="amount"
                    name="amount"
                    type="number"
                    max={32}
                    min={8}
                    value={rangeOutput}

                    onChange={(e) => {
                      setLength(e.target.value);
                      setrangeOutput(e.target.value);
                    }}
                    onBlur={(e) => {
                      let value = parseInt(e.target.value);
                      // eslint-disable-next-line             
                      {
                        if (value >= 8 && value <= 32) {
                          setLength(value);
                          setrangeOutput(value);
                        }
                        else setLength("");
                      }


                    }}
                  />
                </div>
                <input
                  type="range"
                  id="rangeInput"
                  name="rangeInput"
                  onChange={onChange}
                  min="8"
                  max="32"
                  value={length || 8}
                  className="my-3"
                  // oninput="amount.value=rangeInput.value" // This was causing errors so I commented it out. The program seems to work okay without it.
                />

                <CheckBoxes setting={setting} setSetting={setSetting} />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                {password == null ? (
                  <h5 className="py-2 pt-3">
                    Click generate button for a new password
                  </h5>
                ) : (
                  <PasswordDisplay password={password} />
                )}
              </div>

              <button
                onClick={myFunction}
                type="button"
                className="btn btn-primary btn-lg"
              >
                Generate
              </button>
            </div>
          </div>
          <br />
          <br />
          <Tips />
        </div>
        <Footer></Footer>
      </div>
    </ThemeContext.Provider>
  );
}
