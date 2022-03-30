import "styled-components";
import { defaultTheme } from "./theme";

declare module "styled-components" {
  type Theme = typeof defaultTheme;
  export interface DefaultTheme extends Theme {}
}
