import Link from "next/link";

import {
  ScrollArea,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NavbarSidebar({ items, onOpenChange, open }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => onOpenChange(false)}
              className="w-full block text-left p-4 hover:bg-black hover:text-white lex items-center text-base font-medium"
            >
              {item.children}
            </Link>
          ))}

          <div className="border-t">
            <Link
              href="/sign-in"
              onClick={() => onOpenChange(false)}
              className="w-full block text-left p-4 hover:bg-black hover:text-white lex items-center text-base font-medium"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              onClick={() => onOpenChange(false)}
              className="w-full block text-left p-4 hover:bg-black hover:text-white lex items-center text-base font-medium"
            >
              Start selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
