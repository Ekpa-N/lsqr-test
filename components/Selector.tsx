
import userstyles from "@/styles/usersPage.module.scss"

type SelectorProps = {
    name?: string;
    handler?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    selectOptions: number[];
    value: number;
}

const Selector: React.FC<SelectorProps> = ({name, handler, selectOptions, value  }: SelectorProps) => {
    return (
        <div className={`${userstyles["paginate-selector"]}`}>
            <select onChange={(e)=>{handler?.(e)}} value={value} className={`${userstyles.select}`}>
                {selectOptions.map((option, index) => {
                    if (option == value) {
                        return <option key={index} value={option} defaultValue={option}>{option}</option>
                    }
                    return <option key={index} value={option}>{option}</option>
                })}
            </select>
        </div>

    )
}


export default Selector

