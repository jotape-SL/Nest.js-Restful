import { Body, Controller, Get, Post } from "@nestjs/common";
import { Usuariorepository } from "./usuario.repository";

@Controller('/usuarios')
export class UsuarioController{

    private usuarioRepository = new Usuariorepository()

    @Post()
    async criarUsuario(@Body() dadosUsuario){
        this.usuarioRepository.salvar(dadosUsuario);
        return dadosUsuario;
    }

    @Get()
    async listarUsuarios() {
        return this.usuarioRepository.listar();
    }
}