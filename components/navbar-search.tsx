"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarSearch = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) {
    return null;
  }
  const searchResults=()=>{}
  const changeResults=()=>{}

  return ( 
    <div className="ml-auto flex items-center gap-x-4">
        <form onSubmit={() => searchResults}>
        <span className="ml-2 text-sm font-medium text-white">
          <input type="text" className="ml-2 text-sm font-medium text-black h-7 px-4" placeholder="Search Products in Store ..." onChange={()=>changeResults}></input>
        </span>
        </form>
    </div>
  );
}
 
export default NavbarSearch;