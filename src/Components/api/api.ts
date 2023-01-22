import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
});

export const authAPI = {
  whoAmI() {
    return instance.get(`auth/me`);
  },
  login(email:string,password:string,rememberMe:boolean,captcha:any) {
    const data = {
      email,
      password,
      rememberMe,
      captcha
    }
    return instance.post(`auth/login`, data)
  },
  logout() {
    return instance.delete(`auth/login`)
  }
};
