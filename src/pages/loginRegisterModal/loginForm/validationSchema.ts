import * as yup from 'yup';

const validationSchema = () => {
    return yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
    });
};

export default validationSchema;
