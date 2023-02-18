import { MainLayout } from "../../../views/Navbar/MainLayout";
import { AchievementContent } from "./AchievementContent";
import { AchievementPrize } from "./AchievementPrize";
import { PrizeContent } from "./PrizeContent";

export const AchievementLayout: React.FC<{  }> = props => {
    const cards_ = [
        {
            name:'Успеть выполнить дедлайн',
            coins: 100,
            status: true,
            
        },
        {
            name:'Сделать видео',
            coins: 250,
            status: false,
            
        }
        
    ]

    const prizes = [
   
        {
            name:'Получить выходной',
            coins: 100
        
        },
        {
            name:'Фирменные стикеры',
            coins: 100
            
        }
    ]
    return (
        <>
       <MainLayout>
       <div className={'ml-32 mb-5 bg-secondary w-screen h-full min-h-screen'}>
            <div className={'flex pt-20  justify-between mb-5 ml-10 mr-10 items-center'}>
                <h2 className="font-montserratBold text-3xl">Ваши достижения</h2>
                <h2 className="font-montserratRegular text-xl">Баланс{}</h2>
                </div>

                <AchievementContent cards={cards_}/>
                <div className={'flex pt-20  mb-5 ml-10 mr-10 items-end'}>
                <h2 className="font-montserratBold text-3xl mr-8 ">Как можно потратить?</h2>
                <span className="font-montserratRegular text-xl">Просто покажи ментору</span>
                </div>
                
                <PrizeContent cards ={prizes} />

            </div>

       </MainLayout>
            
        

            
        </>
    );
};