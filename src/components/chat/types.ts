import { IconProps } from '../../types';

export interface ChatMessageProps {
  icon: string;
  title: string;
  message: string;
  actions: string[];
}

export interface FileAttachmentProps {
  fileName: string;
  fileSize: string;
  icon: string;
  actionIcon: string;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export interface Message {
  id: string;
  type: 'assistant' | 'user';
  content: string;
  timestamp: Date;
}

export interface FileDetails {
  name: string;
  size: string;
  type: string;
  id: string;
}