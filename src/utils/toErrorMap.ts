import { FieldError } from '../generated/graphql';

const toErrorMap = (errors: Array<FieldError>) => {
    const errorMap: Record<string, string> = {};
    errors.forEach(({ field, message }) => {
        errorMap[field] = message;
        console.log(field);
    });

    return errorMap;
};

export default toErrorMap;
