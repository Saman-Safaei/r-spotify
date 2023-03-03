import { ResponseComposition, RestContext, RestRequest } from 'msw';
import FakeUsers from '../FakeData/Users';

// --------------------------------------- Sign in ------------------------------------------------

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

// --------------------------------------- Sign up ------------------------------------------------

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

// -------------------------------------- User Info -----------------------------------------------

export async function getUserInfo(req: RestRequest, res: ResponseComposition, ctx: RestContext) {
  const requestBody = await req.json<GetUserInfoBody>();

  if (!requestBody.token) return res(ctx.status(403));

  const fakeUser = FakeUsers.find(fakeUser => fakeUser.id === +requestBody.token);

  if (!fakeUser) return res(ctx.status(403));

  return res(
    ctx.status(200),
    ctx.json({
      username: fakeUser.username,
      email: fakeUser.email,
    })
  );
}
