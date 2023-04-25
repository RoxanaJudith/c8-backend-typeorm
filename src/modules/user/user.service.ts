import { User } from "./user.entity";
import { AppDataSource } from "../../database";

export class UserService
{
  constructor(){
  }

  // index = async() => {
  //   const users = await AppDataSource.getRepository(User).find();
  //   return users;
  // }

  index = async() => {
    const users = await User.find();
    return users;
  }

  create =  async (post: User) => {
    const users = await User.save(post);
    return post;
  }

  update = async (user: User, id: number) => {
    const updateUser = await User.update(id, user);
    return updateUser;
  }

  delete = async (id: number) => {
    const deletedPost = await User.delete(id);
    return deletedPost;
  }
}