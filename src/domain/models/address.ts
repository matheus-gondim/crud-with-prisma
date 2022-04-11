export type Address = {
    id: number;
    zipecode: string;
    street: string;
    number: number;
    complement?: string;
    city: string;
    district: string;
    state: string;
    createdAt: Date;
    updatedAt: Date;
}