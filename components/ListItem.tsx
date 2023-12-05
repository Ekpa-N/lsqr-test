import ImageHolder from "./ImageHolder"
import dashboard from "@/styles/dashboardLayout.module.scss"

type ListProps = {
    title: string,
    linkTo: string,
    active: string,
    img: string,
}


const ListItem: React.FC<ListProps> = ({title, linkTo, active, img}) => {
    return (
        <button className={`${dashboard["list-item"]} ${active == title ? "bg-[#39cdcc0f]" : ""}`}>
            <div className={`absolute w-[3px] h-[40px] left-0 ${active == title ? "bg-[#39CDCC]" : ""}`}></div>
            <div className='w-[16px] h-[16px] relative'>
                <ImageHolder filling={true} src={img} />
            </div>
            <h2 className={`${dashboard["organization"]}`}>{title}</h2>
        </button>
    )
}


export default ListItem

