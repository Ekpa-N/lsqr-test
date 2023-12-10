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
import { formatDate } from "@/constants/helpers"
import { redirect, useRouter } from 'next/navigation'


export default function Users() {
    const router = useRouter()
    const [users, setUsers] = useState<{ userData: [] }>({ userData: [] })
    const [currentItems, setCurrentItems] = useState<[]>([])
    const [pageCount, setPageCount] = useState<number>(0)
    const [itemOffset, setItemOffset] = useState<number>(0)
    const [itemsPerPage, setItemsPerPage] = useState<number>(10)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [detail, setActiveDetail] = useState<number | "">("")
    const [viewUser, setViewUser] = useState<{ user: {}, isView: boolean }>({ user: {}, isView: false })
    // const endOffset = itemOffset + itemsPerPage;
    // const currentItems = data.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        const fetchData = async () => {
            let attempts = 0;
            const maxAttempts = 3;

            while (attempts < maxAttempts) {
                try {
                    const response = await axios.get(process.env.api as string);
                    setUsers({ ...users, userData: response.data });
                    break;
                } catch (error) {
                    console.log(`Attempt ${attempts + 1} failed. Error:`, error);
                    attempts++;
                }
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        if (users.userData.length > 0) {
            localStorage.setItem("users", JSON.stringify(users.userData))
        }
    }, [users])

    useEffect(() => {
        const usersFromLocalStorage = localStorage.getItem("users");
        const userArray = usersFromLocalStorage ? JSON.parse(usersFromLocalStorage) : [];
        const endOffset = itemOffset + itemsPerPage
        const newCurrent = userArray.slice(itemOffset, endOffset)
        setCurrentItems(newCurrent)
        setPageCount(Math.ceil(users.userData.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, users])

    const handlePageClick = (event: any) => {
        setCurrentPage(event.selected)
        const usersFromLocalStorage = localStorage.getItem("users");
        const userArray = usersFromLocalStorage ? JSON.parse(usersFromLocalStorage) : [];
        const newOffset = (event.selected * itemsPerPage) % userArray.length;
        setItemOffset(newOffset);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.currentTarget.value))
    }

    const openDetail = (e: React.MouseEvent<any, MouseEvent>, index?: any) => {
        // debugger
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

    const openUser = (userId?: string): void => {
        const storedUsersString = localStorage.getItem("users");

        if (storedUsersString) {
            const usersArray = JSON.parse(storedUsersString)
            const activeUser = usersArray.find((user: {_id: string}) => user._id == userId);
            localStorage.setItem("activeUser", JSON.stringify(activeUser))
            router.push('/dashboard/user/'+activeUser.id)
        } else {
            console.error("No users found in local storage");
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

            <TableHolder>
                <thead>
                    <tr>
                        {usersTableHeaders.map((header: string, index: number) => {
                            if (header == "") {
                                return (
                                    <th key={index}>
                                        <div className="w-[50px]"></div>
                                    </th>
                                )
                            }
                            return (
                                <th key={index}>
                                    <button>
                                        <h2>
                                            {header}
                                        </h2>
                                        <div>
                                            <ImageHolder filling={true} src="../images/dashboard/filter-results-button.svg" />
                                        </div>
                                    </button>
                                </th>
                            )
                        })}
                    </tr>
                </thead>

                <tbody>
                    {currentItems.map((user: any, index: number) => {
                        return <Row id={user._id} rowFunctions={{view: openUser}} index={index} detail={detail} openDetail={openDetail} date={formatDate(user.registered)} email={user.email} phone={user.phone} status={user.status} username={user.username} organization={user.organization} table="users" />
                    })}
                </tbody>
            </TableHolder>

            <Paginator selectOptions={perPage} selectValue={itemsPerPage} handleSelectChange={handleSelectChange} handleClick={handlePageClick} count={pageCount} currentPage={currentPage} />
        </main>
    )
}
