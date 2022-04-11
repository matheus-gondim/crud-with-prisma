import { Type } from "class-transformer";
import { 
    IsEmail, 
    IsEnum, 
    IsNotEmpty, 
    IsNotEmptyObject, 
    IsObject, 
    Validate, 
    ValidateNested 
} from "class-validator";

import { AddAddressRequestDto } from "./save-address-request.dto";

import { ClientType } from "../../../domain/enums";
import { IsFederalDocumentValidator } from "../../../validation";

export class AddClientRequestDto {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    cell: string;

    @IsNotEmpty()
    @Validate(IsFederalDocumentValidator)
    cpf: string;

    @IsNotEmpty()
    @Validate(IsFederalDocumentValidator)
    cnpj: string;
    
    @IsNotEmpty()
    phone: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsEnum(ClientType)
    clientType: ClientType;

    @IsNotEmpty()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => AddAddressRequestDto)
    address: AddAddressRequestDto;
}
