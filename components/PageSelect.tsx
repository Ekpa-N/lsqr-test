import ImageHolder from "./ImageHolder"
import userspage from "@/styles/usersPage.module.scss"


const PageSelect: React.FC<{ type: string; currentPage: number; count: number; }> = ({ type, currentPage, count }) => {
    if (type == "page") {
        return (
            <button className={`${userspage["page-select"]}`}>
                <div></div>
            </button>
        )
    }
    return (
        <button disabled={(currentPage == 0 && type == "prev") || (currentPage == (count-1) && type == "next") } className={`${userspage["page-select"]}`}>
            <div>
                <ImageHolder filling={true} src={currentPage == (count-1) && type == "next" ? "../images/dashboard/caret-right-inactive.svg" : currentPage == 0 && type == "prev" ? "../images/dashboard/caret-left-inactive.svg" : type == "next" ? "../images/dashboard/caret-right-active.svg" : "../images/dashboard/caret-left-active.svg"}/>
            </div>
        </button>
    )
}


export default PageSelect

