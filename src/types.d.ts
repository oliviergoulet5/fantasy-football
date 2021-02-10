export type AcceptedFilterTypes = string | number | number[];

export type LoginFormValues = {
    email: string;
    password: string;
};

export type RegisterFormValues = LoginFormValues & { username: string };
