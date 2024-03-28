import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index", layout: false },
    { path: "/product", component: "product" },
    { path: "/product/:id", component: "product/detail" },
    { path: "/news", component: "news" },
    { path: "/news/:id", component: "news/detail" },
    { path: "/catalog", component: "catalog" },
    { path: "/contact", component: "contact" },
    { path: "/page/:id", component: "page" },
    { path: "/page/:parent/:id", component: "page" },
    { path: "/career", component: "career" },
    { path: "/search", component: "search" }
  ],
  history: {
    type: 'hash'
  },
  tailwindcss: {},
  plugins: [
    "@umijs/plugins/dist/tailwindcss", '@umijs/plugins/dist/locale'
  ],
  locale: {
    default: 'vi-VN',
    antd: true,
    baseNavigator: true,
  },
  npmClient: 'npm'
});
