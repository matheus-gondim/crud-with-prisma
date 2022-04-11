import { Transform } from "class-transformer";
import { IsNotEmpty, IsOptional, Length } from "class-validator";

export class AddAddressRequestDto {
    @IsNotEmpty()
    @Transform(({value}) => value.replace(/[^\d]+/g, ''))
    @Length(8, 8)
    zipecode: string;
    
    @IsNotEmpty()
    street: string;
    
    @IsNotEmpty()
    number: number;
    
    @IsOptional()
    complement?: string;
    
    @IsNotEmpty()
    city: string;
    
    @IsNotEmpty()
    district: string;
    
    @IsNotEmpty()
    state: string;
}

