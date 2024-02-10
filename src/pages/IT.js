import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function IT() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">SEBASTIANS</p>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem>JS</NavbarItem>

        <NavbarItem>Other</NavbarItem>

        <NavbarItem>Main Dishes</NavbarItem>

        <NavbarItem>Deserts</NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
