/// <reference types="react" />
type TCss = React.CSSProperties;
export type TBackgroundColor = TCss["backgroundColor"];
type TColor = TCss["color"];
type TFlexDirection = TCss["flexDirection"];
type TJustify = TCss["justifyContent"];
type TAlign = TCss["alignItems"];
interface IFlexDivProps {
    flexDirection?: TFlexDirection;
    justify?: TJustify;
    align?: TAlign;
}
interface IBaseButtonProps {
    backgroundColor?: TBackgroundColor;
    small?: boolean;
}
export interface IButtonStyle {
    primaryButtonStyle?: TCss;
    secondaryButtonStyle?: TCss;
}
export interface ITextProps {
    headingColor?: TColor;
    paragraphColor?: TColor;
}
export interface IAnimatedContainerProps {
    show: boolean;
}
export declare const FlexDiv: import("styled-components").StyledComponent<"div", any, IFlexDivProps, never>;
export declare const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Banner: import("styled-components").StyledComponent<"div", any, IAnimatedContainerProps, never>;
export declare const BaseButton: import("styled-components").StyledComponent<"button", any, IBaseButtonProps, never>;
export declare const TextWrapper: import("styled-components").StyledComponent<"span", any, ITextProps, never>;
export {};
