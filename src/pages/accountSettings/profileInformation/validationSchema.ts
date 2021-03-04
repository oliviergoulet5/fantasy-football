import * as yup from 'yup';

const validationSchema = () => {
    return yup.object({
        name: yup.string().max(70),
        favouriteTeam: yup.string(),
        bio: yup.string().max(500),
        avatar: yup.string()
    });
}

export default validationSchema;