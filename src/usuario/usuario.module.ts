import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { Usuariorepository } from "./usuario.repository";

@Module({
    controllers:[UsuarioController],
    providers:[Usuariorepository]
})
export class UsuarioModule{

}