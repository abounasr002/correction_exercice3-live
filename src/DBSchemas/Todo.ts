import mongoose, { Schema } from "mongoose"

export interface TodoI {
    task: string,
    completed: boolean,
    addedAt: Date
}

const todoSchema = new Schema<TodoI>({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
    addedAt: { type: Date, default: Date.now }
})

export default mongoose.model<TodoI>('Todo', todoSchema);