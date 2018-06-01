// @flow
import hello from 'hellojs';

hello.init({
  github: 'b982580b006422863c8b',
  facebook: '2044163455797433',
  google: '139098807676-l1t6m8ofj4c65ps7ai39ms6vhcogho3j.apps.googleusercontent.com',
}, {
  redirect_uri: 'callback',
});

export const github = (): Promise<*> => hello.login('github');
export const facebook = (): Promise<*> => hello.login('facebook', { scope: 'email, public_profile' });
export const google = (): Promise<*> => hello.login('google', {
  scope: 'https://www.googleapis.com/auth/userinfo.email',
});
