import mongoose from "mongoose"
import { Message } from "../../typings"

export const MessageSchema = new mongoose.Schema<Message>({
    text: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

// This is NOT what we are retrieving from the frontend. 
// This is the description of the object from the DB we are dealing with

export interface IRoom {
    name: string
    chatHistory: Message[]
}

// Pasing the interface among the <angle brackets> is letting Typescript infer the type of our schema correctly
export const RoomSchema = new mongoose.Schema<IRoom>({
    name: {
        type: String,
        required: true
    },
    chatHistory: {
        type: [MessageSchema],
        required: true,
        default: []
    }
}, { timestamps: true })
