'use client'
import './index.scss';
import Image from 'next/image';
import { useState ,useEffect} from 'react';
export const Gruz = ()=> {

    const [send,setSend] = useState(false);
       const [user,setUser] = useState({
            name:'',
            email:''
        })

        useEffect(()=> {
          if(send == true) {
              document.body.style.overflow ='hidden'
          }
          else if(send == false) {
                document.body.style.overflow ='auto'
          }
              },[send])
        const Submit =async()=> {
            console.log(user);
            
       if(user.email && user.name) {
        setSend(true)
                   try {
                     // Отправка POST-запроса на сервер
                     const response = await fetch("/api/message", {
                       method: "POST",
                       headers: {
                         "Content-Type": "application/json",
                       },
                       body: JSON.stringify({
                           name: user.name,
                           email:user.email,
                         }),
                     });
               
                 
               
                    
                    
                   } catch (error) {
                     console.error("Ошибка:", error);
                   }
               }
           }
    return(
      <>
   <div id='gruz' className='px-[60px] gruz_container max-w-[2000px] mx-auto'>

    <div>
        <div className='  pt-[20px] mt-[20px]  info_container '>
            <div className='float-left gruz_img_cont  rounded-[8px] overflow-hidden'><Image objectFit='cover' src={'/truckImg.jpeg'} alt='truck' width={200} height={200}/></div>
         
                <div className='description flex flex-col gap-6'>
                    <div><p className='text-[#005494] text-[38px] font-[700]'>Перевозка сборных грузов</p></div>
                    <div><p className='text-[#005494] font-[400] text-[32px]'>С точки зрения оптимизации расходов грузоперевозки <span className='font-[700]'>эффективнее</span> осуществлять крупными партиями — так называемыми генеральными грузами. Такой подход позволяет грузовладельцу существенно <span className='font-[700]'>сократить транспортные издержки и упростить процесс отслеживания груза.</span> В случаях, когда размер партии небольшой и её отправка в рамках генерального груза нецелесообразна. ООО ТК «TransNext» для оптимизации расходов на транспорт, предлагает своим клиентам <span className='font-[700]'>объединить товары в сборные грузы.</span></p></div>
                </div>
                <div className='mt-[36px] form_container w-full rounded-[8px] border border-[#005494] '>
<div className='title_box rounded-t-[5px] bg-[#005494] px-[35px] py-[10px] overflow-hidden'>
    <div><p className='text-white font-[700] text-[48px]'>Отправить груз</p></div>
    <div><p className='font-[400] text-white text-[20px]'>Введите Ваши данные, чтобы отправить груз, и наш менеджер свяжется с Вами</p></div>
</div>
<div className='form rounded-b-[8px] border-t border-t-[#005494] py-[16px] px-[35px] flex flex-col gap-4'>
    <div className='flex gap-3 items-end'>
        <div className='input_box'>
            <div className='mb-[20px]'><label htmlFor="" className='text-[#005494] font-[700] text-[24px]'>ФИО</label></div>
            <div><input onChange={(e)=> {
                    setUser({...user,name:e.target.value})
                    
                  }} className='outline-none border border-[#005494] rounded-[8px]' placeholder='Иванов Иван Иванович' type="text" /></div>
        </div>
        <div className='input_box'>
            <div className='mb-[20px]'><label htmlFor="" className='text-[#005494] font-[700] text-[24px]'>Телефон</label></div>
            <div><input onInput={(e) => {
          // Убираем все символы, кроме цифр, пробела и дефиса при вставке
          e.target.value = e.target.value.replace(/[^0-9\s\-]/g, '');
        }} onChange={(e)=> {
                    setUser({...user,email:e.target.value})
                    
                  }} className='outline-none border border-[#005494] rounded-[8px]' placeholder='8 800 707-53-40' type="text" /></div>
        </div>
        <div className='flex-1 '><button onClick={Submit} className='gruz_btn w-full text-white font-[700] text-[24px] bg-[#005494] rounded-[8px] py-[5px] px-[12px]'>Заказать</button></div>
    </div>
    <div> <div className="custom-checkbox-container">
            <label className="flex gap-2">
                <input type="checkbox" className="rounded-[8px] w-[28px] h-[28px]" />
                <span className="text-[#005494] text-[20px]">
                Я согласен(на) на обработку персональных данных
                </span>
            </label>
        </div></div>
</div>
                </div>
 
            
            
        </div>
        </div>
        <div> 
        
                
                
                </div>
        
        </div>
        {send && <div className='fixed z-[99999999]  w-full h-[100vh] left-[0] top-[0] bg-black/50 flex items-center justify-center' >
<div className='mx-[30px] bg-[#CBE8FF] flex items-center justify-center rounded-[20px] px-[20px] h-[200px] relative' > 
<svg onClick={()=> {
    setSend(false)
}} className='absolute right-[20px] top-[20px] cursor-pointer' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 1L1 21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
<path d="M21 21L1 0.999999" stroke="black" strokeWidth="2" strokeLinecap="round"/>
</svg>

<p className='text-[#005494] text-[24px] font-[700] text-center'>Спасибо! Данные успешно отправлены.</p>
</div>
    </div>}
        </>
    )
}