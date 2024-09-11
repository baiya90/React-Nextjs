"use client"

import React, { useState } from 'react';
export default function LayoutDashboard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [count, setCount] = useState(0);


    return (
      <main>
          {/* 在路由中也可以设置layout，接受page文件 的children */}
          <h2> Dashboard Layout </h2>
          
          {/* ！！！！在layout中，状态会被保留，不会被重置 ！！！！*/}
          <div className="border-2 border-black p-2 border-dashed w-1/2">
            <p>
              LayoutDashboard count: 
              {count} 
              <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </p>
            {children}
          </div>

      </main>
    );
  }
  