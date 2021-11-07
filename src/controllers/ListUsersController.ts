import { Request, Response } from 'express'
import { ListUsersService } from '../services/ListUsersService'

class ListUsersController {
    async handle(rq: Request, rs: Response) {
        const service = new ListUsersService()
        const users = await service.execute()

        return rs.json(users)
    }
}

export { ListUsersController }
