import { ResponseComposition, RestContext, RestRequest } from 'msw';

export async function SignIn(_1: RestRequest, res: ResponseComposition, ctx: RestContext) {
  return res(ctx.status(200));
}

export async function SignUp(_1: RestRequest, res: ResponseComposition, ctx: RestContext) {
  return res(ctx.status(200));
}
