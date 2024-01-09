import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SideModalInterface } from "@/lib/typings/interfaces/component.interface";

export function SideModal({ open, toggleModal }: SideModalInterface) {
  return (
    <Sheet open={open} onOpenChange={toggleModal}>
      <SheetContent className="!max-w-[50rem] bg-modalGradient border-2 border-border">
        <SheetHeader>
          <SheetTitle>Learn Swift for IOS Development</SheetTitle>
        </SheetHeader>
        <Table className="mt-5">
          <TableBody className="text-sm">
            <TableRow>
              <TableCell className="align-top text-left pl-0">
                Summary:
              </TableCell>{" "}
              <TableCell className="align-top">
                This project is for managing task in a simplistic manner. No
                unnecessary features to confuse the user.
              </TableCell>
            </TableRow>
            {/* <tr>
              <td>Deadline:</td>
              <td>January 31, 2024</td>
            </tr> */}
          </TableBody>
        </Table>
      </SheetContent>
    </Sheet>
  );
}
