import { Client, Account } from "appwrite";
import { Databases, Storage, ID } from "appwrite"

const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1", 
  projectId: "67b4d4380007d92e357a",
};

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

const databases = new Databases(client);
const storage = new Storage(client);

const account = new Account(client);

export { client, account, storage, databases, ID };
