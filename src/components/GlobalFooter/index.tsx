import React from "react";
import "./index.css";

/**
 * 全局底部栏组件
 *
 * @author HalcyonJX
 */
export default function GlobalFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="global-footer">
            <div>© {currentYear} 前端开发模板</div>
            <div>
                <a href="https://github.com/HalcyonJX" target="_blank">
                    作者：程序员HalcyonJX
                </a>
            </div>
        </div>
    );
}