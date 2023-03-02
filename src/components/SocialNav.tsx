import React, {createElement, FC} from 'react';
import {IconType} from "react-icons/lib";

interface SocialNavProps {
    items: SocialNavItemProps[]
}

interface SocialNavItemProps {
    label: string;
    href: string;
    color: string
    icon: IconType

}

const SocialNavItem: FC<SocialNavItemProps> = ({label, href, color, icon}) => {
    return <li
        className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300`}
        style={{backgroundColor: color}}
    >
        <a href={href} rel="noreferrer" target={href.startsWith('mailto:') ? '_self' : '_blank'}
           className='w-full flex justify-between items-center text-grey-300'>
            <>{label} {createElement(icon, {size: 30})}</>
        </a>
    </li>
}

const SocialNav: FC<SocialNavProps> = ({items}) => {
    return (
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {items.map(item => (<SocialNavItem key={item.label} {...item} />))}
            </ul>
        </div>
    );
};

export default SocialNav;