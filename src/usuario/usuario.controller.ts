import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriaUsuarioDOT } from "./dto/criaUsuario.dts";
import { UsuarioEntity } from "./usuario.entity";
import { Usuariorepository } from "./usuario.repository";
import {v4 as uuid} from 'uuid';

@Controller('/usuarios')
export class UsuarioController{

    constructor(private usuarioRepository: Usuariorepository){}

    @Post()
    async criarUsuario(@Body() dadosUsuario : CriaUsuarioDOT){
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosUsuario.email
        usuarioEntity.senha = dadosUsuario.senha
        usuarioEntity.nome = dadosUsuario.nome
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);
        return {
          id: usuarioEntity.id, 
          message:'Usuario criado'
        }
    }

    @Get()
    async listarUsuarios() {
        return this.usuarioRepository.listar();
    }
}
