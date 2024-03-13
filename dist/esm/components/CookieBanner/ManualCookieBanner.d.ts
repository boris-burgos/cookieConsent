import { ICookieConsentProps } from "../globalTypes";
import { Dispatch, SetStateAction } from "react";
export declare const ManualCookieBanner: (props: ICookieConsentProps & {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}) => JSX.Element;
