'use client';

import React from 'react';
import Image from 'next/image';
import savart_logo from '@/assets/images/savart_logo.png';
import { ImUser, ImCart } from 'react-icons/im';
import { CiMenuBurger } from 'react-icons/ci';
import { useWindowScroll } from '@uidotdev/usehooks';
import { clsx } from 'clsx';

export default function Navbar() {
  const [{ y }] = useWindowScroll();
  console.log(y);
  return (
    <header
      className={clsx('w-full p-3.5 top-0 fixed transition-all', {
        'bg-white bg-opacity-80 backdrop-blur-sm shadow': y && y > 50,
      })}
    >
      <div className="max-w-6xl flex justify-between mx-auto">
        <div>
          <Image
            src={savart_logo}
            width={45}
            alt="savart logo"
            className={clsx('transition-opacity', { 'opacity-0': !y || y < 50 })}
          />
        </div>

        <nav className="flex justify-center">
          <ul className="flex items-center gap-1">
            <li
              className={clsx('hover:cursor-pointer p-2 bg-opacity-0 bg-black transition-colors', {
                'hover:bg-opacity-10': y && y > 50,
              })}
            >
              {/* <ImUser size={20} className={y && y > 50 ? 'text-black' : 'text-black-half'} /> */}
              <ImUser
                size={20}
                className={clsx('transition-colors', y && y > 50 ? 'text-black' : 'text-black-half hover:text-white')}
              />
            </li>
            <li
              className={clsx('hover:cursor-pointer p-2 bg-opacity-0 bg-black transition-colors', {
                'hover:bg-opacity-10': y && y > 50,
              })}
            >
              <ImCart
                size={20}
                className={clsx('transition-colors', y && y > 50 ? 'text-black' : 'text-black-half hover:text-white')}
              />
            </li>
            <li
              className={clsx('hover:cursor-pointer p-2 bg-opacity-0 bg-black transition-colors', {
                'hover:bg-opacity-10': y && y > 50,
              })}
            >
              <CiMenuBurger
                size={20}
                className={clsx('transition-colors', y && y > 50 ? 'text-black' : 'text-black-half hover:text-white')}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
