import Dashboard from '../views/Dashboard';
import Product from '../views/Ecommerce/Product';
import Customer from '../views/Ecommerce/Customer';

export default [
	{ path: '/', exact: true, name: 'Home' },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/ecommerce/product', name: 'Product', component: Product },
	{ path: '/ecommerce/customer', name: 'Customer', component: Customer }
];
