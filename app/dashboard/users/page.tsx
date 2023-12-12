'use client'
import { useEffect, useState } from "react"
import ImageHolder from "@/components/ImageHolder"
import userstyles from "@/styles/usersPage.module.scss"
import Inputer from "@/components/Inputer"
import Link from "next/link"
import Paginator from "@/components/Paginator"
import axios from "axios"
import Selector from "@/components/Selector"
import { perPage } from '@/constants'
import TableHolder from "@/components/TableHolder"
import { usersTableHeaders } from "@/constants/tableMax"
import Row from "@/components/TableRow"
import { formatDate, formatFilterDate, removeDuplicates, filterUsers } from "@/constants/helpers"
import { redirect, useRouter } from 'next/navigation'


export default function Users() {
    const router = useRouter()
    const [users, setUsers] = useState<{ userData: [] }>({ userData: [] })
    const [filteredTable, setFilteredTable] = useState<any[]>([])
    const [currentItems, setCurrentItems] = useState<[]>([])
    const [pageCount, setPageCount] = useState<number>(0)
    const [itemOffset, setItemOffset] = useState<number>(0)
    const [itemsPerPage, setItemsPerPage] = useState<number>(10)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [detail, setActiveDetail] = useState<number | "">("")
    const [viewUser, setViewUser] = useState<{ user: {}, isView: boolean }>({ user: {}, isView: false })
    const [filterTabMargin, setFilterTabMargin] = useState<{ isOpen: boolean, margin: string, tab: string }>({ isOpen: false, margin: "", tab: "" })
    const [orgList, setOrgList] = useState<string[]>([])
    const [filters, setFilters] = useState<{ organization: string, username: string, email: string, date: string, phone: string, status: string }>({ organization: "", username: "", email: "", date: "", phone: "", status: "" })
    const [filterCalendar, setFilterCalendar] = useState<boolean>(false)
    const [total, setTotal]= useState<number | undefined>()

    useEffect(() => {
        const fetchData = async () => {
            let attempts = 0;
            const maxAttempts = 3;

            while (attempts < maxAttempts) {
                try {
                    const response = await axios.get(process.env.api as string);
                    setUsers({ ...users, userData: response.data });                    
                    const unfilteredOrgList = response.data.map((user: { organization: string }): string => user.organization || "")
                    const filteredOrgList = removeDuplicates(unfilteredOrgList)
                    filteredOrgList.unshift("")
                    setOrgList(filteredOrgList)
                    break;
                } catch (error) {
                    console.log(`Attempt ${attempts + 1} failed. Error:`, error);
                    attempts++;
                }
            }
        };

        fetchData();
        const theCurrentPage = localStorage.getItem("currentPage")
        if (theCurrentPage) {
            const newCurrentPage = JSON.parse(theCurrentPage)
            setCurrentPage(newCurrentPage)
        } else {
            localStorage.setItem("currentPage", "0")
            setCurrentPage(0)
        }

        const filterModalWatch = (e: MouseEvent) => {
            const eventTarget = e.target as HTMLElement
            if (eventTarget.classList.contains("filter-modal") || eventTarget.tagName.toLowerCase() == "abbr" ||
                eventTarget.classList.contains("react-calendar__navigation__arrow") || eventTarget.classList.contains("react-calendar__navigation__label__labelText")
            ) {
                return
            }
            handleFilterMargin(e as unknown as React.MouseEvent<any, MouseEvent>);
        };
        window.addEventListener("click", filterModalWatch)

        return () => {
            window.removeEventListener("click", filterModalWatch)
        }
    }, [])

    useEffect(() => {
        if(filteredTable.length > 0) {
            localStorage.setItem("users", JSON.stringify(filteredTable))
        } else if (users.userData.length > 0) {
            localStorage.setItem("users", JSON.stringify(users.userData))
        }
    }, [users, filteredTable])

    useEffect(() => {
        const usersFromLocalStorage = localStorage.getItem("users");
        const userArray = usersFromLocalStorage ? JSON.parse(usersFromLocalStorage) : [];
        const endOffset = itemOffset + itemsPerPage
        const newCurrent = userArray.slice(itemOffset, endOffset)
        setCurrentItems(newCurrent)
        setPageCount(Math.ceil(userArray.length / itemsPerPage))
        setTotal(userArray.length)
    }, [itemOffset, itemsPerPage, users, filteredTable])

    function handlePageClick(event: any) {
        localStorage.setItem("currentPage", event.selected.toString())
        setCurrentPage(event.selected)
        const usersFromLocalStorage = localStorage.getItem("users");
        const userArray = usersFromLocalStorage ? JSON.parse(usersFromLocalStorage) : [];
        const newOffset = (event.selected * itemsPerPage) % userArray.length;
        setItemOffset(newOffset);
    };

    const openFilterCalendar = (isOpen: boolean): void => {
        if (isOpen) {
            setFilterCalendar(false)
            return
        }
        setFilterCalendar(true)
    }

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setItemsPerPage(Number(e.currentTarget.value))
    }

    function handleFilterMargin(e: React.MouseEvent<any, MouseEvent>, margin?: string, tab?: string): void {
        e.stopPropagation()
        const eventTarget = e.target as HTMLElement
        if (!eventTarget.classList.contains("filter-modal")) {
            setFilterTabMargin({ ...filterTabMargin, isOpen: false })
            return
        }

        if (filterTabMargin.isOpen && tab == filterTabMargin.tab) {
            setFilterTabMargin({ ...filterTabMargin, isOpen: false })
            return
        }

        setFilterTabMargin({ ...filterTabMargin, isOpen: true, margin: margin as string, tab: tab as string })
    }

    function openDetail(e: React.MouseEvent<any, MouseEvent>, index?: any) {
        e.stopPropagation()

        const eventTarget = e.target as HTMLElement
        if (
            typeof index === "number" &&
            (eventTarget.classList.contains("details-button") ||
                (eventTarget instanceof HTMLButtonElement && eventTarget.classList.contains("details-button")))
        ) {
            setActiveDetail(index)
            return
        }
        setActiveDetail("")
    }

    function openUser(userId?: string): void {
        const storedUsersString = localStorage.getItem("users");

        if (storedUsersString) {
            const usersArray = JSON.parse(storedUsersString)
            const activeUser = usersArray.find((user: { _id: string }) => user._id == userId);
            localStorage.setItem("activeUser", JSON.stringify(activeUser))
            router.push('/dashboard/user/' + activeUser.id)
        } else {
            console.error("No users found in local storage");
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFilters({ ...filters, [e.currentTarget.name]: e.currentTarget.value })
    }

    const handleFilterDate = (date: string): void => {
        const filterDateFormatted = formatFilterDate(date)
        setFilters({ ...filters, date: filterDateFormatted })
    }

    const applyFilter = (reset: boolean): void => {
        // debugger
        if(reset) {
            setFilteredTable([])
            setFilterTabMargin({ ...filterTabMargin, isOpen: false })
            return
        }
        const filtered = filterUsers(users.userData, filters)
        if (filtered.length > 0) {
            setFilteredTable(filtered)
            setFilterTabMargin({ ...filterTabMargin, isOpen: false })
        }
    }

    return (
        <main className={`${userstyles.main}`}>

            <h2 className={`${userstyles["page-title"]}`}>
                Users
            </h2>

            {/* <div className={`${userstyles["card-holder"]}`}>
                <div className={`${userstyles.card}`}></div>
                <div className={`${userstyles.card}`}></div>
                <div className={`${userstyles.card}`}></div>
                <div className={`${userstyles.card}`}></div>
            </div> */}

            <TableHolder applyFilter={applyFilter} handleFilterDate={handleFilterDate} filterCalendar={filterCalendar} openFilterCalendar={openFilterCalendar} filterList={filters} filterChange={handleChange} orgList={orgList} filterModal={{ isOpen: filterTabMargin.isOpen, margin: filterTabMargin.margin, tab: filterTabMargin.tab }}>
                <thead>
                    <tr>
                        {usersTableHeaders.map((header: { name: string, filterMargin: string }, index: number) => {
                            if (header.name == "") {
                                return (
                                    <th key={index}>
                                        <div className="w-[50px]"></div>
                                    </th>
                                )
                            }
                            return (
                                <th key={index}>
                                    <button className="filter-modal relative" onClick={(e) => { handleFilterMargin(e, header.filterMargin, header.name) }}>
                                        <h2 className="filter-modal">
                                            {header.name}
                                        </h2>
                                        <div className="filter-modal">
                                            <ImageHolder className="filter-modal" filling={true} src="../images/dashboard/filter-results-button.svg" />
                                        </div>
                                    </button>
                                </th>
                            )
                        })}
                    </tr>
                </thead>

                <tbody>
                    {currentItems.map((user: any, index: number) => {
                        return <Row id={user._id} rowFunctions={{ view: openUser }} index={index} detail={detail} openDetail={openDetail} date={formatDate(user.registered)} email={user.email} phone={user.phone} status={user.status} username={user.username} organization={user.organization} table="users" />
                    })}
                </tbody>
            </TableHolder>

            <Paginator total={total} selectOptions={perPage} selectValue={itemsPerPage} handleSelectChange={handleSelectChange} handleClick={handlePageClick} count={pageCount} currentPage={currentPage} />
        </main>
    )
}
