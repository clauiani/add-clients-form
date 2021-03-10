import React, { useState } from "react";
import { Box, Grid, Paper, Avatar, Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddClient = () => {
  // const values
  const [firstname, setFirstName] = useState("");
  const [errorsFirstName, setErrorsFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [errorsLastName, setErrorsLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorsPhone, setErrorsPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorsEmail, setErrorsEmail] = useState("");
  const [city, setCity] = useState("");
  const [errorsCity, setErrorsCity] = useState("");

  //const for design
  const paperStyle = {
    padding: 60,
    height: "70vh",
    width: 350,
    margin: "40px auto",
  };

  const avatarStyle = {
    backgroundColor: "#33cc33",
  };
  //phone number validation
  const handleChangePhone = (e) => {
    const val = e.target.value;

    setErrorsPhone({ phone: "" });
    setPhone(val);
    let reg = new RegExp(/^\d*$/).test(val);
    if (!reg) {
      setErrorsPhone({ phone: "Only numbers are permitted" });
    }
  };
  // email validation
  const handleChangeEmail = (e) => {
    const val = e.target.value;
    setErrorsEmail({ email: "" });
    setEmail(val);
    let reg = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    ).test(val);
    if (!reg) {
      setErrorsEmail({ email: "E-mail form is not correct" });
    }
  };

  // first name validation
  const handleChangeFirstName = (e) => {
    const val = e.target.value;
    setErrorsFirstName({ firstname: "" });
    setFirstName(val);
    if (val.length < 2) {
      setErrorsFirstName({
        firstname: " First name has to be at least 2 characters long",
      });
    }
  };
  // last name validation
  const handleChangeLastName = (e) => {
    const val = e.target.value;
    setErrorsLastName({ firstname: "" });
    setLastName(val);
    if (val.length < 2) {
      setErrorsLastName({
        lastname: "Last name has to be at least 2 characters long",
      });
    }
  };

  //city validation
  const handleChangeCity = (e) => {
    const val = e.target.value;
    setErrorsCity({ city: "" });
    setCity(val);
    if (val.length < 2) {
      setErrorsCity({ city: "City has to be at least 2 characters long" });
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddIcon />
          </Avatar>
          <h2>Add Client</h2>
        </Grid>

        <TextField
          id="outlined-basic"
          autoComplete="off"
          label="First Name"
          inputProps={{ maxLength: 255 }}
          onChange={handleChangeFirstName}
          required
          error={Boolean(errorsFirstName?.firstname)}
          helperText={errorsFirstName?.firstname}
          variant="standard"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          autoComplete="off"
          label="Last Name"
          inputProps={{ maxLength: 255 }}
          onChange={handleChangeLastName}
          required
          error={Boolean(errorsLastName?.lastname)}
          helperText={errorsLastName?.lastname}
          variant="standard"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          autoComplete="off"
          value={email}
          label="Email"
          inputProps={{ maxLength: 255 }}
          onChange={handleChangeEmail}
          required
          error={Boolean(errorsEmail?.email)}
          helperText={errorsEmail?.email}
          variant="standard"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          autoComplete="off"
          value={phone}
          label="Phone number"
          inputProps={{ maxLength: 255 }}
          onChange={handleChangePhone}
          required
          error={Boolean(errorsPhone?.phone)}
          helperText={errorsPhone?.phone}
          variant="standard"
          fullWidth
        />

        <TextField
          id="outlined-basic"
          autoComplete="off"
          label="City"
          inputProps={{ maxLength: 255 }}
          onChange={handleChangeCity}
          required
          error={Boolean(errorsCity?.city)}
          helperText={errorsCity?.city}
          variant="standard"
          fullWidth
        />
        <Box my={4}>
          <Button color="primary" type="submit" variant="contained" fullWidth>
            Add Client
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default AddClient;
