// config file is to convert all id's into exact in string
// This is a JavaScript file that exports a configuration object.

const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf

// The String() function is used to convert the values of the configuration properties to strings, in case they are not already strings. 

// The import.meta.env object is used to access environment variables that are set during the build process.