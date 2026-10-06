import { useId } from "react";

export function VSCodeLogo({ size = 48 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden>
      <mask id={`${id}m`} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100" style={{ maskType: "alpha" }}>
        <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M70.912 99.317a6.223 6.223 0 0 0 4.96-.19l20.589-9.907A6.25 6.25 0 0 0 100 83.587V16.413a6.25 6.25 0 0 0-3.539-5.632L75.874.874a6.226 6.226 0 0 0-7.104 1.21L29.355 38.041 12.187 25.01a4.162 4.162 0 0 0-5.318.236l-5.506 5.009a4.168 4.168 0 0 0-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 0 0 .004 6.162l5.506 5.01a4.162 4.162 0 0 0 5.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 0 0 2.143 1.4ZM75.015 27.3 45.11 50l29.906 22.701V27.3Z" />
      </mask>
      <g mask={`url(#${id}m)`}>
        <path fill="#0065A9" d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z" />
        <g filter={`url(#${id}a)`}>
          <path fill="#007ACC" d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z" />
        </g>
        <g filter={`url(#${id}b)`}>
          <path fill="#1F9CF0" d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z" />
        </g>
        <path fill={`url(#${id}c)`} fillRule="evenodd" clipRule="evenodd" opacity=".25" style={{ mixBlendMode: "overlay" }} d="M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.041 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z" />
      </g>
      <defs>
        <filter id={`${id}a`} x="-8.394" y="15.829" width="116.727" height="92.246" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="b" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4.167" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="overlay" in2="b" result="s" />
          <feBlend in="SourceGraphic" in2="s" />
        </filter>
        <filter id={`${id}b`} x="60.417" y="-8.076" width="47.917" height="116.151" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="b" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="4.167" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="overlay" in2="b" result="s" />
          <feBlend in="SourceGraphic" in2="s" />
        </filter>
        <linearGradient id={`${id}c`} x1="49.939" y1=".258" x2="49.939" y2="99.742" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export const WinFlag = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 22 20" aria-hidden style={{ filter: "drop-shadow(1px 1px 1px rgba(0,0,0,.45))" }}>
    <path fill="#f25022" d="M2 2.6C5 1 8 1.2 11 2.8L10 9.2C7 7.6 4 7.4 1 9Z" />
    <path fill="#7fba00" d="M12 3.3c3 1.6 6 1.8 9.5.2l-1 6.4c-3.3 1.6-6.4 1.4-9.5-.2Z" />
    <path fill="#00a4ef" d="M.8 10.2c3-1.6 6-1.4 9 .2l-1 6.4c-3-1.6-6-1.8-9-.2Z" />
    <path fill="#ffb900" d="M10.6 10.9c3.1 1.6 6.2 1.8 9.6.2l-1 6.4c-3.3 1.6-6.5 1.4-9.6-.2Z" />
  </svg>
);

export const RecycleBin = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
    <defs>
      <linearGradient id="rb-body" x1="0" x2="1">
        <stop offset="0" stopColor="#a9bdd6" />
        <stop offset=".35" stopColor="#eef4fb" />
        <stop offset=".7" stopColor="#c7d6e8" />
        <stop offset="1" stopColor="#7f97b8" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="44" rx="15" ry="2.5" fill="#000" opacity=".25" />
    <path d="M9 12h30l-3.2 30.5c-.2 1.5-5.6 2.5-11.8 2.5s-11.6-1-11.8-2.5Z" fill="url(#rb-body)" stroke="#5a7398" strokeWidth=".8" opacity=".95" />
    <g stroke="#8ea4c4" strokeWidth=".8" opacity=".8">
      <path d="M15 15l1.6 27M20 15.5l.6 28M28 15.5l-.6 28M33 15l-1.6 27" />
    </g>
    <ellipse cx="24" cy="12" rx="15" ry="4" fill="#dde8f5" stroke="#5a7398" strokeWidth=".8" />
    <ellipse cx="24" cy="12.3" rx="12.5" ry="2.6" fill="#7d93b4" />
    <g fill="#2f9e3c" stroke="#1b6b25" strokeWidth=".5">
      <path d="M20.5 22l3.5-4.5 3.5 4.5h-2l-1.5 2.3-1.5-2.3Z" />
      <path d="M28.6 25.4l1.6 5.5-5.6.6 1-1.6-1.8-2.4 2.7-.4Z" />
      <path d="M19.4 31.2l-5.3-1.8 3-4.8.4 1.9 2.9.4-1.4 2.4Z" />
    </g>
  </svg>
);

export const XPFolder = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <path d="M2 5.5C2 4.7 2.7 4 3.5 4h5l2 2h10c.8 0 1.5.7 1.5 1.5V19c0 .8-.7 1.5-1.5 1.5h-17C2.7 20.5 2 19.8 2 19Z" fill="#e9c85a" stroke="#b18a24" strokeWidth=".7" />
    <path d="M2 9h20v10c0 .8-.7 1.5-1.5 1.5h-17C2.7 20.5 2 19.8 2 19Z" fill="#fbe08a" stroke="#b18a24" strokeWidth=".7" />
  </svg>
);

export const GitHubMark = ({ size = 24, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill={color} aria-hidden>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
);

export const LinkedInMark = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <rect width="24" height="24" rx="4" fill="#0a66c2" />
    <path fill="#fff" d="M5.3 9.3h2.9v9.4H5.3Zm1.45-4.6a1.68 1.68 0 1 1 0 3.36 1.68 1.68 0 0 1 0-3.36Zm3.27 4.6h2.78v1.29h.04c.39-.73 1.33-1.5 2.75-1.5 2.94 0 3.48 1.93 3.48 4.45v5.16h-2.9v-4.57c0-1.09-.02-2.5-1.52-2.5-1.52 0-1.76 1.19-1.76 2.42v4.65h-2.9Z" />
  </svg>
);

export function FileIcon({ name }: { name: string }) {
  const ext = name.split(".").pop();
  const box = { width: 16, height: 16, display: "inline-grid", placeItems: "center", flex: "none" } as const;
  if (name === "package.json") return <span style={{ ...box, color: "#cc3e44", font: "700 8px/1 Arial, sans-serif" }}>npm</span>;
  if (name.toLowerCase() === "readme.md") return <i className="codicon codicon-info" style={{ ...box, color: "#519aba", fontSize: 14 }} />;
  if (ext === "md") return <i className="codicon codicon-markdown" style={{ ...box, color: "#519aba" }} />;
  if (ext === "pdf") return <i className="codicon codicon-file-pdf" style={{ ...box, color: "#f14c4c" }} />;
  if (ext === "json") return <i className="codicon codicon-json" style={{ ...box, color: "#cbcb41" }} />;
  if (ext === "tsx")
    return (
      <span style={box}>
        <svg width="15" height="15" viewBox="-12 -11 24 22" fill="none" stroke="#519aba" strokeWidth="1.3">
          <circle r="2" fill="#519aba" stroke="none" />
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
      </span>
    );
  return <span style={{ ...box, color: "#519aba", font: "700 9px/1 Arial, sans-serif", letterSpacing: -0.5 }}>TS</span>;
}

export const PdfDoc = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
    <defs>
      <linearGradient id="pdf-page" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#dfe6ef" />
      </linearGradient>
    </defs>
    <path d="M10 3h20l10 10v32H10Z" fill="url(#pdf-page)" stroke="#8a9bb3" strokeWidth="1" />
    <path d="M30 3v10h10" fill="#c9d4e3" stroke="#8a9bb3" strokeWidth="1" />
    <g stroke="#b7c3d4" strokeWidth="1.4">
      <path d="M15 19h20M15 23h20M15 27h14" />
    </g>
    <rect x="6" y="30" width="30" height="12" rx="2" fill="#d93025" stroke="#a51d14" strokeWidth=".8" />
    <text x="21" y="39.2" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="8.5" fill="#fff">PDF</text>
  </svg>
);

const FOLDER_COLORS: Record<string, string> = {
  ".vscode": "#42a5f5",
  cv: "#ef5350",
  docs: "#29b6f6",
  src: "#4caf50",
  config: "#26a69a",
  controllers: "#ffa726",
  models: "#ef5350",
  routes: "#66bb6a",
  services: "#fdd835",
  views: "#ab47bc",
};

export function FolderIcon({ name, open }: { name: string; open: boolean }) {
  const color = FOLDER_COLORS[name] ?? "#90a4ae";
  return (
    <span style={{ width: 16, height: 16, display: "inline-grid", placeItems: "center", flex: "none" }}>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
        {open ? (
          <>
            <path d="M1.5 3.5C1.5 2.95 1.95 2.5 2.5 2.5h3.6l1.4 1.5h5c.55 0 1 .45 1 1V6H4.2c-.4 0-.76.24-.92.6L1.5 11Z" fill={color} opacity=".75" />
            <path d="M3.3 6.6c.16-.36.52-.6.92-.6h10.2c.37 0 .6.38.45.71l-2.3 5.1c-.16.35-.51.59-.9.59H1.9c-.37 0-.61-.38-.46-.71Z" fill={color} />
          </>
        ) : (
          <path d="M1.5 3.5C1.5 2.95 1.95 2.5 2.5 2.5h3.6l1.4 1.5h6c.55 0 1 .45 1 1v6.5c0 .55-.45 1-1 1h-11c-.55 0-1-.45-1-1Z" fill={color} />
        )}
      </svg>
    </span>
  );
}
