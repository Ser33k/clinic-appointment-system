import axios from "../axios-config";

class AppointmentService {
  createAppointment(appointmentDto) {
    return axios.post(`/appointments`, appointmentDto);
  }

  reserveAppointment(reserveAppointmentDto) {
    return axios.post(`/appointment`, reserveAppointmentDto);
  }
}

export default new AppointmentService();
