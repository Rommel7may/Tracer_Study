import { JobPostForm } from '@/components/jobpost';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Job Post',
        href: '/jobpost',
    },
];

export default function Jobpost() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Jobpost" />
            <div>
               <JobPostForm/>
            </div>
            
        </AppLayout>
    );
}
