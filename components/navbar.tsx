import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import { ChangeEvent, FormEvent } from "react";
import { cn } from "@/lib/utils"

interface NavbarProps {
  searchQuery: string;
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Navbar: React.FC<NavbarProps> = async({
  searchQuery,
  handleSearchInputChange,
  handleSearchFormSubmit,
}) => {
  const categories = await getCategories(); // You should populate this with actual data from getCategories()

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />

          {/* Search bar */}
          <form onSubmit={handleSearchFormSubmit} className="ml-auto flex items-center gap-x-1">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search products..."
              className={cn(
                'text-sm font-medium transition-colors hover:text-black h-7 px-4',
              )}
            />
          </form>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
