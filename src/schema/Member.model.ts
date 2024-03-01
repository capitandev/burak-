import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";

const memberSchema = new Schema({
    
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

    memberNick: {
        type: String,
        index: { unique: true, sparse: true },
        required: true
    },

    memberPhone: {
        type: String,
        index: { unique: true, sparse: true },
        required: true
    },

    memberPassword: {
        type: String,
        select: false,
        required: true
    },

    memberImage: {
        type: String
    },

    memberPoints: {
        type: Number,
        default: 0
    },

    memberAddress: {
        type: String
    },

    memberDesc: {
        type: String
    }

}, { timestamps: true });

export default mongoose.model(`Members`, memberSchema);
