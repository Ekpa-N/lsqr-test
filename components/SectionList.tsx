import ImageHolder from "./ImageHolder"
import dashboard from "@/styles/dashboardLayout.module.scss"
import ListItem from "./ListItem"

type ListProps = {
    title: string,
    active: string,
    list: any
}


const List: React.FC<ListProps> = ({ title, active, list }) => {
    return (
        <div className={`${dashboard["section-list"]}`}>
            <h2 className={`${dashboard["section-title"]}`}>{title}</h2>
            <ul className={`${dashboard.list}`}>
                {list.map((item:{name:string, route: string, img: string})=> {
                    return <ListItem title={item.name} linkTo={item.route} img={item.img} active={active} />
                })}
            </ul>
        </div>
    )
}


export default List

