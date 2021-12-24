import { Module } from '@nestjs/common';
import { UserController } from './controller';
import { UserService } from '../../../services'

@Module({
  imports: [ UserService.UserServiceModule ],
  controllers: [UserController],
})
export class UserModule {};