"use client";
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconBusinessplan,
  IconMenuOrder,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { useUser } from '@clerk/nextjs'; // Poprawny import Clerk dla Next.js

export function CreateProject() {
  // State for form fields and notification
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [projectCategory, setProjectCategory] = useState('');
  const [otherCategory, setOtherCategory] = useState('');
  const [notification, setNotification] = useState('');

  // Webhook URL (replace with your actual Discord webhook URL)
  const webhookURL = 'https://discord.com/api/webhooks/1292422341392994379/wilpBZM4HSHEHnvYuDVKTZ9X2H0f4lzYmkUnbMpZ5uEB-jho2xlgkTe49rwRz2l7J5ph';

  const handleSubmit = async () => {
    const selectedCategory = projectCategory === 'Inne' ? otherCategory : projectCategory;


    // Form data to be sent with embed
    const message = {
      embeds: [
        {
          title: "Nowe zlecenie projektu",
          description: `**Nazwa Projektu**: ${projectName}\n**Opis**: ${projectDescription}\n**Budżet**: ${projectBudget} PLN\n**Kategoria**: ${selectedCategory}`,
          color: 5814783,
          thumbnail: {
            url: "https://media.discordapp.net/attachments/1287043241807450233/1287132909207163031/Logo.png?ex=67038d2f&is=67023baf&hm=03ba5249912b973449eac5112bb1d3341b5f76398dda21707ad10d383ada5132&=&format=webp&quality=lossless&width=800&height=800" // Link do miniaturki
          },
        },
      ],
      components: [
        {
          type: 1, // Action Row
          components: [
            {
              type: 2, // Button
              label: "Akceptuj",
              style: 3, // Green button
              custom_id: "accept_project", // Custom ID, który bot będzie nasłuchiwał
            },
            {
              type: 2, // Button
              label: "Zapytanie",
              style: 1, // Gray button
              custom_id: "inquire_project", // Custom ID dla zapytań
            },
          ],
        },
      ],
    };


    // Send webhook request to Discord
    try {
      await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      // Show notification on successful submission
      setNotification('Projekt został wysłany i teraz czekamy na rozpatrzenie przez ekspertów.');
    } catch (error) {
      console.error('Error sending the webhook:', error);
      setNotification('Wystąpił błąd podczas wysyłania projektu.');
    }

    // Clear form fields after submission
    setProjectName('');
    setProjectDescription('');
    setProjectBudget('');
    setProjectCategory('');
    setOtherCategory('');
  };

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-700 dark:border-neutral-700 bg-neutral-900 dark:bg-neutral-900 flex flex-col gap-4 flex-1 w-full h-full">
        <h1 className="text-white text-lg font-medium">Create a New Project</h1>

        {/* Project Name */}
        <div className="bg-neutral-800 dark:bg-neutral-700 rounded-lg p-4">
          <label className="text-white">Project Name</label>
          <input
            type="text"
            placeholder="Enter project name"
            className="mt-2 p-2 bg-neutral-900 dark:bg-neutral-800 text-white w-full rounded"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>

        {/* Project Category */}
        <div className="bg-neutral-800 dark:bg-neutral-700 rounded-lg p-4">
          <label className="text-white">Kategoria Projektu</label>
          <select
            className="mt-2 p-2 bg-neutral-900 dark:bg-neutral-800 text-white w-full rounded"
            value={projectCategory}
            onChange={(e) => setProjectCategory(e.target.value)}
          >
            <option value="">Wybierz kategorię</option>
            <option value="Strona WWW">Strona WWW</option>
            <option value="Grafika">Grafika</option>
            <option value="Design UI/UX">Design UI/UX</option>
            <option value="Bot">Bot</option>
            <option value="Plugin">Plugin</option>
            <option value="Inne">Inne (wpisz poniżej)</option>
          </select>

          {/* Input for other category */}
          {projectCategory === 'Inne' && (
            <input
              type="text"
              placeholder="Wpisz inną kategorię"
              className="mt-2 p-2 bg-neutral-900 dark:bg-neutral-800 text-white w-full rounded"
              value={otherCategory}
              onChange={(e) => setOtherCategory(e.target.value)}
            />
          )}
        </div>

        {/* Project Description */}
        <div className="bg-neutral-800 dark:bg-neutral-700 rounded-lg p-4">
          <label className="text-white">Project Description</label>
          <textarea
            placeholder="Describe your project"
            className="mt-2 p-2 bg-neutral-900 dark:bg-neutral-800 text-white w-full rounded"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Project Budget */}
        <div className="bg-neutral-800 dark:bg-neutral-700 rounded-lg p-4">
          <label className="text-white">Budget (PLN)</label>
          <input
            type="number"
            placeholder="Enter project budget in PLN"
            className="mt-2 p-2 bg-neutral-900 dark:bg-neutral-800 text-white w-full rounded"
            value={projectBudget}
            onChange={(e) => setProjectBudget(e.target.value)}
          />
        </div>

        {/* Button to submit, centered */}
        <div className="flex justify-center mt-auto">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            onClick={handleSubmit}
          >
            Zamów Projekt
          </button>
        </div>

        {/* Notification */}
        {notification && (
          <div className="mt-4 text-center text-green-500">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}

export function Sidebarcreateproject() {
  const { isLoaded, user } = useUser(); // Użycie useUser() z Clerk
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-100 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Create Project",
      href: "#",
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
      <CreateProject />
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
}
