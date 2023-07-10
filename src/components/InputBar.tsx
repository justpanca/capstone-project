import { ChangeEventHandler } from "react";

interface inputText {
    design: string, 
    value: string, 
    onChange: ChangeEventHandler<HTMLInputElement>, 
    placeholder: string, 
    type: string, 
    testid: string, 
    children: JSX.Element,
}
const InputText = ({ design, value, onChange, placeholder, type, testid, children } : inputText) => {
    return (
        <div>
            <input className={design} type={type} value={value} onChange={onChange} placeholder={placeholder} data-testid={testid}/>
            {children}
        </div>
    )
}

export default InputText;