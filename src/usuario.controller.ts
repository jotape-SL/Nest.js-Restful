import { Body, Controller, Post } from "@nestjs/common";
import { Usuariorepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController{

    private usuarioRepository = new Usuariorepository()

    @Post()
    async criaUsuario(@Body() dadosUsuario = {}){
        this.usuarioRepository.salvar(dadosUsuario)
        return dadosUsuario
    }
}