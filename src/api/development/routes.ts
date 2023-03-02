import { rest, RestHandler } from 'msw';
import url from "./Utilities/filename";
import {SignIn, SignUp} from "./Controllers/user";

const handlers: RestHandler[] = [
    rest.post(url`/auth/signin`, SignIn),
    rest.post(url`/auth/signup`, SignUp),
];

export default handlers;