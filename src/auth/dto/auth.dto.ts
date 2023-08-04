import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty({ message: 'Campo email não pode ser vazio' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo senha não pode ser vazio' })
  password: string;
}
