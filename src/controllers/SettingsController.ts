import { Request, Response } from "express";
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
}

export { SettingsController };