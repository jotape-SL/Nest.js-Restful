import { Injectable } from '@nestjs/common';
import {ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint, ValidationOptions, registerDecorator} from 'class-validator';
import { Usuariorepository } from '../usuario.repository';

@Injectable()
@ValidatorConstraint({async: true})
export class isEmailUnicoValidator implements ValidatorConstraintInterface{
    constructor(
        private usuarioRepository: Usuariorepository
    ){};

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioComEmailExiste = await this.usuarioRepository.existeComEmail(value);
        return !usuarioComEmailExiste;
    };
}

export const isEmailUnico = (opcoesValidacao: ValidationOptions) => {
  return (obejto:Object, propriedade: string)=>{
    registerDecorator({
      target: obejto.constructor,
      propertyName: propriedade,
      options: opcoesValidacao,
      constraints:[],
      validator: isEmailUnicoValidator
    });
  }
}
