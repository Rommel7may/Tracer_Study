import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Component } from '@/components/chart';
import { Componentss } from '@/components/chart2';
import { Job } from '@/components/joblocation';
import { Gender } from '@/components/genderchat';
import { Jobalign } from '@/components/align';
import { Dropdown } from '@/components/card';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data analytics',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
    <Head title="Data analytics" />
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                  <div className="flex justify-end m-2.5"><Dropdown/></div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
                <Jobalign/>
            </div>
            <div>
                <Job/>
            </div>
            <div>
                <Gender/>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div className="relative overflow-hidden rounded-xl p-4 min-h-[300px] md:min-h-[350px]">
        <Component />
    </div>
    <div className="relative overflow-hidden rounded-xl p-4 min-h-[300px] md:min-h-[350px]">
        <Componentss />
    </div>
</div>

    </div>
</AppLayout>

    );
}

