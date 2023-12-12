'use client'
import {useState} from 'react'
import userstyles from "@/styles/usersPage.module.scss"
import DateSelector from './DateSelector';



type InputerProps = {
    name: string,
    placeholder: string,
    classname: string,
    operation?: (e: React.SyntheticEvent) => void,
    inputType?: string,
    handler: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    buttonClass?: string,
    displayState?: boolean,
    form?: string,
    selectOptions?: string[];
    value?: string;
    filterCalendar?: boolean;
    openFilterCalendar?: (isopen:boolean)=>void;
    handleFilterDate?:(date:string) => void
}

const Inputer: React.FC<InputerProps> = ({ name, handler, operation, classname, inputType = "text", buttonClass, displayState, placeholder, selectOptions = [], value = "", filterCalendar = false, openFilterCalendar, handleFilterDate }: InputerProps) => {
   
    if (inputType == "text" || inputType == "password") {
        return (
            <div className={`${classname} w-full filter-modal`}>
                <input onClick={()=>{if (typeof openFilterCalendar === "function") {openFilterCalendar(true)}}} value={value} className={`${classname}`} onChange={(e) => { handler?.(e) }} name={name} type={inputType} placeholder={placeholder} />
                <button onClick={(e) => { operation?.(e) }} className={`${buttonClass} ${name == "password" ? "" : "hidden"}`}>{displayState ? "SHOW" : "HIDE"}</button>
            </div>
        )
    }

    if (inputType == "select") {
        return (
            <div className={`${classname} w-full filter-modal`}>
                <select onClick={()=>{if (typeof openFilterCalendar === "function") {openFilterCalendar(true)}}}  name={name} onChange={(e) => { handler?.(e) }} value={value} className={`${classname} w-full outline-none borde`}>
                    {selectOptions.map((option, index) => {
                        if (option == value) {
                            return <option key={index} value={option} defaultValue={option}>{option}</option>
                        }
                        return <option key={index} value={option}>{option}</option>
                    })}
                </select>
            </div>
        )
    }

    if (inputType == "date") {
        return (
            <div className={`${classname} relative flex w-full filter-modal`}>
                <input value={value} className={`${classname}`} onChange={(e) => { handler?.(e) }} name={name} readOnly placeholder={placeholder} />
                <button onClick={()=>{if (typeof openFilterCalendar === "function") {openFilterCalendar(filterCalendar)}}} style={{backgroundImage: "url(../images/dashboard/calendar.svg)"}} className={`h-[16px] filter-modal w-[16px] relative`}>
                </button>
                    <div className={`absolute top-[30px] left-[-30px] w-[255px] z-10 bg-white h-[200px] rounded-[10px] filter-modal ${filterCalendar ? "" : "hidden"}`}>
                        <DateSelector handleFilterDate={handleFilterDate} />
                    </div>
            </div>
        )
    }
}

export default Inputer


