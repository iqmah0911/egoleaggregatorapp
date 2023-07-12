
import Overview from "./Overview"
import QuickActions from "./QuickActions"
import RecentTrx from "./RecentTrx"



export default function Layout()  {
    return (
        <div className="lg:px-[80px] px-[30px] lg:pt-[170px] pt-[130px] pb-[30px] w-full">
            <Overview/>
            <QuickActions/>
            <RecentTrx/>
         
        </div>
    )
}