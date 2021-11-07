import { Router } from 'express'

import { CreateUserController } from './controllers/CreateUserController'
import { AuthUserConroller } from './controllers/AuthUserController'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuth } from './middlewares/ensureAuth'
import { ListUsersController } from './controllers/ListUsersController'

const router = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()

const authController = new AuthUserConroller()

router.post('/users', createUserController.handle)
router.get('/users', ensureAuth, listUsersController.handle)
router.post('/users/auth', authController.handle)

// router.post('/tags', ensureAuth, ensureAdmin, createTagController.handle)

export { router }
