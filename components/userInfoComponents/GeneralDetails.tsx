'use client'
import userstyles from "@/styles/usersPage.module.scss"
import { userDetails } from "@/constants/menuTabs"




type DetailsProps = {
    personalInfo: {
        name: string;
        marital: string;
        phone: string;
        email: string;
        bvn: string;
        children: string;
        gender: string;
        residence: string;
    };
    education_employment: {
        education: string;
        employed: string;
        officeMail: string;
        income: string;
        industry: string;
        repayment: string;
        employedDuration: string;
    };

    socials: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    guarantors: Array<{
        [key: string]: string;
    }>;

    [key: string]: {
        [key: string]: string;
    }[] | {
        [key: string]: string;
    };
};

const GeneralDetails: React.FC<DetailsProps> = (props) => {
    return (
        <section className={`${userstyles["user-info"]}`}>
            {userDetails.map((detail, index) => {
                return (
                    <div key={index} className={`${userstyles["info-card"]}`}>
                        <h2 className={`${userstyles["info-title"]}`}>{detail.title}</h2>
                        {detail.name === "guarantors" &&
                            props[detail.name].map((guarantor, index) => {
                                return (
                                    <div key={index} className={`${userstyles["details-section"]}`}>
                                        {detail.subs.map((sub, index) => {
                                            return (
                                                <div key={index} className={`${userstyles.detail}`}>
                                                    <h2 className={`${userstyles["detail-title"]}`}>{sub.title}</h2>
                                                    <h2 className={`${userstyles["detail-body"]}`}>
                                                        {guarantor[sub.body]}
                                                    </h2>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                        {detail.name !== "guarantors" && (
                            <div className={`${userstyles["details-section"]}`}>
                                {detail.subs.map((sub, index) => (
                                    <div key={index} className={`${userstyles.detail}`}>
                                        <h2 className={`${userstyles["detail-title"]}`}>{sub.title}</h2>
                                        <h2 className={`${userstyles["detail-body"]}`}>
                                            {(props[detail.name] as { [key: string]: string })[sub.body]}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )
            })}
        </section>
    );
};

export default GeneralDetails;