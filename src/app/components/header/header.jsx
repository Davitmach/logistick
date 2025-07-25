'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './index.scss';

export const Header = ()=> {
    const [menu,setMenu] = useState(false);
    const [acitve,setActive] =useState(false);
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

    const HandleChange = ()=> {
        setMenu((prev)=> !prev)
    }
    const Submit =async()=> {
     console.log(user);
     
if(user.email && user.name) {
    setActive(false)
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
        <header className='flex flex-col max-w-[2000px] m-auto relative '>
            <div className='py-[20px] header flex w-full items-center justify-between border-b border-b-[#94D1FF] px-[60px] gap-[100px] header'>
                <div className='logo text-[#005494] text-[64px] font-[900] '><Image src={'/logo.svg'} alt='Logo' width={340} height={200}/></div>
                <div className='flex items-center gap-11 header_right_bar'>
                    <div className='flex items-center gap-[19px] header_info_box'>
                        <div><svg className='Header_svg' width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.4168 41.1667L35.7502 45.5L45.5002 35.75M47.6346 27.1914C47.656 26.797 47.6668 26.3998 47.6668 26C47.6668 14.0338 37.9663 4.33333 26.0002 4.33333C14.034 4.33333 4.3335 14.0338 4.3335 26C4.3335 37.7767 13.7293 47.3589 25.4336 47.6594M26.0002 13V26L34.1 30.0499" stroke="#005494" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div><p className='header_info_text text-[#005494] text-[21px] font-[400] max-w-[516px] w-full'>Пн-Пт: с 09:00 до 18:00 (время московское)Сб-Вс: выходной</p></div>
                    </div>
                    <div className='flex items-center gap-[19px] header_info_box'>
                        <div><svg className='Header_svg' width="31" height="31" viewBox="0 0 51 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 33.35C30.367 33.35 34.3125 29.522 34.3125 24.8C34.3125 20.078 30.367 16.25 25.5 16.25C20.633 16.25 16.6875 20.078 16.6875 24.8C16.6875 29.522 20.633 33.35 25.5 33.35Z" stroke="#005494" strokeidth="4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M25.5 59C37.25 47.6 49 37.3921 49 24.8C49 12.2079 38.4787 2 25.5 2C12.5213 2 2 12.2079 2 24.8C2 37.3921 13.75 47.6 25.5 59Z" stroke="#005494" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
                        <div>
                     <div className='font-[400] text-[21px] text-[#005494]  header_info_text max-[300px]'>Адрес компании г. Москва, ул. Платформа Северянин, вл.14, стр.1</div>
                      {/* <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>8 (800) 707-53-40</div> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-[19px] header_info_box'>
                        <div><svg className='Header_svg' width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.4411 13C32.5574 13.4129 34.5023 14.4479 36.0269 15.9725C37.5515 17.4972 38.5865 19.4421 38.9994 21.5583M30.4411 4.33333C34.8379 4.82178 38.9379 6.79071 42.068 9.91685C45.198 13.043 47.1721 17.1405 47.6661 21.5367M22.1579 30.0367C19.5545 27.4332 17.4988 24.4895 15.9908 21.3487C15.8611 21.0785 15.7962 20.9434 15.7464 20.7725C15.5693 20.1651 15.6965 19.4192 16.0648 18.9047C16.1685 18.76 16.2923 18.6361 16.54 18.3885C17.2975 17.631 17.6762 17.2522 17.9239 16.8714C18.8577 15.4351 18.8577 13.5835 17.9239 12.1473C17.6762 11.7664 17.2975 11.3877 16.54 10.6302L16.1178 10.208C14.9663 9.05652 14.3906 8.48079 13.7723 8.16805C12.5426 7.54606 11.0903 7.54606 9.86061 8.16805C9.24229 8.48079 8.66656 9.05652 7.5151 10.208L7.17356 10.5495C6.02604 11.697 5.45228 12.2708 5.01408 13.0509C4.52783 13.9165 4.17822 15.2609 4.18117 16.2537C4.18383 17.1484 4.35739 17.7599 4.70451 18.9828C6.56994 25.5552 10.0896 31.757 15.2636 36.9309C20.4376 42.1049 26.6393 45.6246 33.2117 47.49C34.4347 47.8371 35.0461 48.0107 35.9409 48.0134C36.9337 48.0163 38.2781 47.6667 39.1437 47.1805C39.9237 46.7423 40.4975 46.1685 41.645 45.021L41.9866 44.6794C43.138 43.528 43.7137 42.9522 44.0265 42.3339C44.6485 41.1042 44.6485 39.652 44.0265 38.4222C43.7137 37.8039 43.138 37.2282 41.9866 36.0767L41.5643 35.6545C40.8069 34.897 40.4281 34.5183 40.0473 34.2707C38.611 33.3369 36.7594 33.3369 35.3231 34.2707C34.9423 34.5183 34.5636 34.897 33.8061 35.6545C33.5584 35.9022 33.4346 36.026 33.2898 36.1297C32.7754 36.498 32.0295 36.6252 31.422 36.4482C31.2511 36.3983 31.116 36.3335 30.8459 36.2038C27.705 34.6958 24.7613 32.6401 22.1579 30.0367Z" stroke="#005494" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div>
                     <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>+7(966)0113995</div>
                      {/* <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>8 (800) 707-53-40</div> */}
                        </div>
                    </div>
                    <div className='wa'>
                        <a target='blank' href="https://api.whatsapp.com/message/3C4B7F533MSHF1?autoload=1&app_absent=0">
                    <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5581 0.5H25.4419C11.3907 0.5 0 11.8907 0 25.9419V26.0581C0 40.1093 11.3907 51.5 25.4419 51.5H25.5581C39.6093 51.5 51 40.1093 51 26.0581V25.9419C51 11.8907 39.6093 0.5 25.5581 0.5Z" fill="#005494"/>
<path d="M30.4699 33.459C23.9428 33.459 18.6325 28.1469 18.6307 21.6198C18.6325 19.9653 19.9798 18.6198 21.6307 18.6198C21.8005 18.6198 21.9684 18.6341 22.1292 18.6627C22.483 18.7217 22.819 18.8414 23.1281 19.0219C23.1727 19.0487 23.2031 19.0915 23.2102 19.1416L23.8999 23.4888C23.9089 23.5406 23.8928 23.5906 23.8589 23.6282C23.4783 24.0498 22.9923 24.3536 22.4509 24.5055L22.19 24.5787L22.2883 24.8307C23.1781 27.0963 24.9899 28.9063 27.2573 29.7997L27.5092 29.8998L27.5825 29.6389C27.7344 29.0975 28.0381 28.6115 28.4598 28.2309C28.4902 28.2023 28.5313 28.188 28.5724 28.188C28.5813 28.188 28.5902 28.188 28.601 28.1898L32.9482 28.8795C33 28.8884 33.0429 28.917 33.0697 28.9617C33.2484 29.2708 33.3681 29.6085 33.4288 29.9623C33.4574 30.1195 33.4699 30.2857 33.4699 30.459C33.4699 32.1118 32.1245 33.4572 30.4699 33.459Z" fill="#FDFDFD"/>
<path d="M42.0447 24.5678C41.6927 20.5904 39.8701 16.9007 36.913 14.1794C33.938 11.4421 30.0786 9.93406 26.0423 9.93406C17.1834 9.93406 9.97557 17.1419 9.97557 26.0008C9.97557 28.974 10.7957 31.8703 12.3484 34.3932L8.88562 42.0585L19.9726 40.8775C21.9005 41.6672 23.941 42.0675 26.0405 42.0675C26.5926 42.0675 27.159 42.0389 27.7272 41.9799C28.2275 41.9263 28.7332 41.8477 29.2299 41.7476C36.6486 40.2485 42.0643 33.6642 42.1072 26.0865V26.0008C42.1072 25.5183 42.0857 25.0359 42.0429 24.5678H42.0447ZM20.3996 37.513L14.2656 38.1669L16.0971 34.1092L15.7308 33.6178C15.704 33.5821 15.6772 33.5463 15.6468 33.5052C14.0566 31.3093 13.2168 28.7149 13.2168 26.0025C13.2168 18.9305 18.9702 13.1771 26.0423 13.1771C32.6676 13.1771 38.2835 18.3462 38.8249 24.9448C38.8535 25.2986 38.8695 25.6541 38.8695 26.0043C38.8695 26.1044 38.8678 26.2027 38.866 26.3081C38.7302 32.2241 34.5974 37.2485 28.8153 38.5279C28.374 38.6261 27.922 38.7012 27.4717 38.7494C27.0035 38.803 26.5229 38.8298 26.0458 38.8298C24.3466 38.8298 22.6956 38.5011 21.1358 37.8507C20.9625 37.781 20.7927 37.7059 20.6337 37.6291L20.4014 37.5165L20.3996 37.513Z" fill="#FDFDFD"/>
</svg></a>

                    </div>
<div className='tg'>
    <a target='blank' href="https://t.me/Trans_Next">
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_318_61)">
<path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="url(#paint0_linear_318_61)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M10.8638 23.7466C17.8603 20.6984 22.5257 18.6888 24.8601 17.7179C31.5251 14.9456 32.91 14.4641 33.8127 14.4482C34.0113 14.4447 34.4552 14.4939 34.7427 14.7272C34.9855 14.9242 35.0523 15.1904 35.0843 15.3771C35.1163 15.5639 35.1561 15.9895 35.1244 16.3219C34.7633 20.1169 33.2004 29.3263 32.4053 33.5767C32.0689 35.3752 31.4065 35.9783 30.7652 36.0373C29.3714 36.1655 28.3131 35.1162 26.9632 34.2313C24.8509 32.8467 23.6576 31.9847 21.6072 30.6336C19.2377 29.0721 20.7738 28.2139 22.1242 26.8113C22.4776 26.4442 28.6183 20.8587 28.7372 20.352C28.7521 20.2886 28.7659 20.0524 28.6255 19.9277C28.4852 19.803 28.2781 19.8456 28.1286 19.8795C27.9168 19.9276 24.5423 22.158 18.0053 26.5707C17.0475 27.2284 16.1799 27.5489 15.4026 27.5321C14.5457 27.5135 12.8973 27.0475 11.6719 26.6492C10.1689 26.1606 8.97432 25.9023 9.07834 25.0726C9.13252 24.6404 9.72767 24.1984 10.8638 23.7466Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_318_61" x1="24" y1="0" x2="24" y2="47.644" gradientUnits="userSpaceOnUse">
<stop stopColor="#005494"/>
<stop offset="1" stopColor="#005494"/>
</linearGradient>
<clipPath id="clip0_318_61">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
</a>
</div>
                    <div><button className='header_btn text-nowrap outline-none border-none font-[700] text-[24px] text-white bg-[#005494] rounded-[8px] py-[10px] px-[12px]' onClick={()=> {
                        setActive((prev)=> !prev)
                    }}>Онлайн - заявка</button></div>
                    <div className='menu_btn hidden' onClick={HandleChange}><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5H5M18 1H1M18 9H1M18 13H5" stroke="#005494" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                </div>
             
            </div>


            <div className='low_res_visible_info gap-3'>

            <div className='flex items-center  gap-3 '>
                        <div><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 18L15.5 20L20 15.5M20.9851 11.5499C20.995 11.3678 21 11.1845 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.4354 5.33651 20.858 10.7385 20.9966M11 5V11L14.7384 12.8692" stroke="#CBE8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div>
                        <div><p className='header_info_text text-[#005494] text-[24px] font-[400] max-w-[250px] text-center'>Пн-Пт: с 09:00 до 18:00 (время московское)Сб-Вс: выходной</p></div>
                    </div>
                    <div className='flex items-center gap-[19px] '>
                        <div><svg width="22" height="22" viewBox="0 0 51 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5 33.35C30.367 33.35 34.3125 29.522 34.3125 24.8C34.3125 20.078 30.367 16.25 25.5 16.25C20.633 16.25 16.6875 20.078 16.6875 24.8C16.6875 29.522 20.633 33.35 25.5 33.35Z" stroke="#CBE8FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.5 59C37.25 47.6 49 37.3921 49 24.8C49 12.2079 38.4787 2 25.5 2C12.5213 2 2 12.2079 2 24.8C2 37.3921 13.75 47.6 25.5 59Z" stroke="#CBE8FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


</div>
                        <div>
                     <div className='font-[400] text-[24px] text-[#005494]  header_info_text max-w-[300px] text-center'>Адрес компании г. Москва, ул. Платформа Северянин, вл.14, стр.1</div>
                     {/* <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>8 (800) 707-53-40</div> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-[19px] '>
                        <div><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0497 5C15.0264 5.19057 15.924 5.66826 16.6277 6.37194C17.3314 7.07561 17.8091 7.97326 17.9997 8.95M14.0497 1C16.0789 1.22544 17.9713 2.13417 19.4159 3.57701C20.8606 5.01984 21.7717 6.91101 21.9997 8.94M10.2266 12.8631C9.02506 11.6615 8.07627 10.3028 7.38028 8.85323C7.32041 8.72854 7.29048 8.66619 7.26748 8.5873C7.18576 8.30695 7.24446 7.96269 7.41447 7.72526C7.46231 7.65845 7.51947 7.60129 7.63378 7.48698C7.98338 7.13737 8.15819 6.96257 8.27247 6.78679C8.70347 6.1239 8.70347 5.26932 8.27247 4.60643C8.15819 4.43065 7.98338 4.25585 7.63378 3.90624L7.43891 3.71137C6.90747 3.17993 6.64174 2.91421 6.35636 2.76987C5.7888 2.4828 5.11854 2.4828 4.55098 2.76987C4.2656 2.91421 3.99987 3.17993 3.46843 3.71137L3.3108 3.86901C2.78117 4.39863 2.51636 4.66344 2.31411 5.02348C2.08969 5.42298 1.92833 6.04347 1.9297 6.5017C1.93092 6.91464 2.01103 7.19687 2.17124 7.76131C3.03221 10.7947 4.65668 13.6571 7.04466 16.045C9.43264 18.433 12.295 20.0575 15.3284 20.9185C15.8928 21.0787 16.1751 21.1588 16.588 21.16C17.0462 21.1614 17.6667 21 18.0662 20.7756C18.4263 20.5733 18.6911 20.3085 19.2207 19.7789L19.3783 19.6213C19.9098 19.0898 20.1755 18.8241 20.3198 18.5387C20.6069 17.9712 20.6069 17.3009 20.3198 16.7333C20.1755 16.448 19.9098 16.1822 19.3783 15.6508L19.1835 15.4559C18.8339 15.1063 18.6591 14.9315 18.4833 14.8172C17.8204 14.3862 16.9658 14.3862 16.3029 14.8172C16.1271 14.9315 15.9523 15.1063 15.6027 15.4559C15.4884 15.5702 15.4313 15.6274 15.3644 15.6752C15.127 15.8453 14.7828 15.904 14.5024 15.8222C14.4235 15.7992 14.3612 15.7693 14.2365 15.7094C12.7869 15.0134 11.4282 14.0646 10.2266 12.8631Z" stroke="#CBE8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div>
                        <div>
                     <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>+7(495)0113995</div>
                     {/* <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>8 (800) 707-53-40</div> */}
                        </div>
                    </div>
            </div>



            <div className={`menu w-full flex items-center justify-center py-[24px] border-b border-b-[#94D1FF] ${menu == true ? 'menu_active':'menu_disable'}`}>
                <ul className='flex gap-11'>
                    <li><a href="#gruz" className='text-[#005494] font-[400] text-[24px]'>Услуги</a></li>
                    <li><a href="https://docs.google.com/document/d/1l_utIp7l-GRbAVlzr8BEtqabrIi_NqnW/edit?usp=drive_link&ouid=112087202378903553016&rtpof=true&sd=true" target='_blank' className='text-[#005494] font-[400] text-[24px]'>Тарифы</a></li>
                    <li><a href="#news" className='text-[#005494] font-[400] text-[24px]'>Новости</a></li>
                    <li><a href="" className='text-[#005494] font-[400] text-[24px]'>Документация</a></li>
                    <li><a href="" className='text-[#005494] font-[400] text-[24px]'>Контакты</a></li>
                </ul>
            </div>
        </header>
{acitve == true && 
<div className='fixed left-0 top-0 flex items-center justify-center z-[9999999999] bg-black/60   w-full h-[100vh]'>
      <div className=' max-w-[1210px] w-[70%] z-50 mt-[36px] fixed_form_container  rounded-[8px] border border-[#005494] '>
      <div className='title_box bg-[#005494] px-[35px] py-[10px] overflow-hidden flex justify-between items-center'>
        <div> <div><p className='text-white font-[700] text-[48px]'>Заявка на бесплатный расчет</p></div>
        <div><p className='font-[400] text-white text-[20px]'>Введите Ваши данные, чтобы отправить груз, и наш менеджер свяжется с Вами</p></div></div>
        <div onClick={()=> {
            setActive(false)
        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="white">
  <path d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 0 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414z"/>
</svg>
</div>
         
      </div>
      <div className='bg-white form rounded-t-[8px] border-t border-t-[#005494] py-[16px] px-[35px] flex flex-col gap-4'>
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
              <div className='flex-1 '><button onClick={Submit}  className='gruz_btn w-full text-white font-[700] text-[24px] bg-[#005494] rounded-[8px] py-[5px] px-[12px]'>Заказать</button></div>
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
}
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