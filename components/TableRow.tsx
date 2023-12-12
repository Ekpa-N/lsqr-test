"use client"
import { useEffect, useState, useCallback } from 'react'
import userstyles from "@/styles/usersPage.module.scss"
import { detailsOptions } from '@/constants/menuTabs'
import ImageHolder from './ImageHolder'

type RowTypes = {
    organization?: string;
    username?: string;
    email?: string;
    phone?: string;
    date?: string;
    status?: string;
    table: string;
    detail?: any;
    index?: number | 0;
    openDetail: (e:React.MouseEvent<any, MouseEvent>, index?: number | 0 | "") => void;
    rowFunctions: {
        [key: string]: (id: string)=>void;
    };
    id: string;
}

const Row: React.FC<RowTypes> = ({ organization, username, email, phone, date, status, table, detail, index: userIndex, openDetail, rowFunctions, id }) => {

    useEffect(()=>{
        const handleWindowClick = (e: MouseEvent) => {
            if (openDetail) {
              openDetail(e as unknown as React.MouseEvent<any, MouseEvent>);
            }
          };
        window.addEventListener("click", handleWindowClick)
        
        return ()=> {
            window.removeEventListener("click", handleWindowClick)            
        }
    },[])


    function statusRow(status: string) {
        if (status == "Blacklisted") {
            return `${userstyles.blacklisted}`
        }
        if (status == "Inactive") {
            return `${userstyles.inactive}`
        }
        if (status == "Active") {
            return `${userstyles.active}`
        }
        if (status == "Pending") {
            return `${userstyles.pending}`
        }
    }


    if (table == "users") {
        return (
            <tr className={`${userstyles.row}`}>
                <td>{organization}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{date}</td>
                <td>
                    <div className={`${statusRow(status || "")}`}>
                        {status}
                    </div>
                </td>
                <td>
                    <button onClick={(e) => { openDetail(e, userIndex || 0) }} className={`${userstyles["row-button"]} details-button`}>
                        <div className='details-button'></div>
                        <div className='details-button'></div>
                        <div className='details-button'></div>
                    </button>
                </td>
                <div id='details' className={`${userstyles.details} ${detail === userIndex && typeof (userIndex) === "number" ? "flex" : "hidden"} className='details-button'`}>
                    {detailsOptions.map(({type, img, name}, index)=> {
                        return(
                            <button onClick={()=>{rowFunctions[type](id)}}>
                                <div className={`${userstyles.icon}`}>
                                    <ImageHolder filling={true} src={img} />
                                </div>
                                <h2>{name}</h2>
                            </button>
                        )
                    })}
                </div>
            </tr>
        )
    }
}

export default Row