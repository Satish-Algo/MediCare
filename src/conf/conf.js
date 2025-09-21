const conf = {

        appwriteUrl : String( import.meta.env.VITE_APPWRITE_URL),
        appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
        appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
        appwriteUserCollectionId : String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID),
        appwriteDoctorCollectionId : String(import.meta.env.VITE_APPWRITE_DOCTORS_COLLECTION_ID),
        appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),




}

export default conf;
