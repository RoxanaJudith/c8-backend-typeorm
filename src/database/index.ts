import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../modules/user/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: ['src/modules/**/*.entity.ts'],
});

export const dbConnection = () => {
  AppDataSource.initialize()
    .then(async () => {
      console.log('Data Source has been initialized!');

      // const user = new User();
      // user.email = 'hola@gmail.com';
      // user.firstName = 'Timber';
      // user.lastName = 'Saw';
      // user.password = '123456';
      // await user.save();

      // const allUsers = await User.find();
      // console.log(allUsers);
    })
    .catch((error) => {
      console.error('Error during Data Source initialization:', error);
    });
};
