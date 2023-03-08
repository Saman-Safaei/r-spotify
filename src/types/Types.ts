/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore

type Nullable<T> = T | null;
type RQueryResponse<T = any> = Promise<{ data: T; statusCode: number }>;
type RQueryData<T = any> = { data: T; statusCode: number };
type EnumType = string | number;