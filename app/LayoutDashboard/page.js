import React from 'react'

export default function DashboardLayoutPage() {
  return (
    // 如果有template 文件，page内容会传入到template中，template会再传入到layout中
    // 如果没有template 文件，在文件路由下有 layout 的页面，page会直接传入到路由layout 中
    <div>Dashboard Layout Page</div>
  )
}
