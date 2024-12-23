import * as React from 'react';
import { Icon } from '../Icon';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className="fixed bottom-0 left-[18%] right-0 bg-white px-6 pb-6 pt-4">
      <form 
        onSubmit={handleSubmit} 
        className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-4 py-3 bg-white rounded-lg shadow-[0px_19px_29px_rgba(30,31,34,0.05)] w-full max-w-[1011px] mx-auto"
      >
        <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px] w-[416px] mx-auto">
          <div className="flex gap-3 justify-center items-center self-stretch px-2 my-auto w-8 h-8 bg-indigo-100 rounded-lg min-h-[32px] shadow-[0px_15px_30px_rgba(255,255,255,0.1)]">
            <Icon 
              src="https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/f7649f2528e7b5d1e58ec33a1def08dace5a93c0593d58941b461032aa6dd8a6?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" 
              alt="Ask question icon" 
              className="self-stretch my-auto w-4 aspect-square" 
            />
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 self-stretch my-auto text-xs leading-none text-slate-900 focus:outline-none"
            placeholder="Ask questions"
          />
        </div>
        <button 
          type="submit"
          disabled={!message.trim()}
          className="flex gap-8 justify-center items-center self-stretch my-auto w-8 min-h-[32px] disabled:opacity-50"
        >
          <Icon 
            src="https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/1a1c1189f2acef732221f3478a6f93338f7fb0503ae16b705952864538ec07a9?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" 
            alt="Send message" 
            className="self-stretch my-auto w-4 aspect-square" 
          />
        </button>
      </form>
    </div>
  );
};