import React from 'react'
// import { notFound } from 'next/navigation'

// 全局的404页面 可以通过在app下面创建not-found.tsx来定义，检查到没有的路由链接会自动调转到这个页面
export default function NotFound() {
  return (
    <div>自定义全局的 404 not-found</div>
  )
}
