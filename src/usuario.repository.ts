export class Usuariorepository{
    private usuarios =[];

    salvar(usuario){
        this.usuarios.push(usuario)
    }
}