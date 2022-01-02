import axios from "../axios-config";

class UserService {
  createUser(patient) {
    return axios.post(`/patients`, patient);
  }

  loginUser(user) {
    return axios.post("/login", user);
  }

  register(registerDto) {
    return axios.post("/registration", registerDto);
  }
}

export default new UserService();
