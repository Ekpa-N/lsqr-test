'use client'
import { useEffect, useState } from "react"
import ImageHolder from "@/components/ImageHolder"
import userstyles from "@/styles/usersPage.module.scss"
import TierStars from "@/components/TierStars"
import { profileTabs } from "@/constants/menuTabs"
import { useRouter } from "next/navigation"
import GeneralDetails from "@/components/userInfoComponents/GeneralDetails"


export default function User() {
    const router = useRouter()
    const [user, setUser] = useState<{
        picture: string;
        firstname: string;
        lastname: string;
        tier: number | "";
        balance: string;
        bank: string;
        account: string;
        _id: string;
    }>({
        picture: "",
        firstname: "",
        lastname: "",
        tier: "",
        balance: "",
        bank: "",
        account: "",
        _id: ""
    })

    const [generalDetails, setGeneralDetails] = useState<{
        personalInfo: {
            name: string;
            phone: string;
            email: string;
            bvn: string;
            gender: string;
            marital: string;
            children: string;
            residence: string;
        },
        education_employment: {
            education: string;
            employed: string;
            officeMail: string;
            income: string;
            industry: string;
            repayment: string;
            employedDuration: string;
        },
        socials: {
            twitter: string;
            facebook: string;
            instagram: string;
        };
    }>({
        personalInfo: {
            name: "",
            marital: "",
            phone: "",
            email: "",
            bvn: "",
            children: "",
            gender: "",
            residence: "",
        },
        education_employment: {
            education: "",
            employed: "",
            officeMail: "",
            income: "",
            industry: "",
            repayment: "",
            employedDuration: ""
        },
        socials: {
            twitter: "",
            facebook: "",
            instagram: ""
        }
    })

    useEffect(() => {
        const currentUser = localStorage.getItem("activeUser")
        const parsedUserObject = JSON.parse(currentUser as string)
        // console.log("duration: ",parsedUserObject.duration)
        setUser(JSON.parse(currentUser as string))
        setGeneralDetails({
            ...generalDetails, personalInfo: {
                ...generalDetails.personalInfo,
                name: `${parsedUserObject.firstname} ${parsedUserObject.lastname}`,
                phone: `${parsedUserObject.phone}`,
                email: `${parsedUserObject.email}`,
                bvn: `${parsedUserObject.bvn}`,
                gender: `${parsedUserObject.gender}`,
                marital: `${parsedUserObject.marital_status}`,
                children: `${parsedUserObject.children}`,
                residence: `${parsedUserObject.residence}`,

            },
            education_employment: {
                education: `${parsedUserObject.education}`,
                employed: `${parsedUserObject.employment_status}`,
                officeMail: `${parsedUserObject.work_email}`,
                income: `${parsedUserObject.income}`,
                industry: `${parsedUserObject.industry}`,
                repayment: `${parsedUserObject.repayment}`,
                employedDuration: `${parsedUserObject.duration.toString()}`
            },
            socials: {
                twitter: `${parsedUserObject.twitter}`,
                facebook: `${parsedUserObject.facebook}`,
                instagram: `${parsedUserObject.instagram}`
            }
        })
    }, [])

    return (
        <main className={`${userstyles.main}`}>
            <button onClick={() => { router.back() }} className={`${userstyles["back-button"]}`}>
                <div className={`${userstyles.icon}`}>
                    <ImageHolder filling={true} src="../../images/users/back-arrow.svg" />
                </div>
                <h2>
                    Back to Users
                </h2>
            </button>
            <div className={`${userstyles["user-page-title-bar"]}`}>
                <h2 className={`${userstyles["page-title"]}`}>
                    User Details
                </h2>

                <div className={`${userstyles["user-action"]}`}>
                    <button className={`${userstyles["blacklist-user"]}`}>BLACKLIST USER</button>
                    <button className={`${userstyles["activate-user"]}`}>ACTIVATE USER</button>
                </div>
            </div>

            <div className={`${userstyles["user-profile"]}`}>
                <div className={`${userstyles["profile-details"]}`}>
                    <div style={{ backgroundImage: `url(${user.picture})` }} className={`${userstyles.avatar}`}>
                        {/* <ImageHolder filling={true} src={`${user.picture}`} /> */}
                    </div>
                    <div className={`${userstyles["name-section"]}`}>
                        <h2 className={`${userstyles["user-name"]}`}>{`${user.firstname} ${user.lastname}`}</h2>
                        <h2 className={`${userstyles["user-id"]}`}>{user._id}</h2>
                    </div>
                    <div className={`${userstyles["tier-section"]}`}>
                        <h2 className={`${userstyles.title}`}>User's Tier</h2>
                        {user.tier == "" ? <div></div> : <TierStars tier={user.tier} />}
                    </div>
                    <div className={`${userstyles["user-balance"]}`}>
                        <h2 className={`${userstyles.balance}`}>{user.balance}</h2>
                        <h2 className={`${userstyles["bank-info"]}`}>{`${user.account}/${user.bank}`}</h2>
                    </div>
                </div>
                <ul className={`${userstyles["profile-tabs-holder"]}`}>
                    <div className={`${userstyles["inner-holder"]}`}>
                        {profileTabs.map((tab, index) => {
                            return <li key={index} className={`${userstyles["profile-tabs"]}`}>{tab.name}</li>
                        })}
                    </div>
                </ul>
            </div>

            <GeneralDetails {...generalDetails} />
        </main>
    )
}
