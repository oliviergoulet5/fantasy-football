import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: File;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Account>;
  accounts: Array<Account>;
  players: Array<Player>;
};


export type QueryAccountsArgs = {
  id?: Maybe<Scalars['Float']>;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  favouriteTeam?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Player = {
  __typename?: 'Player';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  goalsScored: Scalars['Int'];
  assists: Scalars['Int'];
  minutes: Scalars['Int'];
  yellowCards: Scalars['Int'];
  redCards: Scalars['Int'];
  ictIndex: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: AccountResponse;
  login: AccountResponse;
  logout: Scalars['Boolean'];
  updateAccount: AccountResponse;
};


export type MutationRegisterArgs = {
  options: AccountInput;
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationUpdateAccountArgs = {
  options: UpdateAccountInput;
};

export type AccountResponse = {
  __typename?: 'AccountResponse';
  errors?: Maybe<Array<FieldError>>;
  account?: Maybe<Account>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type AccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UpdateAccountInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['Upload']>;
  favouriteTeam?: Maybe<Scalars['String']>;
};


export type AccountFieldsFragment = (
  { __typename?: 'Account' }
  & Pick<Account, 'id' | 'username' | 'email'>
);

export type ProfileFieldsFragment = (
  { __typename?: 'Account' }
  & Pick<Account, 'name' | 'bio' | 'favouriteTeam'>
  & SimplifiedProfileFieldsFragment
);

export type SimplifiedProfileFieldsFragment = (
  { __typename?: 'Account' }
  & Pick<Account, 'id' | 'username' | 'avatar'>
);

export type LoginMutationVariables = Exact<{
  options: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AccountResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, account?: Maybe<(
      { __typename?: 'Account' }
      & AccountFieldsFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'AccountResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, account?: Maybe<(
      { __typename?: 'Account' }
      & AccountFieldsFragment
    )> }
  ) }
);

export type UpdateAccountMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type UpdateAccountMutation = (
  { __typename?: 'Mutation' }
  & { updateAccount: (
    { __typename?: 'AccountResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, account?: Maybe<(
      { __typename?: 'Account' }
      & AccountFieldsFragment
    )> }
  ) }
);

export type UpdateProfileMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['Upload']>;
  bio?: Maybe<Scalars['String']>;
  favouriteTeam?: Maybe<Scalars['String']>;
}>;


export type UpdateProfileMutation = (
  { __typename?: 'Mutation' }
  & { updateAccount: (
    { __typename?: 'AccountResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, account?: Maybe<(
      { __typename?: 'Account' }
      & ProfileFieldsFragment
    )> }
  ) }
);

export type GetProfileQueryVariables = Exact<{
  id?: Maybe<Scalars['Float']>;
}>;


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { accounts: Array<(
    { __typename?: 'Account' }
    & ProfileFieldsFragment
  )> }
);

export type GetProfileSnippetQueryVariables = Exact<{
  id?: Maybe<Scalars['Float']>;
}>;


export type GetProfileSnippetQuery = (
  { __typename?: 'Query' }
  & { accounts: Array<(
    { __typename?: 'Account' }
    & SimplifiedProfileFieldsFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Account' }
    & AccountFieldsFragment
    & SimplifiedProfileFieldsFragment
  )> }
);

export type MeAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type MeAccountQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Account' }
    & AccountFieldsFragment
  )> }
);

export type MeProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MeProfileQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Account' }
    & ProfileFieldsFragment
  )> }
);

export const AccountFieldsFragmentDoc = gql`
    fragment AccountFields on Account {
  id
  username
  email
}
    `;
export const SimplifiedProfileFieldsFragmentDoc = gql`
    fragment SimplifiedProfileFields on Account {
  id
  username
  avatar
}
    `;
export const ProfileFieldsFragmentDoc = gql`
    fragment ProfileFields on Account {
  ...SimplifiedProfileFields
  name
  bio
  favouriteTeam
}
    ${SimplifiedProfileFieldsFragmentDoc}`;
export const LoginDocument = gql`
    mutation Login($options: LoginInput!) {
  login(options: $options) {
    errors {
      field
      message
    }
    account {
      ...AccountFields
    }
  }
}
    ${AccountFieldsFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $username: String!, $password: String!) {
  register(options: {email: $email, username: $username, password: $password}) {
    errors {
      field
      message
    }
    account {
      ...AccountFields
    }
  }
}
    ${AccountFieldsFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($username: String, $email: String, $password: String) {
  updateAccount(
    options: {username: $username, email: $email, password: $password}
  ) {
    errors {
      field
      message
    }
    account {
      ...AccountFields
    }
  }
}
    ${AccountFieldsFragmentDoc}`;
export type UpdateAccountMutationFn = Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        return Apollo.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, baseOptions);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($name: String, $avatar: Upload, $bio: String, $favouriteTeam: String) {
  updateAccount(
    options: {name: $name, avatar: $avatar, bio: $bio, favouriteTeam: $favouriteTeam}
  ) {
    errors {
      field
      message
    }
    account {
      ...ProfileFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      name: // value for 'name'
 *      avatar: // value for 'avatar'
 *      bio: // value for 'bio'
 *      favouriteTeam: // value for 'favouriteTeam'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, baseOptions);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const GetProfileDocument = gql`
    query GetProfile($id: Float) {
  accounts(id: $id) {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, baseOptions);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, baseOptions);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetProfileSnippetDocument = gql`
    query GetProfileSnippet($id: Float) {
  accounts(id: $id) {
    ...SimplifiedProfileFields
  }
}
    ${SimplifiedProfileFieldsFragmentDoc}`;

/**
 * __useGetProfileSnippetQuery__
 *
 * To run a query within a React component, call `useGetProfileSnippetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileSnippetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileSnippetQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileSnippetQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileSnippetQuery, GetProfileSnippetQueryVariables>) {
        return Apollo.useQuery<GetProfileSnippetQuery, GetProfileSnippetQueryVariables>(GetProfileSnippetDocument, baseOptions);
      }
export function useGetProfileSnippetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileSnippetQuery, GetProfileSnippetQueryVariables>) {
          return Apollo.useLazyQuery<GetProfileSnippetQuery, GetProfileSnippetQueryVariables>(GetProfileSnippetDocument, baseOptions);
        }
export type GetProfileSnippetQueryHookResult = ReturnType<typeof useGetProfileSnippetQuery>;
export type GetProfileSnippetLazyQueryHookResult = ReturnType<typeof useGetProfileSnippetLazyQuery>;
export type GetProfileSnippetQueryResult = Apollo.QueryResult<GetProfileSnippetQuery, GetProfileSnippetQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...AccountFields
    ...SimplifiedProfileFields
  }
}
    ${AccountFieldsFragmentDoc}
${SimplifiedProfileFieldsFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MeAccountDocument = gql`
    query MeAccount {
  me {
    ...AccountFields
  }
}
    ${AccountFieldsFragmentDoc}`;

/**
 * __useMeAccountQuery__
 *
 * To run a query within a React component, call `useMeAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeAccountQuery(baseOptions?: Apollo.QueryHookOptions<MeAccountQuery, MeAccountQueryVariables>) {
        return Apollo.useQuery<MeAccountQuery, MeAccountQueryVariables>(MeAccountDocument, baseOptions);
      }
export function useMeAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeAccountQuery, MeAccountQueryVariables>) {
          return Apollo.useLazyQuery<MeAccountQuery, MeAccountQueryVariables>(MeAccountDocument, baseOptions);
        }
export type MeAccountQueryHookResult = ReturnType<typeof useMeAccountQuery>;
export type MeAccountLazyQueryHookResult = ReturnType<typeof useMeAccountLazyQuery>;
export type MeAccountQueryResult = Apollo.QueryResult<MeAccountQuery, MeAccountQueryVariables>;
export const MeProfileDocument = gql`
    query MeProfile {
  me {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;

/**
 * __useMeProfileQuery__
 *
 * To run a query within a React component, call `useMeProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeProfileQuery(baseOptions?: Apollo.QueryHookOptions<MeProfileQuery, MeProfileQueryVariables>) {
        return Apollo.useQuery<MeProfileQuery, MeProfileQueryVariables>(MeProfileDocument, baseOptions);
      }
export function useMeProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeProfileQuery, MeProfileQueryVariables>) {
          return Apollo.useLazyQuery<MeProfileQuery, MeProfileQueryVariables>(MeProfileDocument, baseOptions);
        }
export type MeProfileQueryHookResult = ReturnType<typeof useMeProfileQuery>;
export type MeProfileLazyQueryHookResult = ReturnType<typeof useMeProfileLazyQuery>;
export type MeProfileQueryResult = Apollo.QueryResult<MeProfileQuery, MeProfileQueryVariables>;