import Image from 'next/image'
import * as React from 'react';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

export default function Home() {
  return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Breadcrumb home={'Home'} separator={<span><Image src='/chevron-right.svg' alt="chevron" height='8' width='8' /></span>} />
        <div>Another Page</div>
    </main>
  )
}
