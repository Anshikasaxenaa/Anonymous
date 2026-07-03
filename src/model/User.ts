import mongoose, {Schema, Document} from "mongoose";
import { unique } from "next/dist/build/utils";


export interface Message extends Document{
    content: string;
    createdAt: Date
}

//message schema - how the mssg will look 
const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }

})


// what data of the user is required
export interface User extends Document{
  userName: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];

}


// User schema
const UserSchema: Schema<User> = new Schema({
    userName: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/ , 'please use a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verify code is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify code is required"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema]
})


//Exporting 

//in next js the export is slightly differnt as we have no idea that the data already exists or not  so we create the export in next as this manner like if data is available good and otherwise create in the mongoose
const UserModel =  (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;