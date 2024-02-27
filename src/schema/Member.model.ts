import mongoose,{Schema} from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";

const memberSchema = new Schema ({
    //defination
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER


    },

    memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE
    },

    MemberNick: {
        type: String,
        index: {unique:true, sparse:true},
        required:true
    },

    MemberPhone: { 
        type: String,// Nega number emas? 
        index: {unique:true, sparse:true},
        required:true
    },
    
    MemberPassword: {
        type: String,
        select:false,// db dan datani olma fals qiymat ber
        required:true
    },
    MemberImage: {
        type: String,
    },
    MemberPoints: {
        type: Number,
        default: 0,
    },


    MemberAddress: {
        type: String,
    },
    
    MemberDesc: {
        type: String,
    }, 
    
},

{timestamps:true}//UpdateAt, CreatedAt
    
) ;

export default mongoose.model(`Member`,memberSchema)