import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import mongosoe from 'mongoose'

import { UserModel } from '../../../../schemas'

export class CreateSucessResponse {

  @ApiProperty({
    example: 'rickgomezperez@gmail.com'
  })
  email: string

  @ApiProperty({
    example: 'Ricardo'
  })
  name: string

  @ApiProperty({
    example: 'Gomez'
  })
  lastname: string

}