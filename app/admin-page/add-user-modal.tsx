import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { autoGeneratedID } from "../register/page";

export const AddUserModal = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>
            Input the details of the user you want to add.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="UserID"
              value={autoGeneratedID()}
              readOnly
              className="text-right"
            />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options</SelectLabel>
                  <SelectItem value="apple">Guest</SelectItem>
                  <SelectItem value="banana">SDS</SelectItem>
                  <SelectItem value="blueberry">ASDS</SelectItem>
                  <SelectItem value="blueberry">Records</SelectItem>
                  <SelectItem value="blueberry">SGOD</SelectItem>
                  <SelectItem value="blueberry">HR</SelectItem>
                  <SelectItem value="blueberry">Supply</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Input name="username" placeholder="Username" />
          <Input name="password" placeholder="Password" />

          <DialogFooter>
            <Button type="button" variant={"outline"}>
              Clear
            </Button>
            <Button type="button" onClick={handleClick}>
              Confirm
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
