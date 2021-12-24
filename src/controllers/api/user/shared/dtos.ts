import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';
import mongoose from 'mongoose';


export class CreateDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'rickgomezperez@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '123456' })
  password: string;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Ricardo' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Gomez' })
  lastname: string;
  
}