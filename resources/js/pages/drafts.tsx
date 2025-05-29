import { Dropdown, SectionCards, SectionCards1, SectionCards2, SectionCards3, SectionCards4, SectionCards5 } from '@/components/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Component } from '@/components/chart';
import { Drafts } from '@/components/drafts';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Drafts',
        href: '/drafts',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Drafts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <Drafts/>
                </div>
            </div>
        </AppLayout>
    );
}


