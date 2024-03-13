import { Dispatch, SetStateAction } from "react";
import { ICookieConsentProps } from "../globalTypes";
interface IViewProps extends ICookieConsentProps {
    setShow: Dispatch<SetStateAction<boolean>>;
    type: "banner" | "modal";
}
declare const View: (props: IViewProps) => JSX.Element;
export default View;
