import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/products", component: "products" },
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
