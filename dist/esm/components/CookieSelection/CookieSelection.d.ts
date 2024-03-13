import { Dispatch, SetStateAction } from "react";
interface ISelectionProp {
    selection: {
        get: string[];
        set: Dispatch<SetStateAction<string[]>>;
    };
}
interface ICookieSelectionProps extends ISelectionProp {
    categories?: string[];
}
declare const CookieSelection: ({ categories, selection }: ICookieSelectionProps) => JSX.Element;
export default CookieSelection;
