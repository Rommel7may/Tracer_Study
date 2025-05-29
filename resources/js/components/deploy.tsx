import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,

} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link,  BookOpenCheck } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name"><Link className="text-2xl"/>Paste link here</Label>
              <Input id="name" placeholder="e.g workhunt.skfk" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">  <BookOpenCheck />Programs</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="information">BS Information technology</SelectItem>
                  <SelectItem value="civil">BS Civil engineer</SelectItem>
                  <SelectItem value="bussines">BS Bussines administrator</SelectItem>
                  <SelectItem value="tourism">BS Tourism management</SelectItem>
                  <SelectItem value="education">BE Education</SelectItem>
                  <SelectItem value="psychology">BS Psychology</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
    <div className="flex gap-2">
       <Button variant="outline">Cancel</Button>
       <Button variant="outline">Save Drafts</Button>
    </div>
    <Button>Deploy</Button>
</CardFooter>

    </Card>
  );
}
