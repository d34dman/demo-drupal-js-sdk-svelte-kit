import { Drupal } from 'drupal-js-sdk';
import { DrupalAuth } from '@drupal-js-sdk/auth';
import { DrupalMenu } from '@drupal-js-sdk/menu';
import { StorageInMemory } from '@drupal-js-sdk/storage';

const config = {
	baseURL: import.meta.env.VITE_DRUPAL_BASE_URL
};

export const sdk = new Drupal(config);

sdk.setSessionService(new StorageInMemory());
export const auth = new DrupalAuth(sdk);
export const menu = new DrupalMenu(sdk);
export default sdk