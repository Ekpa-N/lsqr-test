"use client"

import userstyles from "@/styles/usersPage.module.scss"

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
    openDetail: (index: number | 0)=> void
}

const Row: React.FC<RowTypes> = ({ organization, username, email, phone, date, status, table, detail, index, openDetail }) => {

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
                <td >
                <div className={`${statusRow(status || "")}`}>
                    {status}
                </div>
                </td>
                <td>
                    <button onClick={()=>{openDetail(index || 0)}} className={`${userstyles["row-button"]}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </td>
                <div className={`${userstyles.details} ${detail === index && typeof(index) === "number"? "flex" : "hidden"}`}></div>
            </tr>
        )
    }
}

export default Row