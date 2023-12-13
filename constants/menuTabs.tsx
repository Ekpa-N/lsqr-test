const tabs = [
    {
        name: "CUSTOMERS",
        subs: [
            {
                name: "Users",
                route: "/dashboard/users",
                img: "../../images/dashboard/users.svg"
            },
            {
                name: "Guarantors",
                route: "/dashboard/guarantors",
                img: "../../images/dashboard/guarantors.svg"
            },
            {
                name: "Loans",
                route: "/dashboard/loans",
                img: "../../images/dashboard/loans.svg"
            },
            {
                name: "Decision Models",
                route: "/dashboard/decision-models",
                img: "../../images/dashboard/decision.svg"
            },
            {
                name: "Savings",
                route: "/dashboard/savings",
                img: "../../images/dashboard/saving.svg"
            },
            {
                name: "Loan Requests",
                route: "/dashboard/loan-requests",
                img: "../../images/dashboard/loan.svg"
            },
            {
                name: "Whitelist",
                route: "/dashboard/whitelist",
                img: "../../images/dashboard/whitelist.svg"
            },
            {
                name: "Karma",
                route: "/dashboard/karma",
                img: "../../images/dashboard/karma.svg"
            },
        ]
    },
    {
        name: "BUSINESSES",
        subs: [
            {
                name: "Organization",
                route: "/dashboard/organization",
                img: "../../images/dashboard/organization.svg"
            },
            {
                name: "Loan Products",
                route: "/dashboard/loan-products",
                img: "../../images/dashboard/loan.svg"
            },
            {
                name: "Savings Products",
                route: "/dashboard/savings-products",
                img: "../../images/dashboard/savings.svg"
            },
            {
                name: "Fees and Charges",
                route: "/dashboard/fees-and-charges",
                img: "../../images/dashboard/fees.svg"
            },
            {
                name: "Transactions",
                route: "/dashboard/transactions",
                img: "../../images/dashboard/transactions.svg"
            },
            {
                name: "Services",
                route: "/dashboard/services",
                img: "../../images/dashboard/services.svg"
            },
            {
                name: "Service Account",
                route: "/dashboard/service-account",
                img: "../../images/dashboard/service-account.svg"
            },
            {
                name: "Settlements",
                route: "/dashboard/settlements",
                img: "../../images/dashboard/settlements.svg"
            },
            {
                name: "Reports",
                route: "/dashboard/reports",
                img: "../../images/dashboard/reports.svg"
            },
        ]
    },
    {
        name: "SETTINGS",
        subs: [
            {
                name: "Preferences",
                route: "/dashboard/preferences",
                img: "../../images/dashboard/preferences.svg"
            },
            {
                name: "Fees and Pricing",
                route: "/dashboard/fees-and-pricing",
                img: "../../images/dashboard/fees.svg"
            },
            {
                name: "Audit Logs",
                route: "/dashboard/audit-logs",
                img: "../../images/dashboard/audit.svg"
            }
        ]
    },
]

export const userCards = [
    {
        img:"../images/users/users-box.svg",
        title:"users",
        data: "total_users"
    },
    {
        img:"../images/users/active-users.svg",
        title:"active users",
        data: "active_users"
    },
    {
        img:"../images/users/users-with-loans.svg",
        title:"users with loans",
        data: "users_with_loans"
    },
    {
        img:"../images/users/users-with-savings.svg",
        title:"users with savings",
        data: "users_with_savings"
    },
]

export const detailsOptions = [
    {
        name: "View Details",
        img: "../images/users/view-user.svg",
        type: "view"
    },
    {
        name: "Blacklist User",
        img: "../images/users/blacklist-user.svg",
        type: "blacklist"
    },
    {
        name: "Activate User",
        img: "../images/users/activate-user.svg",
        type: "activate"
    },
]

export const profileTabs = [
    {
        name: "General Details"
    },
    {
        name: "Documents"
    },
    {
        name: "Loans"
    },
    {
        name: "Savings"
    },
    {
        name: "App and System"
    },
]

export const userDetails = [
    {
        title: "Personal Information",
        name: "personalInfo",
        subs: [
            {
                title: "FULL NAME",
                body: "name"
            },
            {
                title: "PHONE NUMBER",
                body: "phone"
            },
            {
                title: "email address",
                body: "email"
            },
            {
                title: "bvn",
                body: "bvn"
            },
            {
                title: "gender",
                body: "gender"
            },
            {
                title: "marital status",
                body: "marital"
            },
            {
                title: "children",
                body: "children"
            },
            {
                title: "type of residence",
                body: "residence"
            },
        ]
    },
    {
        title: "Education and Employment",
        name: "education_employment",
        subs: [
            {
                title: "level of education",
                body: "education"
            },
            {
                title: "employment status",
                body: "employedDuration"
            },
            {
                title: "sector of employment",
                body: "industry"
            },
            {
                title: "duration of employment",
                body: "employedDuration"
            },
            {
                title: "office email",
                body: "officeMail"
            },
            {
                title: "monthly income",
                body: "income"
            },
            {
                title: "loan repayment",
                body: "repayment"
            },
        ]
    },
    {
        title: "Socials",
        name: "socials",
        subs: [
            {
                title: "twitter",
                body: "twitter"
            },
            {
                title: "facebook",
                body: "facebook"
            },
            {
                title: "instagram",
                body: "instagram"
            },
        ]
    },
    {
        title:"Guarantor",
        name:"guarantors",
        subs: [
            {
                title:"full name",
                body:"name"
            },
            {
                title:"phone number",
                body:"phone"
            },
            {
                title:"email address",
                body:"email"
            },
            {
                title:"relationship",
                body:"relationship"
            },
        ]
    }
]

export const filters = [
    {
        name: "organization",
        title: "organization",
        type:"select",
    },
    {
        name: "username",
        title: "username",
        type:"text",
    },
    {
        name: "email",
        title: "email",
        type:"text",
    },
    {
        name: "date",
        title: "date",
        type:"date",
    },
    {
        name: "phone",
        title: "phone number",
        type:"text",
    },
    {
        name: "status",
        title: "status",
        type:"select",
    },
]

export default tabs