import { ICookieObject } from "../components/globalTypes";
declare class CookieUtil {
    static createCookieObj(selection: string[], all?: string[]): ICookieObject;
    static readCookies(): ICookieObject | undefined;
    static writeCookies(cookieObject: ICookieObject): void;
}
export default CookieUtil;
