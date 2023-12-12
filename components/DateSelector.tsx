"use client"
import TheCalendar from "./Calendar"

type DateSelectorProps = {
    handleFilterDate?:(date:string)=>void;
}
const DateSelector: React.FC<DateSelectorProps> = ({handleFilterDate}) => {    
    
    const handleCalendar = (date: string | Date | null | any[]): void => {
        if(typeof handleFilterDate === "function") {
            handleFilterDate(date as string)
        }
    }

        return (
        <section className="border rounded-[10px] h-full w-full">
            <TheCalendar handleDate={handleCalendar} />
        </section>
    )
}

export default DateSelector