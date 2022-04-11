import { ClassConstructor, plainToClass } from "class-transformer"
import { validate } from "class-validator"

export const validator = async (dtoType: ClassConstructor<any>, request: any) => {
    const dto = plainToClass(dtoType, request)
    const error = await validate(dto)

    if(error.length) return JSON.stringify(error.map(err => err.constraints))
    return null
}