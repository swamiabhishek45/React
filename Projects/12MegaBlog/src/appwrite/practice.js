import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  // Data Members
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account();
  }

  async createAccount({ email, password, name }) {
    try {
      const useraccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (useraccount) {
        // call login method
        return this.login({ email, password });
      } else {
        return useraccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getUser() {
    try {
        return await this.account.get();
    } catch (error) {
        throw error;
    }

    return null;
  }

  async logout() {
    try {
        return await this.account.deleteSessions();
    } catch (error) {
        
    }
  }
}

// make class into object
const authservice = new AuthService();

export default authservice;
