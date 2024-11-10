import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import style from './style.module.scss';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={className} {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, value, activeTabValue, ...props }, ref) => {
  // Check if the current tab is active by comparing values
  const activeClass = value === activeTabValue ? style.active : style.inactive;

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      value={value}
      className={`${style.tab_btn} ${activeClass} ${className}`}
      {...props}
    />
  );
});

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={className}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

function TabNavigation({ tabsData, ...props  }) {
  const tabKeys = Object.keys(tabsData);
  const [activeTabValue, setActiveTabValue] = React.useState(tabKeys[0]);

  return (
    <Tabs value={activeTabValue} onValueChange={setActiveTabValue} className={style.TabNavigation_wrp}>
      <TabsList className={style.tab_list}>
        {tabKeys.map((tab, index) => (
          <TabsTrigger key={index} value={tab} activeTabValue={activeTabValue} className={props.tabHeadClassName} >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabKeys.map((tab, index) => (
        <TabsContent key={index} value={tab} className={style['TabsContent']} >
          {/* <div dangerouslySetInnerHTML={{ __html: tabsData[tab] }} /> */}
          {tabsData[tab]}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default TabNavigation;
