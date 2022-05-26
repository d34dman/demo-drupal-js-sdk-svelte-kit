import { menu } from '$lib/drupal';


export async function get({ params }) {
    let main_items = [];
    await menu.getMenu(params.id)
    .then(treeData => {
		main_items = treeData.map((obj) => {
			return {
				href: obj.href,
				label: obj.name,
				title: ''
			};
		});
	})
	.catch(err => {
        console.log(err)
    }); 
    
    return {
        body: main_items
    };
}
