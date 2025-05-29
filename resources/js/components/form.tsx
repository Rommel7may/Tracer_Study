"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  studentNumber: z.string().min(5, { message: "Student number is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  givenName: z.string().min(2, { message: "Given name is required." }),
  middleName: z.string().optional(),
  presentStreet: z.string().min(2, { message: "Street address is required." }),
  presentCity: z.string().min(2, { message: "City is required." }),
  presentState: z.string().min(2, { message: "State/Province is required." }),
  activeEmail: z.string().email({ message: "Invalid active email address." }),
  campus: z.enum(["Main Campus", "City Campus", "Online Campus"], { required_error: "Campus is required." }),
  programTaken: z.enum(["BSIT", "BSCS", "BSECE", "BSCE", "BSBA", "BSA", "BSED"], { required_error: "Program taken is required." }),
  yearGraduated: z.enum(["2022", "2023", "2024", "2025"], { required_error: "Year graduated is required." }),
  employmentStatus: z.enum(["Employed", "Unemployed", "Self-employed", "Student", "Retired", "Under-employed"], { required_error: "Employment status is required." }),
  workLocation: z.enum(["Local", "Abroad"], { required_error: "Work location is required." }),
  workAligned: z.enum(["Yes", "No"], { required_error: "Please select Yes or No." }),
  agree: z.boolean().refine(val => val === true, { message: "You must agree." }),
})

type FormValues = z.infer<typeof formSchema>

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
}

export function AlumniForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentNumber: "",
      email: "",
      lastName: "",
      givenName: "",
      middleName: "",
      presentStreet: "",
      presentCity: "",
      presentState: "",
      activeEmail: "",
      campus: "Main Campus",
      programTaken: "BSIT",
      yearGraduated: "2024",
      employmentStatus: "Employed",
      workLocation: "Local",
      workAligned: "Yes",
      agree: false,
    },
  })

  function onSubmit(values: FormValues) {
    console.log("Submitted:", values)
  }

  const textFields = [
    { name: "studentNumber" as const, label: "Student Number", placeholder: "e.g. 2022301056", type: "text" },
    { name: "email" as const, label: "Email Address", placeholder: "john@example.com", type: "email" },
    { name: "lastName" as const, label: "Last Name", placeholder: "Doe", type: "text" },
    { name: "givenName" as const, label: "Given Name", placeholder: "John", type: "text" },
    { name: "middleName" as const, label: "Middle Name", placeholder: "M", type: "text" },
    { name: "presentStreet" as const, label: "Street Address", placeholder: "123 Main St", type: "text" },
    { name: "presentCity" as const, label: "City", placeholder: "Metro City", type: "text" },
    { name: "presentState" as const, label: "State/Province", placeholder: "State/Province", type: "text" },
    { name: "activeEmail" as const, label: "Active Email Address", placeholder: "active@example.com", type: "email" },
  ]

  return (
    <motion.div initial="hidden" animate="visible" variants={{}}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6 md:grid-cols-2">
          {textFields.map((f, idx) => (
            <FormField
              key={f.name}
              control={form.control}
              name={f.name}
              render={({ field }) => (
                <motion.div custom={idx} variants={fade} initial="hidden" animate="visible">
                  <FormItem>
                    <FormLabel>{f.label}</FormLabel>
                    <FormControl>
                      <Input type={f.type} placeholder={f.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </motion.div>
              )}
            />
          ))}

          {/* Program Taken Select */}
          <motion.div custom={textFields.length} variants={fade} initial="hidden" animate="visible">
            <FormField
              control={form.control}
              name="programTaken"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Program Taken</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Program Taken" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BSIT">BSIT</SelectItem>
                        <SelectItem value="BSCS">BSCS</SelectItem>
                        <SelectItem value="BSECE">BSECE</SelectItem>
                        <SelectItem value="BSCE">BSCE</SelectItem>
                        <SelectItem value="BSBA">BSBA</SelectItem>
                        <SelectItem value="BSA">BSA</SelectItem>
                        <SelectItem value="BSED">BSED</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Year Graduated Select */}
          <motion.div custom={textFields.length + 1} variants={fade} initial="hidden" animate="visible">
            <FormField
              control={form.control}
              name="yearGraduated"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year Graduated</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year Graduated" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Campus Select */}
          <motion.div custom={textFields.length + 2} variants={fade} initial="hidden" animate="visible">
            <FormField
              control={form.control}
              name="campus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campus</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Campus" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Main Campus">Lubao campus</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Employment Status Select */}
          <motion.div custom={textFields.length + 3} variants={fade} initial="hidden" animate="visible">
            <FormField
              control={form.control}
              name="employmentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employment Status</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Employment Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Employed">Employed</SelectItem>
                        <SelectItem value="Unemployed">Unemployed</SelectItem>
                        <SelectItem value="Self-employed">Self-employed</SelectItem>
                        <SelectItem value="Under-employed">Under-employed</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Work Location Select */}
          <motion.div custom={textFields.length + 4} variants={fade} initial="hidden" animate="visible">
            <FormField
              control={form.control}
              name="workLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Location</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Work Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Local">Local</SelectItem>
                        <SelectItem value="Abroad">Abroad</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* New Question: Work Aligned with Degree */}
          <motion.div custom={textFields.length + 5} variants={fade} initial="hidden" animate="visible" className="md:col-span-2">
            <FormField
              control={form.control}
              name="workAligned"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Is your work aligned with your degree?</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Yes or No" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Agree Checkbox */}
          <motion.div custom={textFields.length + 6} variants={fade} initial="hidden" animate="visible" className="md:col-span-2">
            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  agree<FormLabel className="font-normal">Please reflect your consent for the processing of your data by clicking "Check box Agree."</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div custom={textFields.length + 7} variants={fade} initial="hidden" animate="visible" className="md:col-span-2">
            <Button type="submit" className="w-full">Submit</Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  )
}
