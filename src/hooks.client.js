/** @type {import('@sveltejs/kit').HandleClientError} */
export function handleError({ error, event }) {
	console.log('error...');
	console.log(error);
	console.log('event...');
	console.log(event);
	return {
	  message: 'Whoops!',
	  code: error?.code ?? 'UNKNOWN'
	};
  }