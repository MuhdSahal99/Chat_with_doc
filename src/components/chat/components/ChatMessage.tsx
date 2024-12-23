import * as React from 'react';
import { Icon } from '../Icon';
import { ChatMessageProps } from '../types';

// Make sure you're using a named export
export const ChatMessage: React.FC<ChatMessageProps> = ({
  icon,
  title,
  message,
  actions
}) => (
  <div className="flex gap-3 items-start px-4 py-5 max-w-full bg-white rounded-xl border border-solid border-neutral-200 w-[746px]">
    <div className="flex flex-wrap flex-1 shrink gap-3 items-start w-full basis-0 min-w-[240px] max-md:max-w-full">
      <Icon src={icon} alt="Chat icon" className="shrink-0 w-6 aspect-square" />
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <h2 className="text-sm font-bold text-stone-950 max-md:max-w-full">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-stone-950 max-md:max-w-full">{message}</p>
        <div className="flex gap-2 items-start self-start pt-1 mt-2">
          {actions.map((action, index) => (
            <Icon
              key={index}
              src={action}
              alt={`Action ${index + 1}`}
              className="shrink-0 w-4 aspect-square"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);