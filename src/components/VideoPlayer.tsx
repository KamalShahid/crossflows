import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src?: string;
  poster: string;
  caption?: string;
}

export default function VideoPlayer({ src, poster, caption }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const hasSource = Boolean(src);

  const togglePlay = () => {
    if (!hasSource || !videoRef.current) {
      setIsPlaying((p) => !p);
      return;
    }
    if (videoRef.current.paused) {
      void videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const onTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (!duration) return;
    setProgress((currentTime / duration) * 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
    >
      <div className="relative aspect-video w-full">
        {hasSource ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted={isMuted}
            playsInline
            onTimeUpdate={onTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={poster}
            alt={caption ?? "Video preview"}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/40" />

        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Play video"
            className="absolute inset-0 m-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-accent)]/95 text-black shadow-[0_0_60px_rgba(0,212,255,0.5)] transition hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-full bg-[var(--color-accent)]/50 animate-soft-pulse" />
            <Play className="relative z-10 h-9 w-9 fill-current" aria-hidden="true" />
          </button>
        )}

        {caption && (
          <div className="pointer-events-none absolute left-6 top-6 z-10 flex flex-col gap-1 text-[var(--color-text-primary)]">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Watch Demo
            </span>
            <span className="font-display text-base font-semibold sm:text-lg">{caption}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 border-t border-[var(--color-border)] bg-[var(--color-bg)]/80 px-5 py-3 backdrop-blur-md">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-black transition hover:scale-105 active:scale-95"
        >
          {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
        </button>
        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-[var(--color-border)]">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[#7af9ff]"
            style={{ width: hasSource ? `${progress}%` : "0%" }}
          />
        </div>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition hover:text-[var(--color-text-primary)]"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </motion.div>
  );
}
