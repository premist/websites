import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lab Grotesque"', "'Gothic A1 LabGrtsqMatch'", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        littlewide: '0em',
      }
    },
  },
  plugins: [],
};
export default config;
