import * as React from 'react';
import { ChatMessage } from '../../types';
import logo from '../../assets/logo.png';

interface SidebarProps {
  recentChats: ChatMessage[];
}

export function Sidebar({ recentChats }: SidebarProps) {
  return (
    <div className="relative flex flex-col w-[18%] max-md:ml-0 max-md:w-full bg-white border-r border-zinc-200">
      <div className=" flex overflow-hidden flex-col justify-center pb-8 mx-auto w-full  min-h-[900px] min-w-[264px]">
        <div className="flex overflow-hidden justify-center items-center px-8 py-4 w-full border-b border-zinc-200 min-h-[72px] max-md:px-5">          
           {/* <img loading="lazy" src={logo} alt="Logo" className="object-contain self-stretch my-auto aspect-[1.8] w-[220px]" />  */}
           <div className="self-start text-xl font-semibold text-blue-600">Ministry of Health</div> 
        </div>
        <div className="flex overflow-hidden flex-col flex-1 justify-center px-4 pt-6 pb-4 w-full">
          <div className="flex overflow-hidden flex-col flex-1 w-full">
            <button className="flex gap-2 justify-center items-center px-8 py-1 w-full text-sm font-semibold leading-8 text-center text-blue-600 rounded-lg border border-blue-600 border-solid min-h-[40px] shadow-[0px_15px_30px_rgba(255,255,255,0.1)] max-md:px-5">
              <span className="text-lg">+</span>
              {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/33019dab41fd8a7d89cbf8cfbc3708388d4407217ed17153a88dac4c64d72778?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" alt="New Chat" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" /> */}
              <span className="self-stretch my-auto">New Chat</span>
            </button>
            {/* <div className="flex overflow-hidden flex-col flex-1 px-3 pt-6 w-full">
              <div className="flex flex-col flex-1 justify-center w-full">
                <div className="self-start text-sm font-medium tracking-normal leading-none text-center text-zinc-900">
                  Recent
                </div>
                <div className="flex overflow-hidden flex-col flex-1 pt-3 pb-2.5 w-full">
                  {recentChats.map((chat) => (
                    <div key={chat.id} className="flex overflow-hidden gap-2.5 justify-center py-0.5 pr-2.5 w-full min-h-[32px] mt-2.5 first:mt-0">
                      <div className="flex gap-2.5 justify-center items-center my-auto w-4 min-h-[29px]">
                        <img loading="lazy" src={chat.icon} alt="" className="object-contain self-stretch my-auto w-4 aspect-square" />
                      </div>
                      <div className="flex-1 shrink gap-2.5 self-stretch h-full text-sm tracking-wide leading-none text-center text-zinc-900">
                        {chat.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="absolute bottom-0 flex overflow-hidden flex-col justify-center py-2.5 pl-1 w-full">
          <div className="flex overflow-hidden flex-col justify-center w-full">
            <div className="flex overflow-hidden flex-col justify-center py-4 pr-3 pl-2 w-full">
              <button className="flex overflow-hidden gap-5 justify-start py-0.5 pr-0.5 pl-1 w-full min-h-[32px]">
                <div className="flex gap-2.5 justify-center items-center my-auto w-4 min-h-[29px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/9d299d6253ec9068bce7a4e41d26af23b76e6da5ae291b682df6163ca341bbf0?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" alt="Help" className="object-contain self-stretch my-auto w-4 aspect-square" />
                </div>
                <div className="flex-1 leading-8 shrink gap-2.5 self-stretch h-full text-sm font-semibold tracking-normal text-start whitespace-nowrap text-zinc-500">
                  Help
                </div>
              </button>
              <button className="flex overflow-hidden gap-5 justify-start py-0.5 pr-0.5 pl-1 w-full min-h-[32px]">
                <div className="flex gap-2.5 justify-center items-center my-auto w-4 min-h-[29px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/e3997f076be0a2dd8e3cdabdca8c5b3cf2928264481049c875a63970a74e56f4?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" alt="Settings" className="object-contain self-stretch my-auto w-4 aspect-square" />
                </div>
                <div className="flex-1 leading-8 shrink gap-2.5 self-stretch h-full text-sm font-semibold tracking-normal text-start whitespace-nowrap text-zinc-500">
                Settings
                </div>
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}