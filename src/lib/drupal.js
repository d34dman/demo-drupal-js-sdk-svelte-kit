import { Drupal, DrupalAuth, DrupalMenu } from 'drupal-js-sdk';

const config = {
	baseURL: import.meta.env.VITE_DRUPAL_BASE_URL
};

export const drupal = new Drupal(config);
export const auth = new DrupalAuth(drupal);
export const drupalMenu = new DrupalMenu(drupal);
export default drupal;