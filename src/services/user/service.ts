import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { hashSync } from 'bcrypt'

import { Dto } from '../../shared'

import { UserModel } from '../../schemas'


@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel.User.name) private readonly model: Model<UserModel.UserDocument> ) {}

  async create(dto: Dto.User.CreateDto): Promise<UserModel.User> {
      
    dto.password = hashSync(dto.password, 9);

    return new this.model(dto).save();
  }

  async find(): Promise<UserModel.User[]> {
    return this.model.find();
  }

  async findOne(id: string): Promise<UserModel.User> {
    return this.model.findById(id);
  }
  
  async update(id: string, dto: Dto.User.UpdateDto): Promise<UserModel.User> {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }

  async deleteOne(id: string): Promise<UserModel.User> {
    return this.model.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  }
  
}