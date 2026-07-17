"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SmartAnchor } from "@/components/ui/smart-anchor";

export const NavMenu = (props) => (
  <NavigationMenu className="w-full items-start justify-start" {...props}>
    <NavigationMenuList className="w-full flex-col items-start justify-start gap-1 self-start md:w-auto md:flex-row md:items-center md:justify-center md:gap-0">
      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/sobre" />}>
          Sobre
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Cursos</NavigationMenuTrigger>
        <NavigationMenuContent className="min-w-44 p-2">
          <ul className="flex flex-col gap-1">
            <li>
              <NavigationMenuLink
                className="w-full rounded-md px-3 py-2 text-sm hover:bg-muted"
                render={<Link href="/cursos/ingles" />}
              >
                Inglês
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink
                className="w-full rounded-md px-3 py-2 text-sm hover:bg-muted"
                render={<Link href="/cursos/espanhol" />}
              >
                Espanhol
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="/precos" />}>
          Preços
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          render={<SmartAnchor id="contato" />}
        >
          Contato
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);