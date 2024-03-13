/// <reference types="react" />
import { IButtonTexts } from "../globalTypes";
import { IButtonStyle, TBackgroundColor } from "../styledComponents";
export interface IButtonGroupProps extends IButtonTexts, IButtonStyle {
    callbacks: {
        accept: (all?: boolean) => void;
        decline: () => void;
    };
    toggleManageViewCallback: () => void;
    showManagementView: boolean;
    enableManagement?: boolean;
    accentColor?: TBackgroundColor;
    direction: "column" | "row";
}
declare const ButtonGroup: (props: IButtonGroupProps) => JSX.Element;
export default ButtonGroup;
