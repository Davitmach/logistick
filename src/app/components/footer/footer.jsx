'use client';
import './index.scss';
import Image from 'next/image';
import { useState } from 'react';
export const Footer = ()=> {

        const [acitve,setActive] =useState(false);
    
   
    return(
        <>
        <footer className='relative max-w-[2000px] mx-auto flex flex-col' >
            <div className='First_row border-b border-b-[#94D1FF] px-[60px] py-[48px] flex items-start justify-between'>
                <div className='flex items-start gap-[63px] first-col'>
                    <div className='flex flex-col gap-[56px] mr-[50px]'>
                        <div><p className='text-[#005494] font-[900] text-[64px] footer_logo'><Image className='-translate-x-[5px] footer_logo' src={'/logo.svg'} alt='Logo' width={200} height={200}/></p></div>
                        <div><button className='text-white font-[600] text-[24px] bg-[#005494] rounded-[4px] px-[12px] py-[5px] text-nowrap' onClick={()=> {
                             setActive((prev)=> !prev)
                        }} >Заказать обратный звонок</button></div>
                        <div className='flex gap-[10px]'>
                            <div className='flex items-center justify-center gap-[14px]'>
                                   <div className='wa'>
                        <a target='blank' href="https://api.whatsapp.com/message/3C4B7F533MSHF1?autoload=1&app_absent=0">
                    <svg width="25" height="25" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5581 0.5H25.4419C11.3907 0.5 0 11.8907 0 25.9419V26.0581C0 40.1093 11.3907 51.5 25.4419 51.5H25.5581C39.6093 51.5 51 40.1093 51 26.0581V25.9419C51 11.8907 39.6093 0.5 25.5581 0.5Z" fill="#005494"/>
<path d="M30.4699 33.459C23.9428 33.459 18.6325 28.1469 18.6307 21.6198C18.6325 19.9653 19.9798 18.6198 21.6307 18.6198C21.8005 18.6198 21.9684 18.6341 22.1292 18.6627C22.483 18.7217 22.819 18.8414 23.1281 19.0219C23.1727 19.0487 23.2031 19.0915 23.2102 19.1416L23.8999 23.4888C23.9089 23.5406 23.8928 23.5906 23.8589 23.6282C23.4783 24.0498 22.9923 24.3536 22.4509 24.5055L22.19 24.5787L22.2883 24.8307C23.1781 27.0963 24.9899 28.9063 27.2573 29.7997L27.5092 29.8998L27.5825 29.6389C27.7344 29.0975 28.0381 28.6115 28.4598 28.2309C28.4902 28.2023 28.5313 28.188 28.5724 28.188C28.5813 28.188 28.5902 28.188 28.601 28.1898L32.9482 28.8795C33 28.8884 33.0429 28.917 33.0697 28.9617C33.2484 29.2708 33.3681 29.6085 33.4288 29.9623C33.4574 30.1195 33.4699 30.2857 33.4699 30.459C33.4699 32.1118 32.1245 33.4572 30.4699 33.459Z" fill="#FDFDFD"/>
<path d="M42.0447 24.5678C41.6927 20.5904 39.8701 16.9007 36.913 14.1794C33.938 11.4421 30.0786 9.93406 26.0423 9.93406C17.1834 9.93406 9.97557 17.1419 9.97557 26.0008C9.97557 28.974 10.7957 31.8703 12.3484 34.3932L8.88562 42.0585L19.9726 40.8775C21.9005 41.6672 23.941 42.0675 26.0405 42.0675C26.5926 42.0675 27.159 42.0389 27.7272 41.9799C28.2275 41.9263 28.7332 41.8477 29.2299 41.7476C36.6486 40.2485 42.0643 33.6642 42.1072 26.0865V26.0008C42.1072 25.5183 42.0857 25.0359 42.0429 24.5678H42.0447ZM20.3996 37.513L14.2656 38.1669L16.0971 34.1092L15.7308 33.6178C15.704 33.5821 15.6772 33.5463 15.6468 33.5052C14.0566 31.3093 13.2168 28.7149 13.2168 26.0025C13.2168 18.9305 18.9702 13.1771 26.0423 13.1771C32.6676 13.1771 38.2835 18.3462 38.8249 24.9448C38.8535 25.2986 38.8695 25.6541 38.8695 26.0043C38.8695 26.1044 38.8678 26.2027 38.866 26.3081C38.7302 32.2241 34.5974 37.2485 28.8153 38.5279C28.374 38.6261 27.922 38.7012 27.4717 38.7494C27.0035 38.803 26.5229 38.8298 26.0458 38.8298C24.3466 38.8298 22.6956 38.5011 21.1358 37.8507C20.9625 37.781 20.7927 37.7059 20.6337 37.6291L20.4014 37.5165L20.3996 37.513Z" fill="#FDFDFD"/>
</svg></a>

                  </div>
                                <div className='text-[#005494] text-[24px] soc_text'>WhatsApp</div>
                            </div>
                            <div className='flex items-center justify-center gap-[14px]'>
                            <div className='tg'>
    <a target='blank' href="https://t.me/Trans_Next">
<svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
<div className='text-[#005494] text-[24px] soc_text'>Telegram</div>
                            </div>
                  

                        </div>
                    </div>
                    <div className='flex gap-[63px] footer_menu_items'>
                    <div>
                        <ul className='flex flex-col gap-[8px]'>
                            <li><a href="#gruz" className='text-[#005494] font-[700] text-[24px]'>Услуги</a></li>
                            <li><a href="https://docs.google.com/document/d/1l_utIp7l-GRbAVlzr8BEtqabrIi_NqnW?usp=drive_link&ouid=112087202378903553016&rtpof=true&sd=true" target='_blank' className='text-[#005494] font-[700] text-[24px]'>Тарифы</a></li>
                            <li><a href="#news" className='text-[#005494] font-[700] text-[24px]'>Новости</a></li>
                        </ul>
                    </div>
                    <div>
                    <ul className='flex flex-col gap-[8px]'>
                            <li><a href="" className='text-[#005494] font-[700] text-[24px]'>Документация</a></li>
                            <li><a href="" className='text-[#005494] font-[700] text-[24px]'>Контакты</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[24px] footer_items'>
                    <div className='flex items-center gap-[19px] footer_grafik'>
                        <div><svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.4168 41.1668L35.7502 45.5002L45.5002 35.7502M47.6346 27.1916C47.656 26.7971 47.6668 26.3999 47.6668 26.0002C47.6668 14.034 37.9663 4.3335 26.0002 4.3335C14.034 4.3335 4.3335 14.034 4.3335 26.0002C4.3335 37.7769 13.7293 47.3591 25.4336 47.6596M26.0002 13.0002V26.0002L34.1 30.0501" stroke="#CBE8FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div><p className='text-[#005494] text-[24px] max-w-[516px]'>Пн-Пт: с 09:00 до 18:00 (время московское)Сб-Вс: выходной</p></div>
                    </div>
                    <div className='flex items-center gap-[19px] footer_phone'>
                        <div><svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.4411 13.0002C32.5574 13.4131 34.5023 14.4481 36.0269 15.9727C37.5515 17.4973 38.5865 19.4422 38.9994 21.5585M30.4411 4.3335C34.8379 4.82194 38.9379 6.79087 42.068 9.91701C45.198 13.0432 47.1721 17.1407 47.6661 21.5368M22.1579 30.0368C19.5545 27.4334 17.4988 24.4897 15.9908 21.3488C15.8611 21.0787 15.7962 20.9436 15.7464 20.7727C15.5693 20.1652 15.6965 19.4193 16.0648 18.9049C16.1685 18.7601 16.2923 18.6363 16.54 18.3886C17.2975 17.6311 17.6762 17.2524 17.9239 16.8715C18.8577 15.4353 18.8577 13.5837 17.9239 12.1474C17.6762 11.7666 17.2975 11.3878 16.54 10.6304L16.1178 10.2081C14.9663 9.05668 14.3906 8.48095 13.7723 8.16821C12.5426 7.54622 11.0903 7.54622 9.86061 8.16821C9.24229 8.48095 8.66656 9.05668 7.5151 10.2081L7.17356 10.5497C6.02604 11.6972 5.45228 12.271 5.01408 13.051C4.52783 13.9166 4.17822 15.261 4.18117 16.2538C4.18383 17.1486 4.35739 17.76 4.70451 18.983C6.56994 25.5554 10.0896 31.7571 15.2636 36.9311C20.4376 42.1051 26.6393 45.6248 33.2117 47.4902C34.4347 47.8373 35.0461 48.0109 35.9409 48.0135C36.9337 48.0165 38.2781 47.6669 39.1437 47.1806C39.9237 46.7424 40.4975 46.1687 41.645 45.0211L41.9866 44.6796C43.138 43.5281 43.7137 42.9524 44.0265 42.3341C44.6485 41.1044 44.6485 39.6521 44.0265 38.4224C43.7137 37.8041 43.138 37.2284 41.9866 36.0769L41.5643 35.6547C40.8069 34.8972 40.4281 34.5185 40.0473 34.2708C38.611 33.337 36.7594 33.337 35.3231 34.2708C34.9423 34.5185 34.5636 34.8972 33.8061 35.6547C33.5584 35.9024 33.4346 36.0262 33.2898 36.1299C32.7754 36.4982 32.0295 36.6254 31.422 36.4483C31.2511 36.3985 31.116 36.3336 30.8459 36.2039C27.705 34.6959 24.7613 32.6402 22.1579 30.0368Z" stroke="#CBE8FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div>
                            <div><p className='text-[#005494] font-[400] text-[24px]'>+7(966)0113995</p></div>
                            {/* <div><p className='text-[#005494] text-[24px]'>8 (800) 707-53-40</p></div> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-[19px] geo'>
                        <div><svg width="31" height="31" viewBox="0 0 51 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5 33.35C30.367 33.35 34.3125 29.522 34.3125 24.8C34.3125 20.078 30.367 16.25 25.5 16.25C20.633 16.25 16.6875 20.078 16.6875 24.8C16.6875 29.522 20.633 33.35 25.5 33.35Z" stroke="#CBE8FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.5 59C37.25 47.6 49 37.3921 49 24.8C49 12.2079 38.4787 2 25.5 2C12.5213 2 2 12.2079 2 24.8C2 37.3921 13.75 47.6 25.5 59Z" stroke="#CBE8FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div><p className='text-[#005494] text-[24px] max-w-[521px]'>Адрес компании г. Москва, ул. Платформа Северянин, вл.14, стр.1</p></div>
                    </div>
                </div>
            </div>



            <div className='py-[32px] px-[60px] footer_last_row'><p className='text-[#005494] text-[24px] footer_info'>Транспортная компания "TransNext" © 2019

Вся предоставленная информация и
цены, указанные на сайте, носят
информационный характер и не являются публичной офертой (ст. 437 ГК РФ).</p></div>
        </footer>
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
                  <div><input className='outline-none border border-[#005494] rounded-[8px]' placeholder='Иванов Иван Иванович' type="text" /></div>
              </div>
              <div className='input_box'>
                  <div className='mb-[20px]'><label htmlFor="" className='text-[#005494] font-[700] text-[24px]'>Телефон</label></div>
                  <div><input className='outline-none border border-[#005494] rounded-[8px]' placeholder='8 800 707-53-40' type="text" /></div>
              </div>
              <div className='flex-1 '><button className='gruz_btn w-full text-white font-[700] text-[24px] bg-[#005494] rounded-[8px] py-[5px] px-[12px]'>Заказать</button></div>
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
        </>
    )
}