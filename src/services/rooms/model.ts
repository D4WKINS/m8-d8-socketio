import mongoose from "mongoose";
import { IRoom, RoomSchema } from "./schema";

export const RoomsModel = mongoose.model<IRoom>("rooms", RoomSchema)