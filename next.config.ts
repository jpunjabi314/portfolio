import type { NextConfig } from "next";

const RESUME_FILE = "/Jatin_Punjabi_Internship_Resume.pdf";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/resume", destination: RESUME_FILE }];
  },
  async headers() {
    return [
      {
        source: "/resume",
        headers: [{ key: "Content-Disposition", value: 'inline; filename="Jatin_Punjabi_Resume.pdf"' }],
      },
    ];
  },
};

export default nextConfig;
