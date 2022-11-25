import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { Usuariorepository } from "./usuario.repository";
import { isEmailUnico, isEmailUnicoValidator } from "./validacao/IsEmailUnico.validator";

@Module({
    controllers:[UsuarioController],
    providers:[Usuariorepository, isEmailUnicoValidator]
})
export class UsuarioModule{

}
