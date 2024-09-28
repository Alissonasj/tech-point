'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = LinkProps & {
    children: React.ReactNode;
};

export default function ActiveLink({
    children,
    href,
    ...rest
}: ActiveLinkProps) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`ml-2 mr-2 py-2 block text-zinc-100 ${pathname === href ? 'bg-[#01F8FC] text-[#020F1F]' : ''}`}
            {...rest}
        >
            {children}
        </Link>
    );
}
