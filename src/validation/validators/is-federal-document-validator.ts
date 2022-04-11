import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'isCpf', async: false })
export class IsFederalDocumentValidator implements ValidatorConstraintInterface {
    validate(text: string) {
        if (parseInt(text).toString() == 'NaN') return false;
        if(this.allSameNumbers(text)) return false;
        if (text.length === 14) return this.cnpjValidation(text);
        if (text.length === 11) return this.cpfValidation(text);
        return false;
    }

    defaultMessage() {
        return 'Documento inválido';
    }

    private cpfValidation(cpf: string): boolean {
        cpf = cpf.replace(/[^\d]+/g, '');

        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(cpf.charAt(9))) return false;

        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;

        if (rev != parseInt(cpf.charAt(10))) return false;

        return true;
    }

    cnpjValidation(cnpj: string): boolean {
        const match = cnpj.toString().match(/\d/g);
        const numbers = Array.isArray(match) ? match.map(Number) : [];

        const digits = numbers.slice(12);

        const digit0 = this.calc(12, numbers);
        if (digit0 !== digits[0]) return false;

        const digit1 = this.calc(13, numbers);
        return digit1 === digits[1];
    }

    private allSameNumbers(federalDocument: string): boolean {
        const match = federalDocument.toString().match(/\d/g);
        const numbers = Array.isArray(match) ? match.map(Number) : [];

        const items = [...new Set(numbers)];
        if (items.length === 1) return true;
        return false;
    }

    private calc(x: any, numbers: number[]) {
        const slice = numbers.slice(0, x);
        let factor = x - 7;
        let sum = 0;

        for (let i = x; i >= 1; i--) {
            const n = slice[x - i];
            sum += n * factor--;
            if (factor < 2) factor = 9;
        }

        const result = 11 - (sum % 11);
        return result > 9 ? 0 : result;
    }
}
