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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import QRCode from "qrcode";
import { redirect } from "next/dist/server/api-utils";
import { Textarea } from "@/components/ui/textarea";

interface ActionDocumentProps {
  trigger: React.ReactNode;
}

export const ActionDocument = ({ trigger }: ActionDocumentProps) => {
  const [open, setOpen] = useState(false);

  const [action, setAction] = useState("");
  const [forwardTo, setForwardTo] = useState("");
  const [receivedBy] = useState("Sir George");

  const handleGenerateQR = async () => {
    const documentId = "DA001-02-21-25";
    const qrData = {
      documentId,
      action,
      forwardTo,
      receivedBy,
    };

    try {
      const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(qrData));

      console.log("Generated QR Code Data URL:", qrCodeUrl);

      const link = document.createElement("a");
      link.href = qrCodeUrl;
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating or downloading QR code:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Document Action</DialogTitle>
          <DialogDescription>
            Select the appropriate action for this document.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Document ID"
              value={"DA001-02-21-25"}
              readOnly
              className="text-right"
            />
            <Select onValueChange={(value) => setAction(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Action" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options</SelectLabel>
                  <SelectItem value="receive">Received</SelectItem>
                  <SelectItem value="return">Returned</SelectItem>
                  <SelectItem value="release">Released</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select onValueChange={(value) => setForwardTo(value)}>
              <SelectTrigger className="col-span-1">
                <SelectValue placeholder="Forwarded To" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options</SelectLabel>
                  <SelectItem value="SDS">SDS</SelectItem>
                  <SelectItem value="ASDS">ASDS</SelectItem>
                  <SelectItem value="CID">CID</SelectItem>
                  <SelectItem value="SGOD">SGOD</SelectItem>
                  <SelectItem value="SUPPLY">SUPPLY</SelectItem>
                  <SelectItem value="HR">HR</SelectItem>
                  <SelectItem value="PAR">PAR</SelectItem>
                  <SelectItem value="ADMIN">ADMIN</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => setForwardTo(value)}>
              <SelectTrigger className="col-span-1">
                <SelectValue placeholder="Sub Office" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options</SelectLabel>
                  <SelectItem value="OSDS">OSDS</SelectItem>
                  <SelectItem value="ASDS">ASDS</SelectItem>
                  <SelectItem value="CID">CID</SelectItem>
                  <SelectItem value="SGOD">SGOD</SelectItem>
                  <SelectItem value="SUPPLY">SUPPLY</SelectItem>
                  <SelectItem value="HR">HR</SelectItem>
                  <SelectItem value="PAR">PAR</SelectItem>
                  <SelectItem value="ADMIN">ADMIN</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea
              className="col-span-2"
              placeholder="Document Title/Purpose"
            />
            <Textarea className="col-span-2" placeholder="Remarks" />
            <div className="col-span-2 flex justify-end items-end space-x-2">
              <Checkbox id="isHandcarry" />
              <Label
                htmlFor="isHandcarry"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Handcarry
              </Label>
            </div>
          </div>
          <div className="col-span-1">
            <Label htmlFor="receivedBy">Action taken by:</Label>
            <Input
              type="text"
              id="receivedBy"
              defaultValue={"Sir George"}
              className="text-right"
            />
          </div>

          <DialogFooter>
            <Button type="button" variant={"outline"}>
              Clear
            </Button>
            <Button
              type="button"
              onClick={() => {
                setOpen(false);
                handleGenerateQR();
              }}
            >
              Confirm
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
