/// <reference types="react" />
type TCss = React.CSSProperties;
type TBackgroundColor = TCss["backgroundColor"];
type TColor = TCss["color"];
interface IButtonStyle {
    primaryButtonStyle?: TCss;
    secondaryButtonStyle?: TCss;
}
interface ITextProps {
    headingColor?: TColor;
    paragraphColor?: TColor;
}

interface ICookieObject {
    [key: string]: boolean;
}
interface IButtonTexts {
    acceptButtonText?: string;
    declineButtonText?: string;
    managementButtonText?: string;
}
interface ICookieConsentProps extends ITextProps, IButtonTexts, IButtonStyle {
    onAccept?: (arg0?: ICookieObject) => void;
    onDecline?: () => void;
    infoContent?: JSX.Element;
    enableManagement?: boolean;
    cookieCategories?: string[];
    managementContent?: JSX.Element;
    accentColor?: TBackgroundColor;
    containerStyle?: React.CSSProperties;
}

declare const CookieModal: (props: ICookieConsentProps) => JSX.Element;

declare const CookieBanner: (props: ICookieConsentProps) => JSX.Element;

export { CookieBanner, CookieModal };
