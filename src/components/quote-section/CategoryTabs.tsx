"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategoryTabs = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category");
  const defaultSelected = categoryParam ? categoryParam : "recent";
  const [selected, setSelected] = useState(defaultSelected);

  const handleTabsChange = (key: React.Key) => {
    setSelected(key.toString());
    const params = new URLSearchParams(searchParams);
    if (key === "recent") {
      params.delete("category");
      params.delete("recent");
    } else {
      params.set("category", key.toString());
      params.delete("recent");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex w-full flex-col">
      <Tabs
        onSelectionChange={handleTabsChange}
        selectedKey={`${selected}`}
        aria-label="Options"
        variant="underlined"
        color="success"
        size="lg"
        keyboardActivation="manual"
        className="text-2xl font-semibold "
      >
        <Tab key="recent" title="Latest" className="text-2xl" />
        <Tab key="life" title="Life" className="text-2xl" />
        <Tab key="wisdom" title="Wisdom" className="text-2xl" />
        <Tab key="love" title="Love" className="text-2xl" />
        <Tab key="motivation" title="Motivation" className="text-2xl" />
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
