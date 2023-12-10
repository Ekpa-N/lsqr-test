"use client"
import { tabs } from '@/constants'
import { useCallback, useEffect, useState } from "react"
import ImageHolder from "@/components/ImageHolder"
import dashboard from "@/styles/dashboardLayout.module.scss"
import List from '@/components/SectionList'
import {isMobile} from 'react-device-detect'

type mobileState = {
    isMobile: any,
}

type sideBar = {
    isSideBar: string,
}

type active = {
    tab: string
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [mobileView, setMobileView] = useState<mobileState>({ isMobile: undefined })
    const [sideBar, setSideBar] = useState<sideBar>({ isSideBar: "left-[-283px]" })
    const [activeTab, setActiveTab] = useState<active>({ tab: "Users" })


    const debouncedCloseSideBar = useCallback(
        debounce((e: MouseEvent) => {
            e.stopPropagation();
            const isClickedOutsideDiv = !(e.target as HTMLElement).closest('#side-bar');
            const isClickedOutsideButton = !(e.target as HTMLElement).closest('#side-bar-handler');

            if (!isClickedOutsideButton) {
                // console.log("triggered")
                // handleSideBar();
            } else if (isClickedOutsideDiv) {
                setSideBar({ isSideBar: "left-[-283px]" });
            }
        }, 200),
        []
    );

    useEffect(() => {
        if (mobileView.isMobile == undefined) {
            if (window.innerWidth < 700) {
                setMobileView({ isMobile: true })
                setSideBar({ isSideBar: "left-[-283px]" })
            } else {
                setMobileView({ isMobile: false })
                setSideBar({ isSideBar: "left-[0]" })
            }
        }
        
        if (isMobile) {
            window.addEventListener('click', debouncedCloseSideBar)
        }
        if (!isMobile) {
            window.addEventListener('resize', windowChecker)
        }
        return (() => {
            window.removeEventListener('resize', windowChecker)
            window.removeEventListener('click', debouncedCloseSideBar)
        })
    }, [debouncedCloseSideBar])

    function windowChecker() {
        if (window.innerWidth < 700) {
            setMobileView({ isMobile: true })
            setSideBar({ isSideBar: "left-[-283px]" })
            return
        }
        setMobileView({ isMobile: false })
        setSideBar({ isSideBar: "left-[0]" })
    }


    function debounce(func: Function, delay: number) {
        let timeoutId: number | null;

        return (...args: any[]) => {
            clearTimeout(timeoutId as number);
            timeoutId = window.setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    function handleSideBar() {
        if (sideBar.isSideBar == "left-[0]") {
            setSideBar({ isSideBar: "left-[-283px]" })
            return
        }
        setSideBar({ isSideBar: "left-[0]" })
    }
    return (
        <main className={` ${dashboard.main}`}>
            <div className={`${dashboard["top-bar"]}`}>
                <div className={`${dashboard.hamburger} ${mobileView.isMobile ? "flex" : "hidden"}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button onClick={handleSideBar} id='side-bar-handler'></button>
                </div>
            </div>
            <div className={`${dashboard["bottom-section"]}`}>
                <div id="side-bar" className={`${dashboard["side-bar"]} ${mobileView.isMobile ? "absolute" : "relative"} ${sideBar.isSideBar}`}>
                    <li className='flex items-center ml-[30px] mt-[139px]'>
                        <div className='w-[16px] h-[16px] relative'>
                            <ImageHolder filling={true} src="../../images/dashboard/organization.svg" />
                        </div>
                        <h2 className={`${dashboard["organization"]}`}>Switch Organization</h2>
                        <div className='w-[14px] h-[14px] relative ml-[5px]'>
                            <ImageHolder filling={true} src="../../images/dashboard/caret-down.svg" />
                        </div>
                    </li>
                    <li className='flex items-center ml-[30px] mt-[39px]'>
                        <div className='w-[16px] h-[16px] relative'>
                            <ImageHolder filling={true} src="../../images/dashboard/home-icon.svg" />
                        </div>
                        <h2 className={`${dashboard["organization"]}`}>Dashboard</h2>
                    </li>

                    {tabs.map((item, index) => {
                        return (
                            <div className='w-full' key={`${item.name}${index}`}>
                                <List title={item.name} list={item.subs} active={activeTab.tab} />
                            </div>
                        )
                    })}

                </div>
                <div className={`${dashboard["main-section"]}`}>
                    {children}
                </div>
            </div>
        </main>
    )
}
