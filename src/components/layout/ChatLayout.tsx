import * as React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MainContent } from '../home/MainContent';
import { UserProfile, ChatMessage, ChatLayoutProps } from '../../types';

const mockUser: UserProfile = {
  name: "Alexandra Andria",
  email: "alex@wisualyst.com",
  avatar: "https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/562601b29d3461f2d14b5c5fb15678145f73128bbec07507efc1bb25dc16bd96?apiKey=e8521392b64d4ca28efa899b1eeac3c3&"
};

const mockChats: ChatMessage[] = [
  { id: '1', text: "This is a sample chat...", icon: "https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/74ead3b199c6d7fef402e7165ebc2301acc647665f6be3cd80cc8604f96ce8f2?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" },
  { id: '2', text: "This is a sample chat...", icon: "https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/74ead3b199c6d7fef402e7165ebc2301acc647665f6be3cd80cc8604f96ce8f2?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" },
  { id: '3', text: "This is a sample chat...", icon: "https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/74ead3b199c6d7fef402e7165ebc2301acc647665f6be3cd80cc8604f96ce8f2?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" },
  { id: '4', text: "This is a sample chat...", icon: "https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/74ead3b199c6d7fef402e7165ebc2301acc647665f6be3cd80cc8604f96ce8f2?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" }
];

export function ChatLayout({ children }: ChatLayoutProps) {
  const handleFileUpload = React.useCallback((file: File) => {
    console.log('File uploaded:', file);
  }, []);

  return (
    <main className="flex flex-col h-screen">
    <div className="flex flex-1 overflow-hidden">
       <Sidebar recentChats={mockChats} />      
      <div className="flex flex-1 flex-col">
        <Header title="Chat with Document" user={mockUser} />
        {children || <MainContent onFileUpload={handleFileUpload} />}       
      </div>
    </div>   
  </main>

    // <div className="overflow-hidden w-full bg-neutral-50 max-md:max-w-full">
    //   <div className="flex max-md:flex-col">
    //     <Sidebar recentChats={mockChats} />
    //     <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
    //       <div className="flex flex-col w-full max-md:max-w-full">
    //         <Header title="Chat with Document" user={mockUser} />
    //         {children || <MainContent onFileUpload={handleFileUpload} />}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}