import { ResponseComposition, RestContext, RestRequest } from 'msw';
import FakeUsers from '../FakeData/Users';
import type { MockUser } from '../../../types/MockUser';
import type { SignUpBody } from '../../../types/MockSIgnUpBody';
import type { SignInBody } from '../../../types/MockSignInBody';

export async function SignIn(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const requestBody = await req.json<SignInBody>();
  const fakeUser = FakeUsers.find(fakeUser => fakeUser.username === requestBody.username);

  if (!fakeUser) {
    return res(ctx.status(404));
  }
  if (!(fakeUser.password === requestBody.password)) {
    return res(ctx.status(403));
  }

  return res(ctx.status(200), ctx.json({ token: fakeUser.id }));
}

export async function SignUp(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const requestBody = await req.json<SignUpBody>();

  const userID = Math.floor(Math.random() * 100000);

  const user: MockUser = {
    id: userID,
    email: requestBody.email,
    playlists: [],
    username: requestBody.username,
    firstname: 'John',
    lastname: 'Doe',
    password: requestBody.password,
  };

  FakeUsers.push(user);

  return res(ctx.status(200), ctx.json({ token: userID }));
}

export async function getUserInfo(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const requestBody = await req.json<{ token: number }>();

  const fakeUser = FakeUsers.find(fakeUser => fakeUser.id === requestBody.token);

  if (!fakeUser) return res(ctx.status(403));

  return res(
    ctx.status(200),
    ctx.json({
      username: fakeUser.username,
      email: fakeUser.email,
    })
  );
}
