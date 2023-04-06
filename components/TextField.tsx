
import { useState, useEffect } from "react"
import ImageHolder from "./Image_Holder"

type Props = {
    placeHolder?: string,
    type?: string,
    value?: string | number,
    handler: Function
    selectOptions?: [],
    char?: string,
    name?: string
}


export default function Textfield({ type = "text", char = "textField", value, name, handler, selectOptions, placeHolder }: Props) {

    if (char == "textField") {
        return (
            <>
            <input placeholder={placeHolder} type={type} name={name} onChange={(e) => {handler(e)}} value={value}  className={`h-[100%] px-[16px] w-[inherit] outline-none rounded-[inherit]`} />
            </>
        )
    }

    return null



    // if (type == "select") {
    //     return (
    //         <div className="flex items-center relative h-full group justify-center w-full  rounded-[inherit]">
    //             <label className="text-[12px] font-[400] top-[-10px] left-[45px] font-interegular absolute w-fit text-[#777777] bg-[white] px-[4px]">{title}</label>
    //             <select value={value}  name={name} onChange={(e) => { formEdit(e) }} className={`h-full outline-none pl-[25px] font-interegular text-[14px] font-[400] rounded-[10px] ${bg} w-[95%] rounded-[inherit]`}>
    //                 {selectOptions.map((option, index) => {
    //                     if (option == value) {
    //                         console.log("The option: ", option)
    //                         console.log("The value: ", value)
    //                         return <option key={index} value={option} selected>{option}</option>
    //                     }
    //                     return <option key={index} value={option}>{option}</option>
    //                 })}
    //             </select>
    //         </div>
    //     )
    // }
    // if (type == "pageSize") {
    //     return (
    //         <div className="flex items-center relative h-full group justify-center w-full  rounded-[inherit]">
    //             <label className="text-[12px] font-[400] top-[-10px] left-[45px] font-interegular absolute w-fit text-[#777777] bg-[white] px-[4px]">{title}</label>
    //             <select name={name} onChange={(e) => { formEdit(e, "size") }} className={`h-full cursor-pointer outline-none pl-[25px] font-pushpennyBook text-[22px] font-[400] rounded-[10px] leading-[28px] ${bg} w-[95%] rounded-[inherit]`}>
    //                 {selectOptions.map((option, index) => {
    //                     if (option == value) {
    //                         return <option key={index} value={option} defaultValue>{option}</option>
    //                     }
    //                     return <option key={index} value={option}>{option}</option>
    //                 })}
    //             </select>
    //         </div>
    //     )
    // }

    // if (type == "pageSelect") {
    //     return (
    //         <div className="flex items-center relative h-full group justify-center w-full  rounded-[inherit]">
    //             <input type="number" onChange={(e) => { formEdit(e, "size") }} value={value} className={`h-full outline-none pl-[25px] font-pushpennyBook text-[22px] font-[400] rounded-[10px] leading-[28px] ${bg} w-[95%] rounded-[inherit]`} />
    //         </div>
    //     )
    // }
    // if (type == "textbox") {
    //     return (
    //         <div className="w-full h-full rounded-[inherit] bg-[#FFFFFF]">
    //             <label className="absolute font-pushpennyMedium ml-[15px] text-[10px] left-[45px] top-[-7px] h-[13px] text-[#6E7883] bg-[#FFFFFF] px-[3px]">{title || "Reason for action"}</label>
    //             <textarea name={name} onChange={(e) => {formEdit(e)}} className={`h-full w-full rounded-[inherit] ${bg || "bg-[#F3F3F3]"} outline-none px-[10px] py-[10px]`}></textarea>
    //         </div>
    //     )
    // }

    // if (type == "readonly") {
    //     return (
    //         <div className="flex items-center relative h-full group justify-center w-full  rounded-[inherit]">
    //             <label className="text-[12px] font-[400] top-[-10px] left-[45px] font-interegular absolute w-fit text-[#777777] bg-[#FFFFFF] px-[4px]">{title}</label>
    //             <input readOnly type={charType || "text"} name={name} onChange={(e) => { formEdit(e) }} value={value} className={`h-full outline-none pl-[25px] font-interegular text-[14px] font-[400] rounded-[10px] ${bg} w-[95%] rounded-[inherit]`} />
    //         </div>
    //     )
    // }
}