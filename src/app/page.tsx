import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@heroui/button";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <Button color="warning">Warning</Button>
    </div>
  );
}
