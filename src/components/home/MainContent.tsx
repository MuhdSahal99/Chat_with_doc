import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiService } from '../../services/api';

interface MainContentProps {
  onFileUpload: (file: File) => void;
}

export function MainContent({ onFileUpload }: MainContentProps) {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = React.useState<number>(0);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'application/pdf' || 
        file.type === 'application/msword' || 
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setSelectedFile(file);
      handleUploadProcess(file);
    }
  }, []);

  const handleFileInput = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      handleUploadProcess(file);
    }
  }, []);

  const handleUploadProcess = async (file: File) => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    try {
      // Call the API to upload the file
      const response = await ApiService.uploadDocument(file);

      // Create file details object
      const fileDetails = {
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        type: file.type,
        id: response.file_id // Store the file_id from response
      };

      // Wait for progress to complete
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Navigate to chat page with file details
      navigate('/chat', { state: { fileDetails } });
    } catch (error) {
      console.error('Upload failed:', error);
      clearInterval(interval);
      setUploadProgress(0);
      setSelectedFile(null);
      // You could add error state handling here
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col self-center mt-36 max-w-full w-[560px] max-md:mt-10">
      <div className="flex flex-col w-full text-center max-md:max-w-full">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/09eacf6ed47ff6af8c403501ad8de387f14f228e18479e6e78851d081c84e81f?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" 
          alt="Upload illustration"
          className="object-contain self-center max-w-full aspect-square w-[120px]" 
        />
        <div className="flex flex-col items-center mt-6 w-full max-md:max-w-full">
          <div className="flex flex-col items-start max-w-full w-[463px]">
            <h1 className="text-xl font-bold leading-relaxed text-stone-900 max-md:max-w-full">
              Turn Any PDF Into a Knowledge Hub in Seconds
            </h1>
            <p className="mt-2 text-sm leading-5 text-neutral-500 max-md:max-w-full">
              Upload your PDF and get instant answers to your questions.
            </p>
          </div>
        </div>
      </div>
      <div 
        className={`flex overflow-hidden gap-3 justify-center items-center self-center p-6 mt-6 max-w-full bg-white border-2 border-dashed w-[470px] max-md:px-5 transition-all duration-200 ${
          isDragging 
            ? 'border-purple-600 bg-purple-50' 
            : selectedFile 
              ? 'border-green-500' 
              : 'border-gray-300'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDrag}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        role="button"
        tabIndex={0}
      >
        <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div 
            className={`flex gap-2.5 justify-center items-center self-center px-2.5 w-11 h-11 cursor-pointer transition-all duration-200 ${
              selectedFile ? 'bg-green-100' : 'bg-neutral-100'
            } min-h-[44px] rounded-[50px] hover:bg-purple-100`}
            onClick={handleIconClick}
          >
            {selectedFile ? (
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/e8521392b64d4ca28efa899b1eeac3c3/a2ebf98e04493b486607102dc481f461b0ad4505d6d04dad16b8b9d48bf8f262?apiKey=e8521392b64d4ca28efa899b1eeac3c3&" 
                alt="Upload icon"
                className="object-contain self-stretch my-auto w-6 aspect-square" 
              />
            )}
          </div>
          <div className="flex flex-col mt-4 w-full leading-none max-md:max-w-full">
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileInput}
              accept=".pdf,.doc,.docx"
            />
            {selectedFile ? (
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-green-600">{selectedFile.name}</span>
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-purple-600 rounded-full transition-all duration-200"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="flex gap-1 justify-center items-center w-full text-sm max-md:max-w-full">
                  <span className="text-purple-600 cursor-pointer hover:text-purple-700">Click to upload</span>
                  <span className="self-stretch my-auto text-slate-600">or drag and drop</span>
                </div>
                <div className="text-xs text-center text-gray-400 mt-2 max-md:max-w-full">
                  PDF, Doc or Word (Max. File size: 200 MB)
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}