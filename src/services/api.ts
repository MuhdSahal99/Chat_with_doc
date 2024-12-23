const API_BASE_URL = 'http://localhost:8000/api';

export interface UploadResponse {
  file_id: string;
  status: string;
  message: string;
}

export interface ChatResponse {
  answer: string;
  conversation_id: string;
}

export class ApiService {
  static async uploadDocument(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error uploading document:', error);
      throw error;
    }
  }

  static async sendMessage(question: string, conversationId?: string): Promise<ChatResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          conversation_id: conversationId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Chat failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}