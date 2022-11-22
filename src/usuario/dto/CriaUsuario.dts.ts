import {IsNotEmpty, IsEmail, MinLength } from "class-validator";


export class CriaUsuarioDOT{

    @IsNotEmpty({message:"Nome vazio amigão, não pode!"})
    nome:string;

    @IsEmail(undefined, {message:"Email inválido!"})
    email:string;

    @MinLength(3, {message:"A senha precisa ter, no mínimo, 3 caracteres"})
    senha:string;
}