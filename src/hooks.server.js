import { v4 as uuid } from '@lukeed/uuid';

export const handle = async ({ event, resolve }) => {
	const request = event.request;
	console.log();
	if (await event.cookies.get('userid') == undefined) {
		await event.cookies.set('userid', uuid());
	}

	event.locals.userid = await event.cookies.get('userid');
	const response = await resolve(event);
	return response;
};
