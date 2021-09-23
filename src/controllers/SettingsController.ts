import { request, Request, Response } from "express";
import { SettingService } from "../services/SettingService";

class SettingsController {
    async create(req:Request, res:Response){
        const { chat, username } = req.body;

        const serviceSettings = new SettingService();
    
        try {
            const settings = await serviceSettings.create({ chat, username })
    
            return res.json(settings);
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }

    async findByUsername( req: Request, res: Response){
        const { username } = req.params

        const settingService = new SettingService()

        const settings = await settingService.findByUsername(username)

        return res.json(settings)
    }

    async update(req: Request, res: Response) {
        const { username } = req.params
        const { chat } = req.body
        const settingsService = new SettingService()

        const settings = await settingsService.update(username, chat)
        return res.json(settings)
    }
}

export { SettingsController };