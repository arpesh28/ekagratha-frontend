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
import CategoryBadge from "../tasks/listView/categoryBadge";
import PriorityBadge from "../tasks/listView/priorityTag";

export function SideModal({ open, toggleModal }: SideModalInterface) {
  return (
    <Sheet open={open} onOpenChange={toggleModal}>
      <SheetContent className="">
        <SheetHeader className="border-b-[1px] border-border pb-4">
          <div className="mb-3">
            <PriorityBadge name="HIGH" />
          </div>
          <SheetTitle>Learn Swift for IOS Development</SheetTitle>
        </SheetHeader>
        <div className="space-x-2 mt-5">
          <CategoryBadge name="NPM Package" />
          <CategoryBadge name="Node.js" />
          <CategoryBadge name="MongoDB" />
        </div>
        <Table className="mt-5">
          <TableBody className="text-sm">
            <TableRow className="border-0">
              <TableCell className="align-top text-left pl-0 text-[##b9bac1] font-light">
                Created:
              </TableCell>{" "}
              <TableCell className="align-top">January 31, 2024</TableCell>
            </TableRow>

            <TableRow className="border-0">
              <TableCell className="align-top text-left pl-0 text-[##b9bac1] font-light">
                Deadline:
              </TableCell>{" "}
              <TableCell className="align-top">January 31, 2024</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="align-top text-left pl-0 text-[##b9bac1] font-light">
                Summary:
              </TableCell>{" "}
              <TableCell className="align-top">
                This project is for managing task in a simplistic manner. No
                unnecessary features to confuse the user. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Perferendis ab quas magnam
                atque earum dolorum tempore minima fugiat, similique nostrum
                obcaecati accusamus dignissimos accusantium ipsam placeat et
                molestias, impedit optio.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </SheetContent>
    </Sheet>
  );
}
