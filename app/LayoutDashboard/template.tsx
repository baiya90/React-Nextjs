"use client"
import React, { useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
const [countSettings, setsetSettingsPageCountCount] = useState(0);


    return(
        <main>
            {/* template组件在切换路由的时候会被重新渲染重新创建 DOM 元素，客户端组件中不会保留之前的状态 */}
            <div>Dashboard layout -  Template</div>
            <div className="border-2 border-black p-2 border-dashed w-1/2">
                <p>
                {countSettings} 
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                    onClick={() => setsetSettingsPageCountCount(countSettings + 1)}
                >
                    +
                </button>
                </p>
            </div>
            <div>{children}</div>
        </main>
    ) 
  }