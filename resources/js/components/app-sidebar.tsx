import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {LayoutGrid, Users, UsersIcon, ChartNoAxesCombined ,  BookPlus, ExternalLink,FilePen } from 'lucide-react';

import AppLogo from './app-logo';
import { CalendarDemo } from './calendar';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Alumni list',
        href: '/alumni',
        icon: UsersIcon,
    },
    {
        title: 'Data analytics',
        href: '/analytics',
        icon: ChartNoAxesCombined,
    },
    {
        title: 'Alumni form',
        href: '/data',
        icon: BookPlus,
    },
    {
        title: 'Job post',
        href: '/jobpost',
        icon: ExternalLink,
    },
    
];

const footerNavItems: NavItem[] = [
    {  
        title: 'Drafts',
        href: 'drafts',
        icon: FilePen,
    },
    
]
export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
                             <CalendarDemo/>
            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
