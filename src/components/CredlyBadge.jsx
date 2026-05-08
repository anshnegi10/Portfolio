import React, { useState } from "react";
import { ExternalLink, Award } from "lucide-react";

const CredlyBadge = ({ title, issuer = "Credly", href, imageSrc }) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/7 h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
      <div className="relative p-4 sm:p-5 h-full flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#030014] aspect-square flex items-center justify-center">
          {!loaded && !hasError && (
            <div className="absolute inset-0 animate-pulse bg-white/5" />
          )}
          {imageSrc && !hasError ? (
            <img
              src={imageSrc}
              alt={title}
              onLoad={() => setLoaded(true)}
              onError={() => setHasError(true)}
              className={`w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.05] ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-300">
              <Award className="w-12 h-12 text-indigo-400 opacity-50" />
              <span className="text-[11px] font-medium uppercase tracking-wider opacity-40">Badge Preview</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-30" />
        </div>

        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-300/70">
            {issuer}
          </p>
          <h3 className="text-sm sm:text-base font-semibold text-white leading-snug line-clamp-2">
            {title}
          </h3>
        </div>

        <div className="mt-auto pt-2 inline-flex items-center gap-2 text-sm text-indigo-300 group-hover:text-white transition-colors">
          <span>Verify badge</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </a>
  );
};

export default CredlyBadge;
