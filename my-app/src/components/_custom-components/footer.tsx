import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F7F7] p-5">
      <div className="mb-8 grid grid-cols-1 grid-rows-4 place-content-center place-items-center gap-4 md:grid-cols-4">
        <span>
          <h3 className="my-3 text-sm font-bold">Panto</h3>
          <p className="text-xs">
            The advantage of hiring a workspace with
            <br /> us is that givees you comfortable service
            <br /> and all-around facilities.
          </p>
        </span>
        <span className="flex flex-col items-center gap-3">
          <h3 className="my-2 text-sm font-bold text-[#F6973F]">Services</h3>
          <Link href={"/"} className="text-xs">
            Email Marketing
          </Link>
          <Link href={"/"} className="text-xs">
            Campaigns
          </Link>
          <Link href={"/"} className="text-xs">
            Branding
          </Link>
        </span>
        <span className="flex flex-col items-center gap-3">
          <h3 className="my-2 text-sm font-bold text-[#F6973F]">Furniture</h3>
          <Link href={"/"} className="text-xs">
            Beds
          </Link>
          <Link href={"/"} className="text-xs">
            Chair
          </Link>
          <Link href={"/"} className="text-xs">
            All
          </Link>
        </span>
        <span className="flex flex-col items-start gap-3">
          <h3 className="my-2 text-sm font-bold text-[#F6973F]">Follow Us</h3>
          <Link href={"/"} className="flex items-center gap-1 text-xs">
            <Facebook size={16} />
            Facebook
          </Link>
          <Link href={"/"} className="flex items-center gap-1 text-xs">
            <Twitter size={16} />
            Twitter
          </Link>
          <Link href={"/"} className="flex items-center gap-1 text-xs">
            <Instagram size={16} />
            Instagram
          </Link>
        </span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
        <div className="item-center flex gap-4">
          <p className="text-xs text-muted-foreground">Terms & Conditions</p>
          <p className="text-xs text-muted-foreground">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
