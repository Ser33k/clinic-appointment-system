import axios from "../axios-config";

class AppointmentService {
  createAppointment(appointmentDto) {
    return axios.post(`/appointments`, appointmentDto);
  }
}

export default new AppointmentService();
