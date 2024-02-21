import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index", layout: false },
    { path: "/product", component: "product" },
    { path: "/product/:id", component: "product/detail" },
    { path: "/news", component: "news" },
    { path: "/news/:id", component: "news/detail" },
    { path: "/catalog", component: "catalog" },
    { path: "/vr360", component: "vr360", layout: false },
    { path: "/contact", component: "contact" },
    { path: "/page/:id", component: "page" }
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
  npmClient: 'npm',
  
});
