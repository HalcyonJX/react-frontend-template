"use client";
import {
  GithubFilled,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Dropdown, Input, theme } from "antd";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GlobalFooter from "@/components/GlobalFooter";
import menus from "../../../config/menu";
import "./index.css"
import {healthCheck} from "@/api/healthController";
/**
 * 搜索框
 */
const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
        }}
        prefix={<SearchOutlined />}
        placeholder="搜索题目"
        variant="borderless"
      />
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: Props) {
  const pathname = usePathname();
  return (
    <div
      id="basicLayout"
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <ProLayout
        title={"前端开发模板"}
        logo={
          <Image
            src="/assets/logo.png"
            height={32}
            width={32}
            alt="前端开发模板"
          />
        }
        layout={"top"}
        location={{
          pathname,
        }}
        avatarProps={{
          src: "/assets/logo.png",
          size: "small",
          title: "李曦明",
          render: (props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "logout",
                      icon: <LogoutOutlined />,
                      label: "退出登录",
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        //操作渲染
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <SearchInput key={"search"} />,
            <a
              key={"github"}
              href="https://github.com/HalcyonJX/react-frontend-template"
              target={"_blank"}
            >
              <GithubFilled key={"GithubFilled"} />
            </a>,
          ];
        }}
        //标题渲染
        headerTitleRender={(logo, title, _) => {
          return (
            <a
              href={"https://github.com/HalcyonJX/react-frontend-template"}
              target={"_blank"}
            >
              {logo}
              {title}
            </a>
          );
        }}
        footerRender={(props) => {
          return <GlobalFooter />;
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        //定义有哪些菜单
        menuDataRender={() => {
          return menus;
        }}
        //定义了菜单项如何渲染
        menuItemRender={(item, dom) => (
          <Link href={item.path || "/"} target={item.target}>
            {dom}
          </Link>
        )}
      >
        {children}
      </ProLayout>
    </div>
  );
}
