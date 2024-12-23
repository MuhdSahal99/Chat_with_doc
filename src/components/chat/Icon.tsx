import * as React from 'react';
import { IconProps } from '../../types';

export const Icon: React.FC<IconProps> = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain ${className}`}
  />
);