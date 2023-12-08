"use client"
import userstyles from "@/styles/usersPage.module.scss"

export default function TableHolder({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${userstyles["table-container"]}`}>
            <div className="w-[1037px] p-[30px]">
                <table className={`${userstyles.table}`}>
                    {children}
                </table>
            </div>
        </div>
    )
}


