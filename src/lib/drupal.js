import { Drupal } from 'drupal-js-sdk';
import { DrupalAuth }  from '@drupal-js-sdk/auth';
import { DrupalMenu }  from '@drupal-js-sdk/menu';
import { StorageInMemory } from '@drupal-js-sdk/storage';

export let auth;
export let drupalMenu;
export let sdk;

const config = {
	baseURL: 'http://drupal-js-sdk-demo-backend.ddev.site' //import.meta.env.VITE_DRUPAL_BASE_URL
};

try {
	sdk = new Drupal(config);
	// Awailable in Node and Browser environments.
	const sessionStorage = new StorageInMemory();
	sdk.setSessionService(sessionStorage);
	auth = new DrupalAuth(sdk);
	drupalMenu = new DrupalMenu(sdk);
	console.log('Drupal JS SDK initialized successfully.');
}
catch (e) {
	console.log(e);
	throw e;
}
