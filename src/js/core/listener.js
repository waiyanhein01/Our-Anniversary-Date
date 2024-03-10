import { btnClickHandler } from "./handler"
import { btnClick } from "./selectors"

export const listener = () => {
    btnClick.addEventListener("click", btnClickHandler) 
}