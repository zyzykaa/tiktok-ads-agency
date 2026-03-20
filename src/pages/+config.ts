import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "TikTok Ads Agency",
  favicon: "/favicon.png?v=2",
  extends: [vikeReact]
} satisfies Config;
