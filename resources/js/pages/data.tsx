import { AlumniForm } from '@/components/form'
import AppLayout from '@/layouts/app-layout'
import { type BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Alumni form',
    href: '/data',
  },
]

export default function AlumniPage() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Alumni Form" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto px-4 sm:px-6"
      >
        <Card className="shadow-2xl rounded-3xl">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold tracking-tight text-center">
              Alumni Information Form
            </CardTitle>
          </CardHeader>
          <CardContent className="py-8">
            <AlumniForm />
          </CardContent>
        </Card>
      </motion.div>
    </AppLayout>
  )
}
