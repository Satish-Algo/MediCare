import { Client, ID, TablesDB } from "appwrite";
import conf from "../../conf/conf.js";



 export class DbService {
     client =new Client();
     tablesDB;
     constructor() {
      this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId)
         this.tablesDB = new TablesDB(this.client);
     }

     // for doctor list........

     async  addDocter( {titel}){
         try {
             return await this.tablesDB.createRow({

                 rowId: ID.unique(),
                 data: { }
             })

         }catch (error)
         {
             console.log("Appwrite serive :: createPost :: error", error);
         }
     }
     async get ( ){
         try {

             return await this.tablesDB.listRows( conf.appwriteDatabaseId,conf.appwriteDoctorCollectionId)

         }catch (error){
             console.log("appwrite service :: createAccount :: error", error);
         }
     }

    // for lab list..........
     async addLabTest( {titel}){
         try {
             return await this.tablesDB.createRow({
                 rowId: ID.unique(),
                 data: { }}

             )
         }catch (error){
             console.log("Appwrite serive :: createAccount :: error", error);
         }
     }

     async getLabTests ( ){
         try {
             return await this.tablesDB.listRows(conf.appwriteDatabaseId,conf.appwriteLabTestId)
         }catch (error){
             console.log("appwrite service :: createLabTest :: error", error);
         }
     }

     async  createLabBooking( ){
         try {
             return await this.tablesDB.createRow({
                 rowId: ID.unique(),
                 data: { },

             })
         }
     }

 }

const dbService = new DbService();
export default dbService;