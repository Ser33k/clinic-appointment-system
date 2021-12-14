import { useState } from "react";
import DoctorRegisterForm from "./DoctorRegisterForm/DoctorRegisterForm";
import "./Register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowLeft,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

function Register() {
  const [doctorOption, setDoctorOption] = useState(false);
  const [patientOption, setPatientOption] = useState(false);

  const handlePatientClick = () => {
    setPatientOption(true);
    setDoctorOption(false);
  };

  const handleDoctorClick = () => {
    setDoctorOption(true);
    setPatientOption(false);
  };

  const handleBackClick = () => {
    setPatientOption(false);
    setDoctorOption(false);
  };
  return (
    <section className="section section__register">
      {doctorOption || patientOption ? (
        <button className="back__btn" onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      ) : null}

      {(doctorOption || patientOption) && (
        <DoctorRegisterForm
          doctorOption={doctorOption}
          patientOption={patientOption}
        />
      )}

      {doctorOption === false && patientOption === false ? (
        <div>
          <h1 className="register__title">Zarejestruj się jako</h1>
          <button className="option__btn" onClick={handlePatientClick}>
            Pacjent
          </button>
          <button className="option__btn" onClick={handleDoctorClick}>
            Lekarz
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default Register;
