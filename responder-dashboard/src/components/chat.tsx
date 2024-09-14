'use client';
import {useChat} from 'ai/react'

  export default function Chat() {
    return (
      <div className="relative max-h-screen overflow-auto">
        <div className="sticky top-0 inset-x-0 p-2 bg-white h-fit">
                <h3 className="text-xl font-bold">AI Response</h3>
            </div>
      </div>
    )

  }