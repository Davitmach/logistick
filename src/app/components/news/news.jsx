'use client'
import { useEffect, useState } from 'react';
import './index.scss';
import Image from 'next/image';

const News_box = ({text,description,img})=> {
    const [active,setActive] = useState(false);
    const [click,setClick] = useState(false);
    useEffect(()=> {
if(active == false && click == true) {
    document.querySelector('#news').scrollIntoView({
        behavior:'smooth'
    })
}
    },[active])
    return(
        <div className={`justify-between ${active == true ? 'news_block_active' : 'news_block_disable'} News_block rounded-[8px] bg-[#CBE8FF] px-[16px] py-[12px] flex flex-col  `}>
        <div>
            <div className='flex items-center justify-center img w-full h-[203px] bg-white rounded-[8px]'><Image src={img} alt='Img' width={150} height={150}/></div>
            <div><p className='text-[#005494] font-[700] text-[32px]'>{text.length > 60 ? text.substring(0,60)+'...':text}</p></div>
            <div><p className={`text-[#005494] text-[24px] ${active == true && '!h-[400px]'}`}>{active == true ?description : description.substring(0,106)+'...'}</p></div>
        </div>
        <div><button onClick={()=> {
            setActive(prev => !prev)
            setClick(true)
        }} className='text-[#005494] font-[700] text-[24px] bg-white rounded-[8px] py-[4px] px-[12px]'>{active == false ?'Подробнее' : 'Скрыть'}</button></div>
    </div>
    )
}
export const News = ()=> {
    return(
        <div id='news' className='news_container py-[40px] px-[60px] max-w-[2000px] m-auto flex flex-col  relative'>
            <div><p className='text-[#005494] font-[700] text-[48px] news_title'>Новости</p></div>
            <div className='flex gap-20 w-full  news_scroll mt-[40px] '>
          
                <News_box  img={'/statya1.jpg'}  text={'Как мы доставили хрупкий антиквариат через всю Россию: история одного необычного заказа'} description={`Грузоперевозки по России — это не только контейнеры и паллеты. Иногда нам доверяют настоящие сокровища! В прошлом месяце к нам обратился клиент, которому нужно было перевезти старинный рояль XIX века из Санкт-Петербурга во Владивосток.  

Задача была непростой: хрупкий инструмент, перепады температур и тысячи километров пути. Но наша команда справилась! Мы использовали специальную упаковку, обеспечили постоянный контроль температуры и выбрали оптимальный маршрут, чтобы избежать тряски на дорогах.  

Через две недели рояль благополучно прибыл в пункт назначения, а клиент оставил восторженный отзыв. Это ещё раз доказало: надежные грузоперевозки по России — это не только скорость, но и забота о каждом заказе.  `}/>
                <News_box  img={'/statya2.webp'} text={'Секреты быстрой доставки: как мы сократили время перевозки на 30%'} description={`В мире грузоперевозок время — это деньги. Мы понимаем, как важно для наших клиентов получать грузы вовремя, поэтому постоянно работаем над оптимизацией процессов.  

Недавно мы внедрили новую систему логистики, которая позволила сократить время доставки на 30%. Как это работает? Мы анализируем дорожную ситуацию в реальном времени, выбираем самые короткие маршруты и используем современные технологии для контроля груза.  

Например, при перевозке из Москвы в Екатеринбург мы смогли доставить товар за 2 дня вместо обычных 3. Это стало возможным благодаря слаженной работе нашей команды и использованию передовых решений.  

Если вам нужны быстрые и надежные грузоперевозки по России, вы знаете, куда обратиться!  `}/>
                <News_box  img={'/statya3.webp'}  text={'Зимние грузоперевозки: как мы справляемся с суровыми условиями'} description={`Зима в России — это не только снег и мороз, но и дополнительные сложности для грузоперевозок. Однако наша компания готова к любым вызовам!  

В декабре 2024 года мы получили заказ на доставку медицинского оборудования в отдалённый посёлок в Сибири. Температура за окном опускалась до -40°C, а дороги были покрыты льдом. Но благодаря нашему опыту и подготовке, груз был доставлен точно в срок.  

Мы используем специально оборудованные автомобили с подогревом кузова, а наши водители проходят дополнительное обучение для работы в экстремальных условиях. Это позволяет нам гарантировать надежные грузоперевозки по России даже в самые суровые зимы.  

#### Как мы обеспечиваем безопасность грузов зимой?  
1. Специальная техника. Наш автопарк включает машины с усиленной подвеской, зимней резиной и системами подогрева. Это позволяет избежать поломок и задержек даже на самых сложных участках дорог.  
2. Подготовка водителей. Каждый наш водитель проходит тренировки по управлению автомобилем в условиях гололёда и снежных заносов.  
3. Контроль температуры. Для перевозки чувствительных грузов, таких как лекарства или электроника, мы используем изотермические фургоны с системой климат-контроля.  
4. Мониторинг маршрутов. Мы отслеживаем дорожную обстановку в реальном времени и оперативно корректируем маршруты, чтобы избежать пробок и опасных участков.  

Почему клиенты выбирают нас?
Мы доставляем грузы в срок, независимо от погодных условий.  
Работаем с разными типами грузов: от небольших посылок до крупногабаритных товаров.  

Прозрачность.Каждый клиент может отслеживать свой груз через мобильное приложение или личный кабинет на нашем сайте.  

Зима — это время, когда особенно важно доверять профессионалам.`}/>
            </div>
        </div>
    )
}