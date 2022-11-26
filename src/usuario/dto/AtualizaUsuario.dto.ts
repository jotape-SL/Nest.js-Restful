import { IsNotEmpty, IsEmail, MinLength, IsOptional } from "class-validator";
import { isEmailUnico } from "../validacao/IsEmailUnico.validator";

export class AtualizaUsuarioDOT {
  @IsNotEmpty({ message: "Nome vazio amigão, não pode!" })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: "Email inválido!" })
  @isEmailUnico({
    message: "Já existe um usuário com cadastrado com esse email.",
  })
  @IsOptional()
  email: string;

  @MinLength(3, { message: "A senha precisa ter, no mínimo, 3 caracteres" })
  @IsOptional()
  senha: string;
}
