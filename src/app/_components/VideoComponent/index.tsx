import React, { ReactNode } from 'react';
import classes from './index.module.scss';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  children?: ReactNode; // Allows children to overlay or add captions
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
     src,
     poster,
     controls = true,
     autoPlay = false,
     loop = false,
     muted = false,
     className = '',
     children,
   }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        className="w-full h-full object-cover"
      />
      {children && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
