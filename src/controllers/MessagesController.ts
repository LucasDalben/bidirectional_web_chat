import { Request, Response } from "express"
import { MessagesServices } from '../services/MessagesService'

class MessagesController{
    async create(req:Request, res:Response){

        const { user_id, text, admin_id } = req.body
        const messagesServices = new MessagesServices();

        const message = await messagesServices.create({
            user_id,
            text,
            admin_id
        })

        return res.json(message)
    }
}

export { MessagesController }