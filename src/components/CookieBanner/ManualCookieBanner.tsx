import View from "../View";
import {Banner, TextWrapper} from "../styledComponents";
import {ICookieConsentProps} from "../globalTypes";
import {Dispatch, SetStateAction} from "react";

export const ManualCookieBanner = (props: ICookieConsentProps & {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>
}) => {
  const {headingColor, paragraphColor, containerStyle, show, setShow} = props;

  return (
    <Banner style={containerStyle} show={show}>

      <TextWrapper
        headingColor={headingColor}
        paragraphColor={paragraphColor}
      >
        <View {...props} setShow={setShow} type="banner"/>
      </TextWrapper>

    </Banner>
  );
};

