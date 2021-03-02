import * as yup from 'yup';

const validationSchema = () => {
    return yup.object({
        name: yup.string(),
        favouriteTeam: yup.string(),
        bio: yup.string(),
        avatar: yup.string()
    });
}

export default validationSchema;