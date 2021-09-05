import { Theme } from "@emotion/react";
import { BreakPoints } from "types/theme";

const breakpoints: BreakPoints= {
    sm: '@media(min-width: 640px)',
    md: '@media(min-width: 768px)',
    lg: '@media(min-width: 1024px)',
    xl: '@media(min-width: 1280px)',
    xxl: '@media(min-width: 1536px)',
  }

export const theme: Theme = {
  colors: {
    primary: '#E50914',
  },
  breakpoints
};