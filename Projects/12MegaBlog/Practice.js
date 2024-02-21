import { Client, Account, Databases, Query, Storage, ID } from "appwrite";
import conf from "./src/conf/conf";

export class DBService {
    client  = new Client();
    databases;
    storage;


    constructor() {
        this.client 
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({})
}