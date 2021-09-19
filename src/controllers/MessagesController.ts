import { Request, response, Response } from "express"
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

    async showByUser(req: Request, res: Response){
        const { id } = req.params

        const messagesServices = new MessagesServices();

        const list = await messagesServices.listByUser(id)

        return res.json(list)
    }
}

export { MessagesController }