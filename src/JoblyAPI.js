import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes
  /** Get details on all companies */
  static async getCompanies(filter) {
    let res = await this.request(filter ? `companies/?name=${filter}` : `companies`);
    return res.companies;
  }

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all jobs */
  static async getJobs(filter) {
    let res = await this.request(filter ? `jobs/?title=${filter}` : `jobs`);
    return res.jobs;
  }


  /** Signs up user and returns token */
  static async userSignup(signupFormData) {
    let res = await this.request("auth/register", signupFormData, "post");
    return res;
  }

  /** Returns user token if credentials are valid */
  static async userLogin(loginFormData) {
    let res = await this.request("auth/token", loginFormData, "post");
    return res;
  }

  /** Get the current user. */
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // Updates user data
  static async updateUser(userData, username) {
    let res = await this.request(`users/${username}`, userData, "patch");
    return res.user;
  }

  /** Apply to a job */
  static async applyToJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`, {}, "post");
  }

}
export default JoblyApi;