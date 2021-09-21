import { getCustomRepository, Repository } from "typeorm"
import { UsersRepository } from "../repositories/UsersReposity"
import { User } from "../entities/User"

class UserService {
    
    private userRepository: Repository<User>
    constructor(){
        this.userRepository = getCustomRepository(UsersRepository)
    }

    async create(email : string){

        const userExists = await this.userRepository.findOne({
            email
        })

        if(userExists){
            return userExists;
        }

        const user = this.userRepository.create({
            email
        })

        await this.userRepository.save(user)

        return user
    }

    async findByEmail(email : string) {
        const connection = await this.userRepository.findOne({
            email
        })

        return connection
    }
}

export { UserService }