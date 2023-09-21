'use client';
import { Home, Library } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="w-full mb-12">
      <ul className="flex gap-4 items-center">
        <Link href="/">
          <li
            className={`${path === '/' ? 'text-white' : 'text-text-gray'} flex gap-1 items-center`}
          >
            <Home size={20} />
            Home
          </li>
        </Link>
        <Link href="/blog">
          <li
            className={`${
              path.split('/')[1] === 'blog' ? 'text-white' : 'text-text-gray'
            } flex gap-1 items-center`}
          >
            <Library size={20} />
            Blog
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
