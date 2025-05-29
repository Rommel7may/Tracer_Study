import { Input } from "@/components/ui/input";
import { TextareaDemo } from "./textarea";
import { CardWithForm } from "./deploy";

export function JobPostForm() {
  return (
    <div className="max-w-4xl bg-white/90 dark:bg-black/40 rounded-2xl px-6 sm:px-10 py-10 sm:py-14 ml-4 sm:ml-10 
      shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.1)] space-y-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
        Post a Job
      </h2>

      {/* Job Post Title */}
      <section className="space-y-2">
        <label htmlFor="job-title" className="block text-lg font-semibold text-black dark:text-white">
          Job Post Title
        </label>
        <p className="text-sm text-muted-foreground">
          Create a strong job post title
        </p>
        <Input
          id="job-title"
          placeholder="e.g. Frontend Developer"
          className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 text-black dark:text-white bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </section>

      {/* Description */}
      <section className="space-y-2">
        <label htmlFor="job-description" className="block text-lg font-semibold text-black dark:text-white">
          Description
        </label>
        <p className="text-sm text-muted-foreground">
          Enter the job responsibilities, qualifications, etc.
        </p>
        <TextareaDemo />
      </section>

      {/* Location */}
      <section className="space-y-2">
        <label htmlFor="job-location" className="block text-lg font-semibold text-black dark:text-white">
          Company Link and Target Course
        </label>
        <p className="text-sm text-muted-foreground">
          Paste the company website or job posting link here and program that's fits in
        </p>
        <CardWithForm/>
      </section>
    </div>
  );
}
