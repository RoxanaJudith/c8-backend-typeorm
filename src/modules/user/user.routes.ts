import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();
const userController = new UserController();
router.get('/', userController.index);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;