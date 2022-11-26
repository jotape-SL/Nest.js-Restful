import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaUsuarioDOT } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { Usuariorepository } from "./usuario.repository";
import { v4 as uuid } from "uuid";
import { ListaUsuariosDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDOT } from "./dto/AtualizaUsuario.dto";

@Controller("/usuarios")
export class UsuarioController {
  constructor(private usuarioRepository: Usuariorepository) {}

  @Post()
  async criarUsuario(@Body() dadosUsuario: CriaUsuarioDOT) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.senha = dadosUsuario.senha;
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity);
    return {
      usuario: new ListaUsuariosDTO(usuarioEntity.id, usuarioEntity.nome),
      message: "Usuario criado",
    };
  };

  @Get()
  async listarUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuariosDTO(usuario.id, usuario.nome)
    );
    return usuariosLista;
  };

  @Put('/:id')
  async atualizarUsuario( @Param('id') id: string, @Body() novosDados: AtualizaUsuarioDOT){
    const usuarioAtualizado = this.usuarioRepository.atualiza(id, novosDados)

    return{
      usuario: usuarioAtualizado,
      message: "Usuário atualizado com sucesso."
    }
  };

  @Delete('/:id')
  async deletaUsuario(@Param('id') id: string){
    const usuarioRemovido = await this.usuarioRepository.remove(id)
    return {
      usuairo:usuarioRemovido,
      message: 'Usuario removido com sucesso.'
    }
  }
}
