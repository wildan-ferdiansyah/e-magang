import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import Link from "next/link";

export function NavbarUser() {
  return (
      <nav className="h-16 bg-background border-b w-full fixed top-0 z-50">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Link href="#beranda" className="text-xl font-semibold tracking-wider">E-Magang</Link>
          </div>
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Login
            </Button>
            <Button className="bg-sky-800 hover:bg-sky-900 dark:text-white">Registrasi</Button>
            <ToggleTheme />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
  );
}
