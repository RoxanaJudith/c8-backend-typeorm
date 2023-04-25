import { Response, Request } from "express";
import { UserService } from "./user.service";
import { User } from "./user.entity";
export class UserController{
  private userService: UserService;

  constructor(){
    this.userService = new UserService();
  }

  index = async(req: Request, res: Response) => {
    const users = await this.userService.index();
    res.send(users).json();
  }

  create = async (req: Request, res: Response) =>{
    const user:User = req.body;
    const newUser = await this.userService.create(user);
    res.send(newUser);
  }

  update =  (req: Request, res: Response) => {
    const user:User = req.body;
    const id: Number = +req.params['id'];
    res.send(this.userService.update(user, Number(id)));
  }

  delete = async (req: Request, res: Response) => {
    const id:Number = +req.params['id'];
    res.send(this.userService.delete(Number(id)));
  }
}
