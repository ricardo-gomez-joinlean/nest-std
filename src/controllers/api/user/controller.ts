import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UserService } from '../../../services'

import { Response, Dto } from './shared'

@Controller('users')
export class UserController {
 
  constructor(private readonly service: UserService.UserService) {}

  @Post()
  @ApiResponse({
    status: 201,
    type: Response.CreateSucessResponse
  })
  create(
    @Body() dto: Dto.CreateDto
  ): Promise<Response.CreateSucessResponse> {

    return this.service.create(dto);

  }
    
}