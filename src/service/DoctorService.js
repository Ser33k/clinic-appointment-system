import axios from "../axios-config";

class DoctorService {
  getAllDoctors() {
    return axios.get(`/doctors`);
  }

  getAvaialbilityDatesByDoctor(idDoctor) {
    return axios.get(`doctors/${idDoctor}/availability`);
  }

  getScheduleByUser(idUser) {
    return axios.get(`users/${idUser}/appointments`);
  }
}

export default new DoctorService();
