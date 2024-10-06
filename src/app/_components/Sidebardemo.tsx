"use client";
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconBusinessplan,
  IconMenuOrder,
  IconPlaceholder,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { useUser } from '@clerk/nextjs'; // Poprawny import Clerk dla Next.js

export function SidebarDemo() {
  const { isLoaded, user } = useUser(); // Użycie useUser() z Clerk
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Create Project",
      href: "dashboard/createproject",
      icon: (
        <IconMenuOrder className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: "/dashboard/projects",
      icon: (
        <IconBusinessplan className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-neutral-800 dark:bg-neutral-800 w-full flex-1 max-w-full min-w-full mx-auto border border-neutral-700 dark:border-neutral-700 overflow-hidden h-dvh max-h-dvh min-h-dvh"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>

        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
    >
      <Image
        src="https://media.discordapp.net/attachments/1287043241807450233/1287132909207163031/Logo.png?ex=67023baf&is=6700ea2f&hm=6185185b043a12936c796dc8af8e260de541d07bd7a868f9340cd188f5dccfa6&=&format=webp&quality=lossless&width=800&height=800"
        className="h-7 w-7 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white dark:text-white whitespace-pre"
      >
        SkillCore Agency
      </motion.span>
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-700 dark:border-neutral-700 bg-neutral-900 dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        {/* Responsive grid for boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Example of a responsive box */}
          <div className="flex items-center justify-center h-32 bg-neutral-800 dark:bg-neutral-700 rounded-lg animate-pulse">
            <p className="text-white">test</p>
          </div>
          {/* Additional boxes */}
          <div className="flex items-center justify-center h-32 bg-neutral-800 dark:bg-neutral-700 rounded-lg animate-pulse">
            <p className="text-white">Box 2</p>
          </div>
          <div className="flex items-center justify-center h-32 bg-neutral-800 dark:bg-neutral-700 rounded-lg animate-pulse">
            <p className="text-white">Box 3</p>
          </div>
          <div className="flex items-center justify-center h-32 bg-neutral-800 dark:bg-neutral-700 rounded-lg animate-pulse">
            <p className="text-white">Box 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};




