var db=require('../config/connection')
var collection=require('../config/collections')
var objectId=require('mongodb').ObjectId

module.exports={

    addFile:(file,callback)=>{
        console.log(file);
        db.get().collection('file').insertOne(file).then((data)=>{
            console.log(data);
            console.log(file.Year);
            callback(data.insertedId);
        })
    },
    getAllFiles:()=>{
        return new Promise(async(resolve,reject)=>{
            let files=await db.get().collection(collection.FILE_COLLECTION).find().toArray()
            resolve(files)
        })
    },
    deleteFile:(fileId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.FILE_COLLECTION).deleteOne({_id:objectId(fileId)}).then((response)=>{
                //console.log(response);
                resolve(response)
            })
        })
    },
    getFileDetails:(fileId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.FILE_COLLECTION).findOne({_id:objectId(fileId)}).then((file)=>{
                resolve(file)
            })
        })
    },
    updateFile:(fileId,fileDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.FILE_COLLECTION)
            .updateOne({_id:objectId(fileId)},{
                $set:{
                    Name:fileDetails.Name,
                    Year:fileDetails.Year ,

                    Sem1:fileDetails.Sem1,
                    Sem1Sub_name1:fileDetails.Sem1Sub_name1,
                    Sem1Sub_name2:fileDetails.Sem1Sub_name2,
                    Sem1Sub_name3:fileDetails.Sem1Sub_name3,
                    Sem1Sub_name4:fileDetails.Sem1Sub_name4,
                    Sem1Sub_name5:fileDetails.Sem1Sub_name5,
                    Sem1Sub_name6:fileDetails.Sem1Sub_name6,

                    Sem2:fileDetails.Sem2,
                    Sem2Sub_name1:fileDetails.Sem2Sub_name1,
                    Sem2Sub_name2:fileDetails.Sem2Sub_name2,
                    Sem2Sub_name3:fileDetails.Sem2Sub_name3,
                    Sem2Sub_name4:fileDetails.Sem2Sub_name4,
                    Sem2Sub_name5:fileDetails.Sem2Sub_name5,
                    Sem2Sub_name6:fileDetails.Sem2Sub_name6,

                    Sem3:fileDetails.Sem3,
                    Sem3Sub_name1:fileDetails.Sem3Sub_name1,
                    Sem3Sub_name2:fileDetails.Sem3Sub_name2,
                    Sem3Sub_name3:fileDetails.Sem3Sub_name3,
                    Sem3Sub_name4:fileDetails.Sem3Sub_name4,
                    Sem3Sub_name5:fileDetails.Sem3Sub_name5,
                    Sem3Sub_name6:fileDetails.Sem3Sub_name6,

                    Sem4:fileDetails.Sem4,
                    Sem4Sub_name1:fileDetails.Sem4Sub_name1,
                    Sem4Sub_name2:fileDetails.Sem4Sub_name2,
                    Sem4Sub_name3:fileDetails.Sem4Sub_name3,
                    Sem4Sub_name4:fileDetails.Sem4Sub_name4,
                    Sem4Sub_name5:fileDetails.Sem4Sub_name5,
                    Sem4Sub_name6:fileDetails.Sem4Sub_name6,

                    Sem5:fileDetails.Sem5,
                    Sem5Sub_name1:fileDetails.Sem5Sub_name1,
                    Sem5Sub_name2:fileDetails.Sem5Sub_name2,
                    Sem5Sub_name3:fileDetails.Sem5Sub_name3,
                    Sem5Sub_name4:fileDetails.Sem5Sub_name4,
                    Sem5Sub_name5:fileDetails.Sem5Sub_name5,
                    Sem5Sub_name6:fileDetails.Sem5Sub_name6,

                    Sem6:fileDetails.Sem6,
                    Sem6Sub_name1:fileDetails.Sem6Sub_name1,
                    Sem6Sub_name2:fileDetails.Sem6Sub_name2,
                    Sem6Sub_name3:fileDetails.Sem6Sub_name3,
                    Sem6Sub_name4:fileDetails.Sem6Sub_name4,
                    Sem6Sub_name5:fileDetails.Sem6Sub_name5,
                    Sem6Sub_name6:fileDetails.Sem6Sub_name6

                }
            }).then((responce)=>{
                resolve()
            })
        })
    },
    
}