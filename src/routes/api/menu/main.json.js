import { drupalMenu } from '$lib/drupal';

export async function get() {
	let main_items = [];
	await drupalMenu.getMenu('main').then(treeData => {
		main_items = treeData.map((obj) => {
			return {
				href: obj.href,
				label: obj.name,
				title: ''
			};
		});
	});
	return {
		body: main_items
	};
}