import * as React from 'react';
import { UserProfile } from '.././../types';

interface HeaderProps {
  title: string;
  user: UserProfile;
}

export function Header({ title, user }: HeaderProps) {
  return (
    <div className="flex overflow-hidden flex-wrap gap-10 justify-between px-8 pt-5 mx-auto w-full bg-white border-b border-zinc-200 min-h-[72px] pb-[px] max-md:px-5 max-md:max-w-full">
      <div className="self-start text-xl font-semibold leading-none text-zinc-950">
        {title}
      </div>
      {/* <div className="flex gap-2 items-center p-3 h-full">
        <img 
          loading="lazy" 
          src={user.avatar}
          alt={user.name}
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[999px]" 
        />
        <div className="flex flex-col justify-center self-stretch my-auto w-[124px]">
          <div className="text-sm font-bold tracking-wide text-zinc-950">
            {user.name}
          </div>
          <div className="text-xs tracking-wide text-gray-500">
            {user.email}
          </div>
        </div>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/f3ea041241becbfa095195ddea3ee29bfe2b0045ff8872f0a4fd61899da5e314?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" 
          alt="Settings"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" 
        />
      </div> */}
    </div>
  );
}