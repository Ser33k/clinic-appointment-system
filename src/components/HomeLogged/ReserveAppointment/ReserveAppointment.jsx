import { useContext, useEffect, useState } from "react";
import AsyncSelect from "react-select";
import AppointmentService from "../../../service/AppointmentService";
import DoctorService from "../../../service/DoctorService";
import { StoreContext } from "../../../store/storeProvider";
import "./ReserveAppointment.scss";

// https://react-select.com/async
function ReserveAppointment() {
  const { user } = useContext(StoreContext);

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescripton] = useState("");
  const [doctorLables, setDoctorLabels] = useState([]);
  const [dateLabels, setDateLabels] = useState([]);

  // const options = [
  //   { value: "chocolate", label: "Chocolate", id: 20 },
  //   { value: "strawberry", label: "Strawberry", name: "mdsasad" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];
  const handleDoctorChange = (newValue) => {
    // const inputValue = newValue.replace();
    console.log(newValue);
    setDoctor(newValue.value);

    DoctorService.getAvaialbilityDatesByDoctor(newValue.value.idDoctor).then(
      (r) => {
        console.log(r.data);
        const filtered = r.data?.filter((date) => date.free);

        console.log(filtered);
        const a = filtered.map((date) => ({
          value: date,
          label: new Date(date.date).toLocaleString(),
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

    const appointmentDto = {
      appointmentDate: date,
      description,
      user,
    };
    console.log(appointmentDto);

    AppointmentService.createAppointment(appointmentDto).then((r) => {
      if (r.status === 200) {
        alert("Udało się zarezerwować wizytę!");
      } else {
        alert("Coś poszło nie tak, spróbuj ponownie!");
      }
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
      <form className="reserve__form" onSubmit={handleReserveSubmit}>
        <div className="reserve__row">
          <AsyncSelect
            onChange={handleDoctorChange}
            options={doctorLables}
            className="reserve__select"
            placeholder="Wybierz lekarza..."
          />
          <AsyncSelect
            className="reserve__select"
            isDisabled={!doctor}
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
