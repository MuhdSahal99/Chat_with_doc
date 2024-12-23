export interface UserProfile {
    name: string;
    email: string;
    avatar: string;
  }
  
  export interface ChatMessage {
    id: string;
    text: string;
    icon: string;
  }

  export interface ChatLayoutProps {
    children?: React.ReactNode;  // Make children optional
  }

  export interface IconProps {
    src: string;
    alt: string;
    className?: string;
  }