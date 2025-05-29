import { Breadcrumbs } from '@/components/breadcrumbs'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types'

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
  return (
    <header
      className="flex h-16 shrink-0 items-center gap-2 border-b px-6 transition-[width,height] ease-linear 
                 border-[hsl(0,100%,85%)] bg-[hsl(0,100%,94%)] hover:bg-[hsl(0,89%,89%)]
                 dark:border-[hsl(0,90%,20%)] dark:bg-[hsl(0,90%,6%)] dark:hover:bg-[hsl(0,90%,10%)] 
                 group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4"
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
    </header>
  )
}
