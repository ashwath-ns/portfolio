import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

// ==========================================
// CATEGORY ICONS
// ==========================================

export function FrontendCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

export function BackendCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

export function DatabaseCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function LanguagesCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}

export function DevopsCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function DesignCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

export function AiCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
      <path d="M12 6v12M6 12h12" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

// ==========================================
// INDIVIDUAL TECHNOLOGY SVGS
// ==========================================

export function HtmlIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.956-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26" />
    </svg>
  );
}

export function CssIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.956-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#1572B6" />
    </svg>
  );
}

export function ReactIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function JavascriptIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path d="M6.71 18.29c.47.8 1.25 1.34 2.29 1.34 1.15 0 1.88-.58 1.88-1.42 0-.96-.75-1.32-2.02-1.87l-.7-.3c-2.02-.87-3.37-1.98-3.37-4.3 0-2.31 1.77-4.04 4.54-4.04 2 0 3.32.74 4.17 2.24l-2.02 1.3c-.45-.8-1.07-1.15-2.12-1.15-.99 0-1.63.53-1.63 1.22 0 .8.61 1.15 1.8 1.67l.7.3c2.42 1.04 3.73 2.1 3.73 4.5 0 2.65-2.05 4.22-4.99 4.22-2.73 0-4.32-1.2-5.07-2.65l2.04-1.26zm10.73-8.86v7.35c0 1.95-.94 2.82-2.52 2.82-.77 0-1.45-.18-1.92-.47l.45-1.93c.3.18.66.3 1.07.3.74 0 1.14-.38 1.14-1.47V9.43h1.78z" fill="#000" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
    </svg>
  );
}

export function NodejsIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.608l10.297 5.945v11.89L12 23.391 1.703 17.443V5.553L12 1.608zm-1.074 13.564c0 .356.126.634.379.833.253.198.6.297 1.042.297.433 0 .77-.099 1.011-.297.241-.199.362-.477.362-.833 0-.256-.075-.466-.226-.631-.15-.164-.349-.297-.597-.398a6.19 6.19 0 0 0-.853-.274 5.37 5.37 0 0 1-.989-.379 2.392 2.392 0 0 1-.773-.615 1.79 1.79 0 0 1-.318-1.121c0-.422.122-.797.366-1.125.244-.328.58-.582 1.009-.762.428-.18.92-.27 1.477-.27.567 0 1.066.096 1.498.288.432.192.766.456 1.003.792.237.336.355.727.355 1.173h-1.921c0-.285-.098-.507-.294-.666a1.082 1.082 0 0 0-.694-.239c-.27 0-.486.074-.648.222-.162.148-.243.342-.243.582 0 .221.074.402.222.543.148.141.341.258.579.351.238.093.504.186.798.279.434.138.815.304 1.144.498.329.194.587.44.774.738.187.298.28.672.28 1.122 0 .445-.128.842-.384 1.191a2.64 2.64 0 0 1-1.077.834c-.461.206-.998.309-1.61.309-.643 0-1.196-.109-1.658-.327a2.535 2.535 0 0 1-1.083-.918c-.26-.395-.39-.861-.39-1.398h1.928z" fill="#5FA04E" />
    </svg>
  );
}

export function ExpressIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 18.251l-4.001-5.642L23.704 7H20.42l-2.094 3.328L16.233 7h-3.326l3.633 5.485L12.441 18.25h3.284l2.193-3.606 2.215 3.606H24zm-14.777 0V7H6.046c-2.482 0-4.046 1.488-4.046 3.682 0 2.257 1.579 3.682 4.046 3.682h3.177v3.887H9.223zm-3.177-7.364c-1.127 0-1.785-.623-1.785-1.559 0-.962.658-1.56 1.785-1.56h3.177v3.119H6.046z" fill="#FFFFFF" />
    </svg>
  );
}

export function PythonIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.912 0c-1.536 0-3.003.136-4.095.38-2.615.586-3.082 1.8-3.082 4.103v2.999h7.323v1.026H4.735c-2.366 0-4.437 1.431-5.045 4.12-.702 3.087-.734 5.011 0 8.163.541 2.397 1.884 4.12 4.25 4.12h2.748v-3.714c0-2.69 2.29-4.908 5.044-4.908h5.045c.95 0 1.718-.767 1.718-1.718V4.483c0-2.303-.526-3.517-3.141-4.103C14.28.136 12.812 0 11.912 0zm-2.228 1.458a1.144 1.144 0 1 1 0 2.288 1.144 1.144 0 0 1 0-2.288z" fill="#3776AB" />
      <path d="M12.088 24c1.536 0 3.003-.136 4.095-.38 2.615-.586 3.082-1.8 3.082-4.103v-2.999h-7.323v-1.026h7.323c2.366 0 4.437-1.431 5.045-4.12.702-3.087.734-5.011 0-8.163-.541-2.397-1.884-4.12-4.25-4.12h-2.748v3.714c0 2.69-2.29 4.908-5.044 4.908H7.203c-.95 0-1.718.767-1.718 1.718v10.026c0 2.303.526 3.517 3.141 4.103 1.072.244 2.54.38 3.462.38zm2.228-1.458a1.144 1.144 0 1 1 0-2.288 1.144 1.144 0 0 1 0 2.288z" fill="#FFE873" />
    </svg>
  );
}

export function MongodbIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0s-4.92 6.643-4.92 12.06c0 4.298 2.87 7.747 6.84 8.788v2.09c0 .584.47.584.584.584.114 0 .584 0 .584-.584v-2.09c3.97-1.04 6.84-4.49 6.84-8.788C21.92 6.643 17 0 17 0h-5zm.143 19.349v-6.732s.642.06 1.134-.41c.49-.47.674-1.258.674-1.258s-.68.225-1.257.06c-.577-.164-.551-.595-.551-.595V3.136s3.83 5.485 3.83 9.42c0 3.39-2.094 6.136-3.83 6.793z" fill="#47A248" />
    </svg>
  );
}

export function MysqlIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.53 10.98c-.46 0-.82.35-.82.8 0 .44.36.79.82.79.45 0 .81-.35.81-.79 0-.45-.36-.8-.81-.8zm-7.06 0c-.45 0-.81.35-.81.8 0 .44.36.79.81.79.46 0 .82-.35.82-.79 0-.45-.36-.8-.82-.8zm12.39-4.88c-.68-.69-1.95-1.12-3.41-1.12-2.18 0-3.92.93-4.71 2.37-1.02-.92-2.38-1.42-3.87-1.42-3.17 0-5.74 2.36-5.74 5.27 0 2.2 1.48 4.09 3.56 4.9 1.12 1.94 3.23 3.23 5.66 3.23 2.05 0 3.88-.93 5.06-2.4 1.83.67 3.51.5 4.54-.42 1.09-.98 1.17-2.67.24-4.57.94-1.74.88-3.94-.48-5.84zm-4.77 10.59c-1.63 0-3.07-.94-3.77-2.31 1.25-.66 2.11-1.94 2.11-3.43 0-.77-.23-1.48-.63-2.09.55-.95 1.62-1.57 2.82-1.57 1.07 0 2.02.32 2.52.82 1.07 1.49 1.11 3.27.35 4.67 1.02 2.08.38 3.19-.51 3.65-.77.41-1.79.45-2.89.26z" fill="#00758F" />
    </svg>
  );
}

export function CplusplusIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.38 10.74h-1.89V8.85h-1.28v1.89h-1.89v1.28h1.89v1.89h1.28v-1.89h1.89v-1.28zm-6.66 0h-1.89V8.85h-1.28v1.89h-1.89v1.28h1.89v1.89h1.28v-1.89h1.89v-1.28zM11.97 0L1.62 5.97v12.06L11.97 24l10.35-5.97V5.97L11.97 0zm8.01 16.59l-8.01 4.62-8.01-4.62V7.41l8.01-4.62 8.01 4.62v9.18z" fill="#00599C" />
    </svg>
  );
}

export function GitIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.72.72.72 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.719.72.719 1.884 0 2.604-.719.719-1.883.719-2.6 0-.719-.72-.719-1.884 0-2.604.173-.173.37-.3.581-.382V8.909c-.211-.082-.408-.209-.581-.382-.542-.542-.676-1.341-.401-2.001L7.52 3.816.454 10.882c-.604.604-.604 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.188 0l10.424-10.424c.604-.604.604-1.582 0-2.194z" fill="#F05032" />
    </svg>
  );
}

export function GithubIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#FFFFFF" />
    </svg>
  );
}

export function AwsIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.763 10.035c0 .362.052.687.155.975.103.288.257.543.46.765.205.223.46.4.767.531.307.13.66.196 1.059.196.44 0 .822-.075 1.144-.226.323-.15.596-.347.818-.59.222-.244.389-.526.501-.847.112-.321.168-.654.168-1h2.247c0 .762-.152 1.442-.455 2.04-.303.599-.724 1.103-1.263 1.513-.538.41-1.183.715-1.934.914-.75.2-1.564.3-2.441.3-1.042 0-1.954-.153-2.737-.46-.782-.307-1.424-.741-1.925-1.302C2.88 12.316 2.5 11.64 2.308 10.86c-.19-.78-.286-1.608-.286-2.484 0-.877.096-1.704.286-2.484.192-.78.572-1.456 1.14-2.027.568-.57 1.258-.999 2.07-1.286.812-.287 1.704-.43 2.676-.43 1.05 0 1.957.172 2.72.516.763.344 1.385.814 1.866 1.41.48.596.822 1.295 1.024 2.096.202.802.303 1.666.303 2.593v.811H6.763v-.539zm0-2.308h4.591c-.045-.5-.164-.933-.357-1.3-.193-.367-.442-.663-.747-.888-.305-.225-.658-.382-1.059-.472-.401-.09-.817-.135-1.248-.135-.472 0-.904.067-1.295.202-.391.135-.724.326-.999.573-.275.247-.484.543-.627.888-.143.345-.221.722-.234 1.132zM18.847 18.066c-2.887 2.128-7.086 3.254-10.669 3.254-5.02 0-9.537-1.854-12.92-4.957-.267-.245-.027-.58.303-.393 3.659 2.08 8.239 3.328 12.924 3.328 3.176 0 6.697-.68 9.774-2.092.463-.212.855.335.588.86zm1.189-1.474c-.375-.48-2.483-.228-3.435-.114-.287.035-.333-.218-.075-.398 1.67-1.16 4.398-.829 4.717-.435.321.393-.119 3.141-1.681 4.463-.241.204-.474.095-.367-.172.353-.88 1.216-2.864.841-3.344z" fill="#FF9900" />
    </svg>
  );
}

export function JenkinsIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.328 4.22c.981 0 1.776.795 1.776 1.776 0 .981-.795 1.776-1.776 1.776-.981 0-1.776-.795-1.776-1.776 0-.981.795-1.776 1.776-1.776zM7.545 19.34c-.818 0-1.481-.663-1.481-1.481 0-.818.663-1.481 1.481-1.481.818 0 1.481.663 1.481 1.481 0 .818-.663 1.481-1.481 1.481zm8.91 0c-.818 0-1.481-.663-1.481-1.481 0-.818.663-1.481 1.481-1.481.818 0 1.481.663 1.481 1.481 0 .818-.663 1.481-1.481 1.481z" fill="#D24939" />
    </svg>
  );
}

export function DockerIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm0 2.714h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.956 0h2.12a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm8.84 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zM.008 12.831c0 2.21 1.77 5.6 5.86 5.6 4.38 0 7.82-1.74 9.87-4.14 2.66-.2 5.09-1.92 5.76-3.83.1-.28-.15-.55-.43-.45-1.12.38-2.61.35-3.53-.16a4.42 4.42 0 00-1.85-.36c-1.39 0-2.48.51-3.23 1.25H.25a.24.24 0 00-.24.24v1.85z" fill="#2496ED" />
    </svg>
  );
}

export function FigmaIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83" />
      <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF" />
      <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E" />
      <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262" />
      <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE" />
    </svg>
  );
}

export function CanvaIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.3 16.5c-2.4 0-4.5-1.5-5.4-3.6-.3-.6-.5-1.3-.5-2.1 0-2.4 1.8-4.3 4.2-4.3 1.8 0 3.3 1.1 3.9 2.7.2.5.3 1.1.3 1.7 0 .5-.1 1-.3 1.4l-1.1-1.1c.1-.2.2-.5.2-.8 0-.8-.6-1.5-1.5-1.5-1.1 0-2 1.1-2 2.6 0 1.3.7 2.3 1.8 2.3.9 0 1.6-.6 1.9-1.4l1.2.6c-.6 1.7-2.3 2.9-4.7 2.9z" fill="#00C4CC" />
    </svg>
  );
}

export function GoogleStitchIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#stitch-grad)" />
      <defs>
        <linearGradient id="stitch-grad" x1="2" y1="2" x2="22" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.33" stopColor="#EA4335" />
          <stop offset="0.66" stopColor="#FBBC05" />
          <stop offset="1" stopColor="#34A853" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ChatgptIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9 6.0651 6.0651 0 0 0-4.981-2.4981 6.002 6.002 0 0 0-5.744 4.1436 6.0462 6.0462 0 0 0-4.103 2.894 6.0462 6.0462 0 0 0 .5157 6.5098 5.9847 5.9847 0 0 0 .5157 4.9108 6.0462 6.0462 0 0 0 6.5098 2.9 6.0651 6.0651 0 0 0 4.981 2.4981 6.002 6.002 0 0 0 5.744-4.1436 6.0462 6.0462 0 0 0 4.103-2.894 6.0462 6.0462 0 0 0-.5157-6.5098zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0406l.1419-.0814 4.7792-2.7582a.7952.7952 0 0 0 .3927-.6813v-6.7369l2.0228 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4982 4.4955zm-8.86-4.3146a4.4755 4.4755 0 0 1-.5355-3.0037l.142.0825 4.7792 2.7582a.7952.7952 0 0 0 .7854 0l5.8344-3.3685v2.3366a.071.071 0 0 1-.0273.0581l-4.8347 2.7915a4.504 4.504 0 0 1-6.1435-1.6547zm-1.0825-9.866a4.4755 4.4755 0 0 1 2.3409-1.9631v.163l0 5.5164a.7952.7952 0 0 0 .3927.6813l5.8344 3.3685-2.0228 1.1683a.071.071 0 0 1-.0653.0061L4.85 14.789a4.504 4.504 0 0 1-1.6453-6.1404zm16.497 3.6393l-5.8344-3.3685 2.0228-1.1683a.071.071 0 0 1 .0653-.0061l4.8347 2.7915a4.5013 4.5013 0 0 1 .5382 7.7957v-.163l0-5.5164a.7952.7952 0 0 0-.3927-.6813zm2.012-3.0763a4.4755 4.4755 0 0 1 .5355 3.0037l-.142-.0825-4.7792-2.7582a.7952.7952 0 0 0-.7854 0l-5.8344 3.3685v-2.3366a.071.071 0 0 1 .0273-.0581l4.8347-2.7915a4.504 4.504 0 0 1 6.1435 1.6547z" fill="#10A37F" />
    </svg>
  );
}

export function ClaudeIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7.5h2v5z" fill="#D97757" />
    </svg>
  );
}

export function GeminiIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-grad)" />
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A73E8" />
          <stop offset="0.5" stopColor="#8AB4F8" />
          <stop offset="1" stopColor="#C58AF9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function KimiIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 15h-2v-4H9v-2h4v6zm0-8h-2V7h2v2z" fill="#0066FF" />
    </svg>
  );
}

export function GrokIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#FFFFFF" />
    </svg>
  );
}

export function DeepseekIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" fill="#4D6BFE" />
    </svg>
  );
}

// Helper Map for dynamic lookup
export const techIconMap: Record<string, React.FC<IconProps>> = {
  HTML: HtmlIcon,
  CSS: CssIcon,
  React: ReactIcon,
  JavaScript: JavascriptIcon,
  "Tailwind CSS": TailwindIcon,
  "Node.js": NodejsIcon,
  "Express.js": ExpressIcon,
  Python: PythonIcon,
  MongoDB: MongodbIcon,
  MySQL: MysqlIcon,
  "C++": CplusplusIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  AWS: AwsIcon,
  Jenkins: JenkinsIcon,
  Docker: DockerIcon,
  Figma: FigmaIcon,
  Canva: CanvaIcon,
  "Google Stitch": GoogleStitchIcon,
  ChatGPT: ChatgptIcon,
  Claude: ClaudeIcon,
  Gemini: GeminiIcon,
  Kimi: KimiIcon,
  Grok: GrokIcon,
  DeepSeek: DeepseekIcon,
};
