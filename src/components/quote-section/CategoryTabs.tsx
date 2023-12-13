"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const CategoryTabs = () => {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        variant="underlined"
        color="success"
        size="lg"
        keyboardActivation="manual"
        className="text-2xl font-semibold "
      >
        <Tab href="/" key="Recent" title="Recent" className="text-2xl" />
        <Tab href="/life" key="Life" title="Life" className="text-2xl" />
        <Tab href="/wisdom" key="Wisdom" title="Wisdom" className="text-2xl" />
        <Tab href="/love" key="Love" title="Love" className="text-2xl" />
        <Tab
          href="/motivation"
          key="Motivation"
          title="Motivation"
          className="text-2xl"
        />
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
