import { v4 as uuid } from '@lukeed/uuid';

export const handle = async ({ event, resolve }) => {
	if (await event.cookies.get('userid') == undefined) {
		await event.cookies.set('userid', uuid());
	}
	event.locals.userid = await event.cookies.get('userid');
	const response = await resolve(event);
	return response;
};

/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error, event }) {
	return {
	  message: 'Whoops!',
	  code: error?.code ?? 'UNKNOWN'
	};
  }