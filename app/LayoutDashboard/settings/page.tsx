import type { Metadata } from 'next';



// Metadata  可以使用元数据 API 修改 HTML 元素，例如 <head>的 title 和 meta。
// 便于修改 <title></title>
export const metadata: Metadata = {
  title: 'settings.js',
  // icons: '../../favicon.ico',
  description: 'settings.js',
}
export default function LayoutDashboardSettingsPage() {
 
  return (
    <div>LayoutDashboard- settings - page</div>
  )
}
