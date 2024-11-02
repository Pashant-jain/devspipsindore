import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn("",className)} {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "font-bold text-gray-500 border-b-2  pb-1 px-4 text-lg lg:text-xl disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-black  data-[state=active]:border-b-black transition-all duration-200",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

function TabNavigation({ tabsData }) {
  const tabKeys = Object.keys(tabsData);
  const tabContents = Object.values(tabsData);

  return (
    <Tabs defaultValue={tabKeys[0]} className="p-14 w-full">
      <TabsList className="flex w-full">
        {tabKeys.map((tab) => (
          <TabsTrigger value={tab}>{tab}</TabsTrigger>
        ))}
      </TabsList>
      {tabContents.map((content, i) => (
        <TabsContent value={tabKeys[i]}>{content}</TabsContent>
      ))}
    </Tabs>
  );
}

export default TabNavigation;
