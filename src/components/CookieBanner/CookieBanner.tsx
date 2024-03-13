import {useShowCookieConsent} from "../../util/useShowCC";
import {ICookieConsentProps} from "../globalTypes";
import {ManualCookieBanner} from "./ManualCookieBanner";

export const CookieBanner = (props: ICookieConsentProps) => {
  const [show, setShow] = useShowCookieConsent();

  return (
    <ManualCookieBanner {...props} show={show} setShow={setShow}/>
  );
};

