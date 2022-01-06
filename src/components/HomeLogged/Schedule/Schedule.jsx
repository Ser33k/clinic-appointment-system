import { useContext, useEffect, useState } from "react";
import DoctorService from "../../../service/DoctorService";
import { StoreContext } from "../../../store/storeProvider";
import "./Schedule.scss";

function Schedule(props) {
  const [tableContent, setTableContent] = useState("");

  const { user } = useContext(StoreContext);

  useEffect(() => {
    DoctorService.getDoctorByUser(user.idNumber).then((r) => {
      console.log(r.data);
      const licenseNumber = r.data;

      DoctorService.getScheduleByLicenseNumber(licenseNumber).then((r) => {
        console.log(r.data);
        const content = r.data?.map((appointment) => {
          return (
            <tr key={appointment.date}>
              <td className="tg-0lax">
                {new Date(appointment.date).toLocaleString().slice(0, -3)}
              </td>
              <td className="tg-0lax">
                {appointment.patientFirstName} {appointment.patientLastName}
              </td>
              <td className="tg-0pky">{appointment.description}</td>
            </tr>
          );
        });

        setTableContent(content);
      });

      // DoctorService.getScheduleByUser(props.user.userId).then((r) => {
      // const content = r.data?.map((appointment) => {
      //   return (
      //     <tr key={appointment.description}>
      //       <td className="tg-0lax">
      //         {new Date(appointment.appointmentDate.date).toLocaleString()}
      //       </td>
      //       <td className="tg-0lax">
      //         {appointment.patient.user.firstName}{" "}
      //         {appointment.patient.user.lastName}
      //       </td>
      //       <td className="tg-0pky">{appointment.description}</td>
      //     </tr>
      //   );
      // });

      // setTableContent(content);
      // }, []);
    });
  }, []);

  return (
    <div>
      <h2 className="table__title">Grafik pracy</h2>
      <table className="tg" id="schedule_table">
        <thead>
          <tr>
            <th className="tg-0lax">Data</th>
            <th className="tg-0lax">Pacjent</th>
            <th className="tg-0lax">Opis</th>
          </tr>
        </thead>
        <tbody>{tableContent !== "" ? tableContent : null}</tbody>
      </table>
    </div>
  );
}

export default Schedule;
