'use client'
import { link } from 'fs';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaKitchenSet } from "react-icons/fa6";
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();

    
    const links = [ 
        { href: '/', label: 'Dashboard' },
        { href: '/users', label: 'Users' },
        { href: '/posts', label: 'Posts' },
        { href: '/issues', label: 'Issues' },
        { href: '/recipescraping', label: 'Recipe Scraping' },
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><FaKitchenSet/></Link>
          <ul className='flex space-x-6'>
            {links.map(link =>
                <Link 
                    key={link.href}
                    className={classnames({
                        'text-zinc-900' : link.href === currentPath,
                        'text-zinc-500' : link.href !== currentPath,
                        'hover: text-zinc-800 transition-colors' : true
                    })}
                    href={link.href}>{link.label}
                </Link>)
}
          </ul>
    </nav>
  )
}

export default NavBar