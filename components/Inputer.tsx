


type InputerProps = {
    name: string,
    placeholder: string,
    classname: string,
    operation?: (e:React.SyntheticEvent)=> void,
    inputType?: string,
    handler: (e:React.ChangeEvent<HTMLInputElement>)=> void,
    buttonClass?: string,
    displayState?: boolean
}

const Inputer: React.FC<InputerProps> = ({name, handler, operation, classname, inputType="text", buttonClass, displayState, placeholder}:InputerProps) => {
    return (
       <div className={`${classname}`}>
        <input onChange={(e)=>{handler?.(e)}} name={name} type={inputType} placeholder={placeholder} />
        <button onClick={(e)=>{operation?.(e)}} className={`${buttonClass} ${name == "password" ? "" : "hidden"}`}>{displayState ? "SHOW" : "HIDE"}</button>
       </div>
    )
}


export default Inputer

