import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageTittle = (newtTttle) => {
    return (document.title = newtTttle);
}

export const ScrollTopRoute = () => {
    const locationLink = useLocation();
    useLayoutEffect (() => {
        document.documentElement.scrollTo(0,0);
    }, [locationLink.pathname]);
    return null;
}