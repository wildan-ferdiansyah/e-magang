import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[250px] flex flex-col items-start" side="left">
        <SheetTitle className="hidden">Menu</SheetTitle>
        <div className="flex flex-col justify-start mt-12 gap-7 px-4 w-full">
          <NavMenu
          orientation="vertical"
          // className="flex flex-col  justify-start mt-12"
        />
        <Button variant="outline" className="">
          Login
        </Button>
        <Button className="bg-sky-800 hover:bg-sky-900 dark:text-white">Registrasi</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
