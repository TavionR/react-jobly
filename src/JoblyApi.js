class JoblyApi {
  // Individual API routes
  /** Get the current user. */

  static async getCurrentUser(username) {
    return mocks.user;
  }

  /** Get companies (filtered by name if not undefined) */
  static async getCompanies(name) {
    if (name) {
      return mocks.companies.filter(c => {
        return c.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      })
    }
    return mocks.companies;
  }

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    return mocks.company;
  }

  /** Get list of jobs (filtered by title if not undefined) */
  static async getJobs(title) {
    if (title) {
      return mocks.jobs.filter(c => {
        return c.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
      })
    }
    return mocks.jobs;
  }

  /** Apply to a job */
  static async applyToJob(username, id) {
    const oldApp = [...mocks.user.applications, id]
    mocks.user.applications = oldApp
    return true
  }

  /** Get token for login from username, password. */
  static async login(data) {
    return mocks.token;
  }

  /** Signup for site. */
  static async signup(data) {
    return mocks.token;
  }

  /** Save user profile page. */

  static async saveProfile(username, data) {
    console.log(data)
    mocks.user = {
      ...mocks.user,
      ...data
    }
    return mocks.user;
  }
}


export default JoblyApi;