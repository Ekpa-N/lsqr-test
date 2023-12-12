"use client"
import userstyles from "@/styles/usersPage.module.scss"
import { filters } from "@/constants/menuTabs"
import Inputer from "./Inputer"

type FilterModalProps = {
    filterModal?: {
        isOpen?: boolean;
        margin?: string;
        tab?: string;
    };
    filterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    orgList?: string[];
    children: React.ReactNode;
    filterList: {
        [key: string]: string;
    }
    filterCalendar?: boolean;
    openFilterCalendar?:(isOpen:boolean)=> void;
    handleFilterDate?:(date:string)=>void;
    applyFilter?: (reset: boolean)=>void;
}

const TableHolder: React.FC<FilterModalProps> = ({ filterModal = { isOpen: false, margin: "" }, orgList, filterChange, children, filterList, filterCalendar = false, openFilterCalendar, handleFilterDate, applyFilter }) => {
    return (
        <div className={`${userstyles["table-container"]}`}>
            <div className="p-[30px] borde w-[1120px]">
                <table className={`${userstyles.table}`}>
                    {children}
                </table>
                <div id="filter" className={`${userstyles["filter-modal"]} ${userstyles[filterModal.margin as string]} ${filterModal.isOpen ? "flex" : "hidden"}`}>
                    {filters.map((filter, index) => {
                        return (
                            <div className={`${userstyles.filter} filter-modal`}>
                                <h2 className={`${userstyles.name} filter-modal`}>{filter.title}</h2>
                                <div className={`${userstyles["input-holder"]} filter-modal`}>
                                    <Inputer
                                        name={filter.name}
                                        placeholder={filter.title}
                                        classname="filter-modal"
                                        handler={filterChange}
                                        inputType={filter.type}
                                        selectOptions={filter.name == "organization" ? orgList : ["","Active", "Pending", "Inactive", "Blacklisted"]}
                                        value={filterList[filter.name]}
                                        filterCalendar={filterCalendar}
                                        openFilterCalendar={openFilterCalendar}
                                        handleFilterDate={handleFilterDate}                                        
                                    />
                                </div>
                            </div>
                        )
                    })}
                    <div className="flex mt-[10px] gap-[14px] ">
                        <button onClick={()=>{if(typeof applyFilter === "function"){applyFilter(true)}}} className={`${userstyles["reset-button"]} filter-modal`}>Reset</button>
                        <button onClick={()=>{if(typeof applyFilter === "function"){applyFilter(false)}}} className={`${userstyles["filter-button"]} filter-modal`}>Filter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableHolder


