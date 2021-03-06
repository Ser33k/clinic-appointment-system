import { useState } from "react";
import "./DoctorRegisterForm.scss";
import UserService from "../../../service/UserService";
import { useAlert } from "react-alert";

function DoctorRegisterForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [agree, setAgree] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.currentTarget.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.currentTarget.value);
  };

  const handleIdNumberChange = (e) => {
    setIdNumber(e.currentTarget.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.currentTarget.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.currentTarget.value);
  };
  const handleLicenseNumberChange = (e) => {
    setLicenseNumber(e.currentTarget.value);
  };
  const handleAgreeChange = (e) => {
    setAgree(e.currentTarget.checked);
  };

  const alert = useAlert();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const registrationDto = props.doctorOption
      ? {
          idNumber,
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
          address,
          doctorDto: {
            licenseNumber,
          },
          patientDto: null,
        }
      : {
          idNumber,
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
          address,
          doctorDto: null,
          patientDto: {
            idNumber,
            weight: 70,
            height: 190,
          },
        };

    UserService.register(registrationDto).then((r) => {
      if (r.data === "") {
        return window.alert("Nie uda??o si?? zarejestrowa??!");
      }
      for (const [key, value] of Object.entries(r.data)) {
        if (value === null) {
          return window.alert("Nie uda??o si?? zarejestrowa??!");
        }
      }
      return alert.show("U??ytkownik zarejestrowany!");
    });
  };

  return (
    <>
      <h1>
        {props.doctorOption
          ? "Zarejestruj si?? jako lekarz"
          : "Zarejestruj si?? jako pacjent"}
      </h1>
      <form
        className="register form"
        id="register__form"
        onSubmit={handleRegisterSubmit}
      >
        <div className="register__row">
          <label htmlFor="firstName">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="register__input"
              placeholder="Imi??..."
            />
          </label>
          <label htmlFor="lastName">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              className="register__input"
              placeholder="Nazwisko..."
            />
          </label>
        </div>
        <div className="register__row">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="register__input"
              placeholder="Email..."
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="register__input"
              placeholder="Has??o..."
            />
          </label>
        </div>
        <div className="register__row">
          <label htmlFor="idNumber">
            <input
              type="number"
              name="idNumber"
              value={idNumber}
              onChange={handleIdNumberChange}
              className="register__input"
              placeholder="Pesel..."
            />
          </label>
          <label htmlFor="phoneNumber">
            <input
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="register__input"
              placeholder="Numer telefonu..."
            />
          </label>
        </div>
        {props.doctorOption && (
          <div className="register__row">
            <label htmlFor="licenseNumber">
              <input
                type="text"
                name="licenseNumber"
                value={licenseNumber}
                onChange={handleLicenseNumberChange}
                className="register__input"
                placeholder="Numer licencji..."
              />
            </label>
            <label htmlFor="address">
              <input
                type="text"
                name="address"
                value={address}
                onChange={handleAddressChange}
                className="register__input"
                placeholder="Adres..."
              />
            </label>
          </div>
        )}
        <div className="register__row">
          <label htmlFor="agree" style={{ fontSize: "8px" }}>
            <input
              type="checkbox"
              name="agree"
              value={agree}
              onChange={handleAgreeChange}
            />
            Akceptuj?? regulamin oraz zapozna??em/am si?? z informacj?? o danych
            osobowych.
          </label>
        </div>

        <button className="register__btn" type="submit">
          Zarejestruj!
        </button>
      </form>
    </>
  );
}

export default DoctorRegisterForm;
