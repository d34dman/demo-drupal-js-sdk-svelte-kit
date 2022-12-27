import { error, json } from '@sveltejs/kit'
import { auth } from '$lib/server/drupal';

/** @type {import('../$types').RequestHandler} */
export async function POST({ request, params }) {
  const slug = params.slug;
  try {
    switch (slug) {
      case 'login' : 
        const { username, password } = await request.json();
        let data = {
          success: false,
          name: ''
        };
        let loginError = false;
        const foo = await auth
          .login(username, password)
          .then(
            (response) => {
              data.success = true;
              data.name = response.data.current_user.name;
            },
            (err) => {
              loginError = err.response.data.message;
            }
          )
          .catch((err) => {
            loginError = err.response.data.message;
          });
          console.log(foo);
          if (loginError) {
            return json({
              success: false,
              message: loginError
            });
          }
          return json(data);
        break;
      case 'logout':
        break;
      case 'register':
        break;
      case 'password-reset':
        break;
      default:
        throw error(404, 'Not found');
    }
  }
  catch (e) {
    throw error(503, 'Server Error');
  }
  return json(true);
}