import axios from "../axios-config";

class AppointmentService {
  reserveAppointment(reserveAppointmentDto) {
    return axios.post(`/appointment`, reserveAppointmentDto);
  }
}

export default new AppointmentService();
