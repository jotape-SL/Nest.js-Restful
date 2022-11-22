export class Usuariorepository{
    private usuarios =[];

    async salvar(usuario){
        this.usuarios.push(usuario);
    }

    async listar(){
        return this.usuarios;
    }
}