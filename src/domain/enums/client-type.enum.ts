export enum ClientType {
    PHYSICAL_PERSON,
    LEGAL_PERSON
}

export const getAllClientTypeValues = () => Object.keys(ClientType).filter((key) => Number.isNaN(+key))
