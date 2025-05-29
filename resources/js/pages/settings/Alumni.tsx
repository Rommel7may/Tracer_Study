import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Alumni',
        href: '/alumni',
    },
];

export default function Alumni() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="alumni" />
            <p className="text-gray-600 text-sm mt-4">This is the alumni index page.</p>
        </AppLayout>
    );
}
