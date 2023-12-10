import ImageHolder from "./ImageHolder"
import dashboard from "@/styles/dashboardLayout.module.scss"

type TierProps = {
    tier: number;
}


const TierStars: React.FC<TierProps> = ({ tier }) => {
    const stars = []

    for (let i = 0; i < tier; i++) {
        stars.push(
            <div key={i} className="relative w-[16px] h-[16px]">
                <ImageHolder filling={true} src="../../images/users/filled-star.svg" />
            </div>
        )
    }
    return (
        <div className={`relative`}>
            <div className="absolute  flex gap-[4px] justify-between">
                {/* <div className="relative w-[16px] h-[16px]">
                    <ImageHolder filling={true} src="../../images/users/filled-star.svg" />
                </div> */}
                {stars.map((star, index)=> {
                    return star
                })}
            </div>
            <div className="flex gap-[4px]">
                <div className="relative w-[16px] h-[16px]">
                    <ImageHolder filling={true} src="../../images/users/hollow-star.svg" />
                </div>
                <div className="relative w-[16px] h-[16px]">
                    <ImageHolder filling={true} src="../../images/users/hollow-star.svg" />
                </div>
                <div className="relative w-[16px] h-[16px]">
                    <ImageHolder filling={true} src="../../images/users/hollow-star.svg" />
                </div>
            </div>
        </div>
    )
}


export default TierStars

