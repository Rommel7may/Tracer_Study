import { Dropdown, SectionCards, SectionCards1, SectionCards2, SectionCards3, SectionCards4, SectionCards5 } from '@/components/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Component } from '@/components/chart';
import { DropdownMenuRadioGroupDemo } from '@/components/dropdowm';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                 <div className="flex justify-end text-blue-600"><DropdownMenuRadioGroupDemo/></div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                   
                    <div>
                         <SectionCards/>
                    </div>
                    <div>
                         <SectionCards1/>
                    </div>
                    <div>
                         <SectionCards2/>
                    </div>
                    <div>
                         <SectionCards3/>
                    </div>
                    <div>
                         <SectionCards4/>
                    </div>
                    <div>
                         <SectionCards5/>
                    </div>
                </div>
                <div>
                <Component/>
                </div>
            </div>
        </AppLayout>
    );
}


