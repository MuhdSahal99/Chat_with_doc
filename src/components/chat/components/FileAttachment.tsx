import * as React from 'react';
import { Icon } from '../Icon';
import { FileAttachmentProps } from '../types';

export const FileAttachment: React.FC<FileAttachmentProps> = ({
  fileName,
  fileSize,
  icon,
  actionIcon
}) => (
  <div className="flex flex-col justify-center self-end p-4 max-w-full text-xs bg-white rounded-xl border border-solid border-neutral-200 w-[494px]">
    <div className="flex justify-between items-start w-full max-md:max-w-full">
      <div className="flex gap-2 items-start min-w-[240px] max-md:max-w-full">
        <Icon src={icon} alt="File icon" className="shrink-0 w-9 aspect-square" />
        <div className="flex flex-col min-w-[240px] w-[394px]">
          <h3 className="font-semibold leading-5 text-neutral-950">{fileName}</h3>
          <p className="leading-none text-neutral-500">{fileSize}</p>
        </div>
      </div>
      <Icon src={actionIcon} alt="Action" className="shrink-0 w-6 aspect-square" />
    </div>
  </div>
);