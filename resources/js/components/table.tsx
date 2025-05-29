"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dropdown } from "./card";

// ────────────────────────────────────────────────────────────
// 1️⃣  DATA & TYPE
// ────────────────────────────────────────────────────────────
export type Alumni = {
  timestamp: string;
  email: string;
  lastName: string;
  givenName: string;
  middleInitial: string;
  presentAddress: string;
  activeEmail: string;
  contactNumber: string;
  campus: string;
  program: string;
  yearOfGraduation: string;
  college: string;
  employmentStatus: string;
  pursuingStudies: string;
  sector: string;
  workLocation: string;
  employerClassification: string;
};

const data: Alumni[] = [
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Aquino",
    "givenName": "Marianne",
    "middleInitial": "Q",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Data Analytics",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Buenaventura",
    "givenName": "Armand",
    "middleInitial": "J",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Computer Networking",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Castillo",
    "givenName": "Bianca",
    "middleInitial": "P",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Artificial Intelligence",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Diaz",
    "givenName": "Clarence",
    "middleInitial": "S",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Information Assurance",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Estrada",
    "givenName": "Daphne",
    "middleInitial": "U",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Interactive Media",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Fernandez",
    "givenName": "Enrico",
    "middleInitial": "B",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Mechatronics Engineering",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Gonzales",
    "givenName": "Felicia",
    "middleInitial": "H",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Cloud Computing",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Hernandez",
    "givenName": "Gabriel",
    "middleInitial": "K",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Computer Graphics",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Ilagan",
    "givenName": "Helena",
    "middleInitial": "N",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Digital Forensics",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Jimenez",
    "givenName": "Ismael",
    "middleInitial": "R",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Virtual Reality Development",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Santos",
    "givenName": "Carlo",
    "middleInitial": "M",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Information Technology",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Reyes",
    "givenName": "Angela",
    "middleInitial": "L",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Computer Science",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Cruz",
    "givenName": "Miguel",
    "middleInitial": "R",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Software Engineering",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Garcia",
    "givenName": "Patricia",
    "middleInitial": "T",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Information Systems",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
  {
    "timestamp": "2025-05-18 10:31:00",
    "email": "juan.dela.cruz@example.com",
    "lastName": "Flores",
    "givenName": "Joshua",
    "middleInitial": "V",
    "presentAddress": "San Fernando, Pampanga",
    "activeEmail": "juansdcruz@gmail.com",
    "contactNumber": "+63 912 345 6789",
    "campus": "Main",
    "program": "BS Computer Engineering",
    "yearOfGraduation": "2024",
    "college": "Engineering & Architecture",
    "employmentStatus": "Employed – Permanent",
    "pursuingStudies": "No",
    "sector": "IT / Software",
    "workLocation": "Clark, Pampanga",
    "employerClassification": "Private – Domestic"
  },
];


export const columns: ColumnDef<Alumni>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
        aria-label="Select all rows"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(v) => row.toggleSelected(!!v)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Last Name <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("lastName")}</div>,
  },
  {
    accessorKey: "givenName",
    header: "Given Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("givenName")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "program",
    header: "Program",
  },
  {
    accessorKey: "yearOfGraduation",
    header: "Year Graduated",
    cell: ({ row }) => <div className="text-center">{row.getValue("yearOfGraduation")}</div>,
  },
  {
    accessorKey: "employmentStatus",
    header: "Employment Status",
    cell: ({ row }) => <div>{row.getValue("employmentStatus")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const alumni = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(alumni.email)}>
              Copy email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// ────────────────────────────────────────────────────────────
// 3️⃣  MAIN COMPONENT
// ────────────────────────────────────────────────────────────
export default function AlumniDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
  });

  return (
    <div className="w-full">
      {/* 🔍 FILTER */}
      <div className="flex items-center py-4 gap-2 flex-wrap">
        <Input
          placeholder="Search email…"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(e) => table.getColumn("email")?.setFilterValue(e.target.value)}
          className="max-w-sm"
        />
        <Input
          placeholder="Search last name…"
          value={(table.getColumn("lastName")?.getFilterValue() as string) ?? ""}
          onChange={(e) => table.getColumn("lastName")?.setFilterValue(e.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((col) => col.getCanHide())
              .map((col) => (
                <DropdownMenuCheckboxItem
                  key={col.id}
                  className="capitalize"
                  checked={col.getIsVisible()}
                  onCheckedChange={(v) => col.toggleVisibility(!!v)}
                >
                  {col.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex justify-end m-2.5"><Dropdown/></div>
      </div>

      {/* 🗒 TABLE */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="whitespace-nowrap">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="whitespace-nowrap">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* 📄 PAGINATION */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
