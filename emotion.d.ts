import '@emotion/react'
import { BreakPoints, Colors } from 'types/theme';


declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    breakpoints: BreakPoints
  }
}