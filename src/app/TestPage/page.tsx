"use client";
import Image from 'next/image'
import * as React from 'react';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

import {useState} from 'react';
export default function Home() {
  const [test, setTest] = useState<string>('Hello World');

  return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Breadcrumb home={'Home'} separator={<span><Image src='/chevron-right.svg' alt="chevron" height='8' width='8' /></span>} />
        <div>Test Page</div>
        <div className="TestDiv">Test 2</div>
        <div className="TestDiv">{test}</div>
    </main>
  )
}
