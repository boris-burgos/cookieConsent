import { useShowCookieConsent } from "../../util/useShowCC";
import { ICookieConsentProps } from "../globalTypes";
import {ManualCookieModal} from "./ManualCookieModal";

export const CookieModal = (props: ICookieConsentProps) => {
  const [show, setShow] = useShowCookieConsent();

  return (
    <ManualCookieModal {...props} show={show} setShow={setShow}/>
  );
};
