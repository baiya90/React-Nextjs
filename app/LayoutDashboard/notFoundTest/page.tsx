import React from 'react'
import { notFound } from 'next/navigation'

export default function page() {
    // notFound() 函数会去寻找离自己最近的not-found文件并，展示
    // 如果有局部的not-found需要展示，不需要全局的not-found可以使用该函数
    // 这里的notfound函数会去展示同目录下的 not-found文件内容
    notFound();
  return (
    <div>notFoundTest 页面</div>
  )
}
