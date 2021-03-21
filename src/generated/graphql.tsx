import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type Query = {
  __typename?: 'Query';
  DisposableEvents?: Maybe<DisposableEventTypeConnection>;
  /** The ID of the object */
  DisposableEvent?: Maybe<DisposableEventType>;
  TimeEvents?: Maybe<TimeEventTypeConnection>;
  /** The ID of the object */
  TimeEvent?: Maybe<TimeEventType>;
  StaffEvents?: Maybe<StaffEventTypeConnection>;
  /** The ID of the object */
  StaffEvent?: Maybe<StaffEventType>;
  Users?: Maybe<UserTypeConnection>;
  /** The ID of the object */
  User?: Maybe<UserType>;
};


export type QueryDisposableEventsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user_Id?: Maybe<Scalars['ID']>;
};


export type QueryDisposableEventArgs = {
  id: Scalars['ID'];
};


export type QueryTimeEventsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user_Id?: Maybe<Scalars['ID']>;
};


export type QueryTimeEventArgs = {
  id: Scalars['ID'];
};


export type QueryStaffEventsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user_Id?: Maybe<Scalars['ID']>;
};


export type QueryStaffEventArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type DisposableEventTypeConnection = {
  __typename?: 'DisposableEventTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DisposableEventTypeEdge>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** A Relay edge containing a `DisposableEventType` and its cursor. */
export type DisposableEventTypeEdge = {
  __typename?: 'DisposableEventTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<DisposableEventType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DisposableEventType = Node & {
  __typename?: 'DisposableEventType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  checked: Scalars['Boolean'];
  deadline: Scalars['DateTime'];
  comment: Scalars['String'];
  used: Scalars['Boolean'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type UserType = Node & {
  __typename?: 'UserType';
  /** The ID of the object. */
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  disposableeventSet: DisposableEventTypeConnection;
  timeeventSet: TimeEventTypeConnection;
  staffeventSet: StaffEventTypeConnection;
};


export type UserTypeDisposableeventSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user_Id?: Maybe<Scalars['ID']>;
};


export type UserTypeTimeeventSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user_Id?: Maybe<Scalars['ID']>;
};


export type UserTypeStaffeventSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user_Id?: Maybe<Scalars['ID']>;
};


export type TimeEventTypeConnection = {
  __typename?: 'TimeEventTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TimeEventTypeEdge>>;
};

/** A Relay edge containing a `TimeEventType` and its cursor. */
export type TimeEventTypeEdge = {
  __typename?: 'TimeEventTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TimeEventType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TimeEventType = Node & {
  __typename?: 'TimeEventType';
  user: UserType;
  checked: Scalars['Boolean'];
  deadline: Scalars['DateTime'];
  comment: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type StaffEventTypeConnection = {
  __typename?: 'StaffEventTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StaffEventTypeEdge>>;
};

/** A Relay edge containing a `StaffEventType` and its cursor. */
export type StaffEventTypeEdge = {
  __typename?: 'StaffEventTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<StaffEventType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StaffEventType = Node & {
  __typename?: 'StaffEventType';
  user: UserType;
  checked: Scalars['Boolean'];
  deadline: Scalars['DateTime'];
  comment: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  timeTable: Scalars['String'];
};

export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserTypeEdge>>;
};

/** A Relay edge containing a `UserType` and its cursor. */
export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTimeEvent?: Maybe<CreateTimeEvent>;
  deleteTimeEvent?: Maybe<DeleteTimeEvent>;
  changeTimeEventStatus?: Maybe<ChangeTimeEventStatus>;
  createDisposableEvent?: Maybe<CreateDisposableEvent>;
  changeDispEventStatus?: Maybe<ChangeDispEventStatus>;
  createStaffEvent?: Maybe<CreateStaffEvent>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  registration?: Maybe<RegUser>;
  login?: Maybe<Login>;
};


export type MutationCreateTimeEventArgs = {
  comment?: Maybe<Scalars['String']>;
  deadline?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteTimeEventArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationChangeTimeEventStatusArgs = {
  deadline?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateDisposableEventArgs = {
  comment?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationChangeDispEventStatusArgs = {
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['Boolean']>;
  used?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateStaffEventArgs = {
  comment?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegistrationArgs = {
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type CreateTimeEvent = {
  __typename?: 'CreateTimeEvent';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DeleteTimeEvent = {
  __typename?: 'DeleteTimeEvent';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeTimeEventStatus = {
  __typename?: 'ChangeTimeEventStatus';
  timeEvent?: Maybe<TimeEventType>;
};

export type CreateDisposableEvent = {
  __typename?: 'CreateDisposableEvent';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeDispEventStatus = {
  __typename?: 'ChangeDispEventStatus';
  dispEvent?: Maybe<DisposableEventType>;
};

export type CreateStaffEvent = {
  __typename?: 'CreateStaffEvent';
  ok?: Maybe<Scalars['Boolean']>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};


export type RegUser = {
  __typename?: 'RegUser';
  user?: Maybe<UserType>;
};

export type Login = {
  __typename?: 'Login';
  user?: Maybe<UserType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type GetTimeEventQueryVariables = Exact<{
  timeEventId: Scalars['ID'];
}>;


export type GetTimeEventQuery = { __typename?: 'Query', TimeEvent?: Maybe<{ __typename?: 'TimeEventType', comment: string, checked: boolean, deadline: any }> };

export type GetDispInfoQueryVariables = Exact<{
  disp_id: Scalars['ID'];
}>;


export type GetDispInfoQuery = { __typename?: 'Query', DisposableEvent?: Maybe<{ __typename?: 'DisposableEventType', comment: string, used: boolean, checked: boolean }> };

export type AllTimeEventQueryVariables = Exact<{
  user_id: Scalars['ID'];
}>;


export type AllTimeEventQuery = { __typename?: 'Query', User?: Maybe<{ __typename?: 'UserType', timeeventSet: { __typename?: 'TimeEventTypeConnection', edges: Array<Maybe<{ __typename?: 'TimeEventTypeEdge', node?: Maybe<{ __typename?: 'TimeEventType', checked: boolean, id: string }> }>> }, disposableeventSet: { __typename?: 'DisposableEventTypeConnection', edges: Array<Maybe<{ __typename?: 'DisposableEventTypeEdge', node?: Maybe<{ __typename?: 'DisposableEventType', checked: boolean, id: string }> }>> }, staffeventSet: { __typename?: 'StaffEventTypeConnection', edges: Array<Maybe<{ __typename?: 'StaffEventTypeEdge', node?: Maybe<{ __typename?: 'StaffEventType', checked: boolean, id: string }> }>> } }> };

export type RegistrationMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type RegistrationMutation = { __typename?: 'Mutation', registration?: Maybe<{ __typename?: 'RegUser', user?: Maybe<{ __typename?: 'UserType', username: string, id: string }> }> };

export type LoginMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: Maybe<{ __typename?: 'Login', ok?: Maybe<boolean>, user?: Maybe<{ __typename?: 'UserType', id: string }> }> };

export type CreateTimeEventMutationVariables = Exact<{
  user_id: Scalars['ID'];
  comment?: Maybe<Scalars['String']>;
}>;


export type CreateTimeEventMutation = { __typename?: 'Mutation', createTimeEvent?: Maybe<{ __typename?: 'CreateTimeEvent', ok?: Maybe<boolean> }> };

export type CreateDispEventMutationVariables = Exact<{
  user_id: Scalars['ID'];
  comment?: Maybe<Scalars['String']>;
}>;


export type CreateDispEventMutation = { __typename?: 'Mutation', createDisposableEvent?: Maybe<{ __typename?: 'CreateDisposableEvent', ok?: Maybe<boolean> }> };

export type CreateStaffMutationVariables = Exact<{
  user_id: Scalars['ID'];
  comment?: Maybe<Scalars['String']>;
}>;


export type CreateStaffMutation = { __typename?: 'Mutation', createStaffEvent?: Maybe<{ __typename?: 'CreateStaffEvent', ok?: Maybe<boolean> }> };


export const GetTimeEventDocument = gql`
    query getTimeEvent($timeEventId: ID!) {
  TimeEvent(id: $timeEventId) {
    comment
    checked
    deadline
  }
}
    `;

/**
 * __useGetTimeEventQuery__
 *
 * To run a query within a React component, call `useGetTimeEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTimeEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTimeEventQuery({
 *   variables: {
 *      timeEventId: // value for 'timeEventId'
 *   },
 * });
 */
export function useGetTimeEventQuery(baseOptions: Apollo.QueryHookOptions<GetTimeEventQuery, GetTimeEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTimeEventQuery, GetTimeEventQueryVariables>(GetTimeEventDocument, options);
      }
export function useGetTimeEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTimeEventQuery, GetTimeEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTimeEventQuery, GetTimeEventQueryVariables>(GetTimeEventDocument, options);
        }
export type GetTimeEventQueryHookResult = ReturnType<typeof useGetTimeEventQuery>;
export type GetTimeEventLazyQueryHookResult = ReturnType<typeof useGetTimeEventLazyQuery>;
export type GetTimeEventQueryResult = Apollo.QueryResult<GetTimeEventQuery, GetTimeEventQueryVariables>;
export const GetDispInfoDocument = gql`
    query getDispInfo($disp_id: ID!) {
  DisposableEvent(id: $disp_id) {
    comment
    used
    checked
  }
}
    `;

/**
 * __useGetDispInfoQuery__
 *
 * To run a query within a React component, call `useGetDispInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDispInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDispInfoQuery({
 *   variables: {
 *      disp_id: // value for 'disp_id'
 *   },
 * });
 */
export function useGetDispInfoQuery(baseOptions: Apollo.QueryHookOptions<GetDispInfoQuery, GetDispInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDispInfoQuery, GetDispInfoQueryVariables>(GetDispInfoDocument, options);
      }
export function useGetDispInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDispInfoQuery, GetDispInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDispInfoQuery, GetDispInfoQueryVariables>(GetDispInfoDocument, options);
        }
export type GetDispInfoQueryHookResult = ReturnType<typeof useGetDispInfoQuery>;
export type GetDispInfoLazyQueryHookResult = ReturnType<typeof useGetDispInfoLazyQuery>;
export type GetDispInfoQueryResult = Apollo.QueryResult<GetDispInfoQuery, GetDispInfoQueryVariables>;
export const AllTimeEventDocument = gql`
    query allTimeEvent($user_id: ID!) {
  User(id: $user_id) {
    timeeventSet {
      edges {
        node {
          checked
          id
        }
      }
    }
    disposableeventSet {
      edges {
        node {
          checked
          id
        }
      }
    }
    staffeventSet {
      edges {
        node {
          checked
          id
        }
      }
    }
  }
}
    `;

/**
 * __useAllTimeEventQuery__
 *
 * To run a query within a React component, call `useAllTimeEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTimeEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTimeEventQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAllTimeEventQuery(baseOptions: Apollo.QueryHookOptions<AllTimeEventQuery, AllTimeEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTimeEventQuery, AllTimeEventQueryVariables>(AllTimeEventDocument, options);
      }
export function useAllTimeEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTimeEventQuery, AllTimeEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTimeEventQuery, AllTimeEventQueryVariables>(AllTimeEventDocument, options);
        }
export type AllTimeEventQueryHookResult = ReturnType<typeof useAllTimeEventQuery>;
export type AllTimeEventLazyQueryHookResult = ReturnType<typeof useAllTimeEventLazyQuery>;
export type AllTimeEventQueryResult = Apollo.QueryResult<AllTimeEventQuery, AllTimeEventQueryVariables>;
export const RegistrationDocument = gql`
    mutation registration($username: String, $password: String) {
  registration(password: $password, username: $username) {
    user {
      username
      id
    }
  }
}
    `;
export type RegistrationMutationFn = Apollo.MutationFunction<RegistrationMutation, RegistrationMutationVariables>;

/**
 * __useRegistrationMutation__
 *
 * To run a mutation, you first call `useRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registrationMutation, { data, loading, error }] = useRegistrationMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<RegistrationMutation, RegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegistrationMutation, RegistrationMutationVariables>(RegistrationDocument, options);
      }
export type RegistrationMutationHookResult = ReturnType<typeof useRegistrationMutation>;
export type RegistrationMutationResult = Apollo.MutationResult<RegistrationMutation>;
export type RegistrationMutationOptions = Apollo.BaseMutationOptions<RegistrationMutation, RegistrationMutationVariables>;
export const LoginDocument = gql`
    mutation login($username: String, $password: String) {
  login(password: $password, username: $username) {
    user {
      id
    }
    ok
  }
}
    `;
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
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateTimeEventDocument = gql`
    mutation createTimeEvent($user_id: ID!, $comment: String) {
  createTimeEvent(userId: $user_id, comment: $comment) {
    ok
  }
}
    `;
export type CreateTimeEventMutationFn = Apollo.MutationFunction<CreateTimeEventMutation, CreateTimeEventMutationVariables>;

/**
 * __useCreateTimeEventMutation__
 *
 * To run a mutation, you first call `useCreateTimeEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTimeEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTimeEventMutation, { data, loading, error }] = useCreateTimeEventMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateTimeEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateTimeEventMutation, CreateTimeEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTimeEventMutation, CreateTimeEventMutationVariables>(CreateTimeEventDocument, options);
      }
export type CreateTimeEventMutationHookResult = ReturnType<typeof useCreateTimeEventMutation>;
export type CreateTimeEventMutationResult = Apollo.MutationResult<CreateTimeEventMutation>;
export type CreateTimeEventMutationOptions = Apollo.BaseMutationOptions<CreateTimeEventMutation, CreateTimeEventMutationVariables>;
export const CreateDispEventDocument = gql`
    mutation createDispEvent($user_id: ID!, $comment: String) {
  createDisposableEvent(userId: $user_id, comment: $comment) {
    ok
  }
}
    `;
export type CreateDispEventMutationFn = Apollo.MutationFunction<CreateDispEventMutation, CreateDispEventMutationVariables>;

/**
 * __useCreateDispEventMutation__
 *
 * To run a mutation, you first call `useCreateDispEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDispEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDispEventMutation, { data, loading, error }] = useCreateDispEventMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateDispEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateDispEventMutation, CreateDispEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDispEventMutation, CreateDispEventMutationVariables>(CreateDispEventDocument, options);
      }
export type CreateDispEventMutationHookResult = ReturnType<typeof useCreateDispEventMutation>;
export type CreateDispEventMutationResult = Apollo.MutationResult<CreateDispEventMutation>;
export type CreateDispEventMutationOptions = Apollo.BaseMutationOptions<CreateDispEventMutation, CreateDispEventMutationVariables>;
export const CreateStaffDocument = gql`
    mutation createStaff($user_id: ID!, $comment: String) {
  createStaffEvent(comment: $comment, userId: $user_id) {
    ok
  }
}
    `;
export type CreateStaffMutationFn = Apollo.MutationFunction<CreateStaffMutation, CreateStaffMutationVariables>;

/**
 * __useCreateStaffMutation__
 *
 * To run a mutation, you first call `useCreateStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStaffMutation, { data, loading, error }] = useCreateStaffMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateStaffMutation(baseOptions?: Apollo.MutationHookOptions<CreateStaffMutation, CreateStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStaffMutation, CreateStaffMutationVariables>(CreateStaffDocument, options);
      }
export type CreateStaffMutationHookResult = ReturnType<typeof useCreateStaffMutation>;
export type CreateStaffMutationResult = Apollo.MutationResult<CreateStaffMutation>;
export type CreateStaffMutationOptions = Apollo.BaseMutationOptions<CreateStaffMutation, CreateStaffMutationVariables>;