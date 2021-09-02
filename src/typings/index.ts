// we are only expecting blue or red from the frontend. 
// Clearly this doesnt exclude the need to specify the Room interface for our DB, see the model for the rooms

export type Room = "blue" | "red"

export interface User {
    username: string
    id: string
    room: Room
}

export interface Message {
    text: string
    sender: string
    timestamp: number
    id: string
}

export type SocketLogin = { username: string, room: Room }
export type SocketSendMessage = { message: Message, room: Room }
