import styled from "styled-components";
import View from "../View";
import {Container, FlexDiv, IAnimatedContainerProps, TextWrapper} from "../styledComponents";
import {ICookieConsentProps} from "../globalTypes";
import {Dispatch, SetStateAction} from "react";

const Backdrop = styled(FlexDiv)<IAnimatedContainerProps>`
    z-index: 1000;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    opacity: ${(props) => (props.show ? "1" : "0")};
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    transition: opacity 0.3s, visibility 0.3s;
`;

export const ManualCookieModal = (props: ICookieConsentProps & {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>
}) => {
  const {headingColor, paragraphColor, containerStyle, show, setShow} = props;

  return (
    <Backdrop show={show}>
      <Container style={containerStyle}>
        <TextWrapper
          headingColor={headingColor}
          paragraphColor={paragraphColor}
        >
          <View {...props} setShow={setShow} type="modal"/>
        </TextWrapper>
      </Container>
    </Backdrop>
  );
};

