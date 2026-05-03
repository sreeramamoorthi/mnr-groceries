import { useContext } from "react";
export const Display = () => {
    const {language}=useContext(LanguageContext);
    return (
        <div>
            {language==="en" ? <h1>Hello World</h1> : <h1>vankkam</h1>}
        </div>
    )
}