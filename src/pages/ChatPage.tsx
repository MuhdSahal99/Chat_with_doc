import * as React from 'react';
import { ChatLayout } from '../components/layout/ChatLayout';
import { ChatContainer } from '../components/chat/ChatContainer'; 
import { useLocation, useNavigate } from 'react-router-dom';

export interface FileDetails {
  name: string;
  size: string;
  type: string;
}

export default function ChatPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const fileDetails = location.state?.fileDetails as FileDetails;

  React.useEffect(() => {
    if (!fileDetails) {
      navigate('/');
    }
  }, [fileDetails, navigate]);

  if (!fileDetails) {
    return null;
  }

  return (
    <ChatLayout>
      <div className="flex flex-col pb-170 w-full h-full">
        <ChatContainer />
      </div>
    </ChatLayout>
  );
}