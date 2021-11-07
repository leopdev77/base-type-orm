import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

class ListUsersService {
    async execute() {
        const repository = getCustomRepository(UsersRepositories)
        const listUsers = await repository.find()

        return listUsers
    }
}

export { ListUsersService }
