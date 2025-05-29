import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo() {
  return (
    <Textarea
      placeholder="Type your message here."
      className="w-full h-40 rounded-lg border border-black dark:border-white text-black dark:text-white bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-0"
    />
  );
}
