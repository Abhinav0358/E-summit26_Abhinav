import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'contact' },
	{
		path: 'contact',
		loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
	},
	{ path: '**', redirectTo: 'contact' }
];
