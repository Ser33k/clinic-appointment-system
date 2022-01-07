import { useContext, useEffect, useState } from "react";
import AsyncSelect from "react-select";
import AppointmentService from "../../../service/AppointmentService";
import DoctorService from "../../../service/DoctorService";
import { StoreContext } from "../../../store/storeProvider";
import "./ReserveAppointment.scss";
import { useAlert } from "react-alert";

// https://react-select.com/async
function ReserveAppointment() {
  const { user } = useContext(StoreContext);

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescripton] = useState("");
  const [doctorLables, setDoctorLabels] = useState([]);
  const [dateLabels, setDateLabels] = useState([]);

  const alert = useAlert();

  const handleDoctorChange = (newValue) => {
    setDoctor(newValue.value);

    DoctorService.getAvaialbilityDatesByDoctor(newValue.value.idDoctor).then(
      (r) => {
        const filtered = r.data?.filter((date) => date.free);

        console.log(filtered);
        const a = filtered.map((date) => ({
          value: date,
          label: new Date(date.date).toLocaleString().slice(0, -3),
        }));

        setDateLabels(a);
      }
    );
  };

  const handleDateChange = (newValue) => {
    console.log(newValue);
    setDate(newValue.value);
  };

  const handleDescriptionChange = (e) => {
    setDescripton(e.currentTarget.value);
  };

  const handleReserveSubmit = (e) => {
    e.preventDefault();

    const reserveAppointmentDto = {
      patientDto: {
        idNumber: user.idNumber,
      },
      doctorDto: {
        licenseNumber: doctor.licenseNumber,
      },
      date: date.date,
      duration: 20,
      description,
    };

    AppointmentService.reserveAppointment(reserveAppointmentDto).then((r) => {
      console.log(r);
      for (const [key, value] of Object.entries(r.data)) {
        if (value === null) {
          return window.alert("Nie udało się zarezerwować wizyty");
        }
      }
      return alert.show("Wizyta zarezerwowana!");
    });
  };

  useEffect(() => {
    DoctorService.getAllDoctors().then((r) => {
      console.log(r.data);

      const temp = r.data?.map((doctor) => ({
        value: doctor,
        label: `${doctor.user.firstName} ${doctor.user.lastName}`,
      }));

      setDoctorLabels(temp);

      console.log(doctorLables);
    });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Rezerwacja wizyty</h2>
      <form
        className="reserve__form"
        id="reserve-form"
        onSubmit={handleReserveSubmit}
      >
        <div className="reserve__row">
          <AsyncSelect
            onChange={handleDoctorChange}
            options={doctorLables}
            className="reserve__select"
            placeholder="Wybierz lekarza..."
            id="react-select-5-option-1"
          />
          <AsyncSelect
            className="reserve__select"
            // isDisabled={!doctor}
            placeholder="Wybierz termin..."
            onChange={handleDateChange}
            options={dateLabels}
          />
        </div>
        <div className="reserve__row">
          <textarea
            cols="30"
            rows="10"
            placeholder="Przyczyna wizyty..."
            maxLength={100}
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="reserve__row">
          <button type="submit" className="reserve__btn">
            Zarezerwuj
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReserveAppointment;
