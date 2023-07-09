import { useState } from "react";
import { classNames } from "shared/lib/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { className } = props;
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher /> */}
      </div>
    </div>
  );
};
