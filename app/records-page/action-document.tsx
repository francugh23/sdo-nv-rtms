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
import QRCode from "qrcode"
import { redirect } from "next/dist/server/api-utils";

interface ActionDocumentProps {
  trigger: React.ReactNode;
}

export const ActionDocument = ({ trigger }: ActionDocumentProps) => {
  const [open, setOpen] = useState(false);

  const [action, setAction] = useState("");
  const [forwardTo, setForwardTo] = useState("");
  const [receivedBy, ] = useState("Sir George");

  const handleGenerateQR = async () => {
    const documentId = "DA001-02-21-25"; // Replace with dynamic input later
    const qrData = {
      documentId,
      action,
      forwardTo,
      receivedBy,
    };

    try {
      // Generate QR code as a data URL
      const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(qrData));

      console.log("Generated QR Code Data URL:", qrCodeUrl); // Debugging: Log the data URL

      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = qrCodeUrl; // Set the data URL as the href
      link.download = "qrcode.png"; // Specify the file name and extension
      document.body.appendChild(link); // Append the anchor to the DOM
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up the anchor element
    } catch (error) {
      console.error("Error generating or downloading QR code:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[350px]">
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
                  <SelectItem value="receive">Receive</SelectItem>
                  <SelectItem value="return">Return</SelectItem>
                  <SelectItem value="release">Release</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select onValueChange={(value) => setForwardTo(value)}>
              <SelectTrigger className="col-span-1">
                <SelectValue placeholder="Forward To" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options</SelectLabel>
                  <SelectItem value="receive">SDS</SelectItem>
                  <SelectItem value="return">ASDS</SelectItem>
                  <SelectItem value="return">CID</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="col-span-1 flex items-center space-x-2">
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
            <Label htmlFor="receivedBy">Received By</Label>
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
