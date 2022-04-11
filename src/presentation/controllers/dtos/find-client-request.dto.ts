import { Transform } from "class-transformer";
import { IsInt, IsNotEmpty, Min } from "class-validator";

export class FindClientRequestDto {
    @Transform(({value}) => parseInt(value))
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    id: number
}