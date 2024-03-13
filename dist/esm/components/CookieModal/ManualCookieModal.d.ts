import { ICookieConsentProps } from "../globalTypes";
import { Dispatch, SetStateAction } from "react";
export declare const ManualCookieModal: (props: ICookieConsentProps & {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}) => JSX.Element;
