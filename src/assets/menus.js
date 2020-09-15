export default [
	{
		name: 'Dashboard',
		url: '/dashboard',
		icon: 'apple-airplay'
	},
	{
		name: 'Ecommerce',
		icon: 'bell-outline',
		children: [
			{
				name: 'Product',
				url: '/ecommerce/product'
            },
            {
				name: 'Customer',
				url: '/ecommerce/customer'
			}
		]
	},
	{
		name: 'Projects',
		icon: 'briefcase-outline',
		children: [
			{
				name: 'List',
				url: '/ecommerce/product'
            },
            {
				name: 'Detail',
				url: '/ecommerce/customer'
			}
		]
	}
];
