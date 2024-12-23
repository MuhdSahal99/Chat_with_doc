import * as React from 'react';
import { FileAttachment } from './components/FileAttachment';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { useLocation } from 'react-router-dom';
import { ApiService } from '../../services/api';  // Add this import
import img  from "../../assets/user-avatar.jpg";


interface Message {
  id: string;
  type: 'assistant' | 'user';
  content: string;
  timestamp: Date;
}

interface FileDetails {
  name: string;
  size: string;
  type: string;
  id?: string;  // Add this to handle the file_id
}

export const ChatContainer: React.FC = () => {
  const location = useLocation();
  const fileDetails = location.state?.fileDetails as FileDetails;
  const [conversationId, setConversationId] = React.useState<string>();

  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: `Hey there! Thanks for sharing ${fileDetails?.name || 'the PDF'}—looks interesting! Just let me know what you'd like to dive into, and I'll do my best to help you with any insights or summaries.`,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = React.useState(false);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Call the chat API
      const response = await ApiService.sendMessage(content, conversationId);
      
      // Store the conversation ID for subsequent messages
      if (!conversationId) {
        setConversationId(response.conversation_id);
      }
      
      // Add assistant response
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response.answer,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      // Add error message to chat
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'Sorry, I encountered an error while processing your message. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <main className="flex flex-col justify-between h-full">
      <section className="flex flex-col w-full max-md:max-w-full p-6 overflow-y-auto">
        <FileAttachment
          fileName={fileDetails?.name || 'Unknown File'}
          fileSize={fileDetails?.size || '0 MB'}
          icon="https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/305413e28a1a9e41d5a72ca608d050b13299d5685b8a76b382c89def542d04e7?apiKey=e8521392b64d4ca28efa899b1eeac3c3&"
          actionIcon="https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/33b5aa1794d20fa3e042f19a5a364fb842c23f06d4774f2df47465d15bc9d793?apiKey=e8521392b64d4ca28efa899b1eeac3c3&"
        />
        <div className="flex flex-col gap-4 mt-8">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              icon={message.type === 'assistant' 
                ? "https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/0677523cda3b4a0a82b474798f7cc166bcf59951f5b877047605fd4831275ee9?apiKey=e8521392b64d4ca28efa899b1eeac3c3&"
                : img              
              }
              title={message.type === 'assistant' ? "Chatbot " : "You"}
              message={message.content}
              actions={[
                "https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/decf7d5e30257d3c4a2517ff030f06fecba4bbd997bc3026ddafe1d90415195a?apiKey=e8521392b64d4ca28efa899b1eeac3c3&",
                "https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/58456de10bcc0084ef7fc9bf257ef9344d9ae00187b78bd826b9c7defe580ed8?apiKey=e8521392b64d4ca28efa899b1eeac3c3&"
              ]}             
            />
          ))}
          {isTyping && (
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="animate-bounce">●</div>
              <div className="animate-bounce delay-100">●</div>
              <div className="animate-bounce delay-200">●</div>
            </div>
          )}
        </div>
      </section>
      <ChatInput onSendMessage={handleSendMessage} />
    </main>
  );
};