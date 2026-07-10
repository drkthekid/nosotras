import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/features/navbar/nav-menu";
import { NavigationSheet } from "@/components/features/navbar/navigation-sheet";
import { ButtonTheme } from "../theme/button";

const Navbar = () => {
  return (
    <nav className="h-20 border-b bg-background">
      <div
        className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
         <ButtonTheme/>
          <Button>Aula Experimental</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
