import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lab Grotesque Regular"', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        littlewide: '.01em',
      }
    },
  },
  plugins: [],
};
export default config;
