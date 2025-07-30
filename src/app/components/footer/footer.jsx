"use client";
import "./index.scss";
import Image from "next/image";
import { useState } from "react";
export const Footer = () => {
  const [acitve, setActive] = useState(false);

  return (
    <>
      <footer className="relative max-w-[2000px] mx-auto flex flex-col">
        <div className="First_row border-b border-b-[#94D1FF] px-[60px] py-[48px] flex items-start justify-between">
          <div className="flex items-start gap-[63px] first-col">
            <div className="flex flex-col gap-[56px] mr-[50px]">
              <div>
                <p className="text-[#005494] font-[900] text-[64px] footer_logo">
                  <Image
                    className="-translate-x-[5px] footer_logo"
                    src={"/logo.svg"}
                    alt="Logo"
                    width={200}
                    height={200}
                  />
                </p>
              </div>
              <div>
                <button
                  className="text-white font-[600] text-[24px] bg-[#005494] rounded-[4px] px-[12px] py-[5px] text-nowrap"
                  onClick={() => {
                    setActive((prev) => !prev);
                  }}
                >
                  Обратный звонок
                </button>
              </div>
              <div className="flex gap-[10px]">
                <div className="flex items-center justify-center gap-[14px]">
                  <div className="wa">
                    <a
                      target="blank"
                      href="https://api.whatsapp.com/message/3C4B7F533MSHF1?autoload=1&app_absent=0"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 51 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.5581 0.5H25.4419C11.3907 0.5 0 11.8907 0 25.9419V26.0581C0 40.1093 11.3907 51.5 25.4419 51.5H25.5581C39.6093 51.5 51 40.1093 51 26.0581V25.9419C51 11.8907 39.6093 0.5 25.5581 0.5Z"
                          fill="#005494"
                        />
                        <path
                          d="M30.4699 33.459C23.9428 33.459 18.6325 28.1469 18.6307 21.6198C18.6325 19.9653 19.9798 18.6198 21.6307 18.6198C21.8005 18.6198 21.9684 18.6341 22.1292 18.6627C22.483 18.7217 22.819 18.8414 23.1281 19.0219C23.1727 19.0487 23.2031 19.0915 23.2102 19.1416L23.8999 23.4888C23.9089 23.5406 23.8928 23.5906 23.8589 23.6282C23.4783 24.0498 22.9923 24.3536 22.4509 24.5055L22.19 24.5787L22.2883 24.8307C23.1781 27.0963 24.9899 28.9063 27.2573 29.7997L27.5092 29.8998L27.5825 29.6389C27.7344 29.0975 28.0381 28.6115 28.4598 28.2309C28.4902 28.2023 28.5313 28.188 28.5724 28.188C28.5813 28.188 28.5902 28.188 28.601 28.1898L32.9482 28.8795C33 28.8884 33.0429 28.917 33.0697 28.9617C33.2484 29.2708 33.3681 29.6085 33.4288 29.9623C33.4574 30.1195 33.4699 30.2857 33.4699 30.459C33.4699 32.1118 32.1245 33.4572 30.4699 33.459Z"
                          fill="#FDFDFD"
                        />
                        <path
                          d="M42.0447 24.5678C41.6927 20.5904 39.8701 16.9007 36.913 14.1794C33.938 11.4421 30.0786 9.93406 26.0423 9.93406C17.1834 9.93406 9.97557 17.1419 9.97557 26.0008C9.97557 28.974 10.7957 31.8703 12.3484 34.3932L8.88562 42.0585L19.9726 40.8775C21.9005 41.6672 23.941 42.0675 26.0405 42.0675C26.5926 42.0675 27.159 42.0389 27.7272 41.9799C28.2275 41.9263 28.7332 41.8477 29.2299 41.7476C36.6486 40.2485 42.0643 33.6642 42.1072 26.0865V26.0008C42.1072 25.5183 42.0857 25.0359 42.0429 24.5678H42.0447ZM20.3996 37.513L14.2656 38.1669L16.0971 34.1092L15.7308 33.6178C15.704 33.5821 15.6772 33.5463 15.6468 33.5052C14.0566 31.3093 13.2168 28.7149 13.2168 26.0025C13.2168 18.9305 18.9702 13.1771 26.0423 13.1771C32.6676 13.1771 38.2835 18.3462 38.8249 24.9448C38.8535 25.2986 38.8695 25.6541 38.8695 26.0043C38.8695 26.1044 38.8678 26.2027 38.866 26.3081C38.7302 32.2241 34.5974 37.2485 28.8153 38.5279C28.374 38.6261 27.922 38.7012 27.4717 38.7494C27.0035 38.803 26.5229 38.8298 26.0458 38.8298C24.3466 38.8298 22.6956 38.5011 21.1358 37.8507C20.9625 37.781 20.7927 37.7059 20.6337 37.6291L20.4014 37.5165L20.3996 37.513Z"
                          fill="#FDFDFD"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="text-[#005494] text-[24px] soc_text">
                    WhatsApp
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[14px]">
                  <div className="tg">
                    <a target="blank" href="https://t.me/Trans_Next">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_318_61)">
                          <path
                            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                            fill="url(#paint0_linear_318_61)"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.8638 23.7466C17.8603 20.6984 22.5257 18.6888 24.8601 17.7179C31.5251 14.9456 32.91 14.4641 33.8127 14.4482C34.0113 14.4447 34.4552 14.4939 34.7427 14.7272C34.9855 14.9242 35.0523 15.1904 35.0843 15.3771C35.1163 15.5639 35.1561 15.9895 35.1244 16.3219C34.7633 20.1169 33.2004 29.3263 32.4053 33.5767C32.0689 35.3752 31.4065 35.9783 30.7652 36.0373C29.3714 36.1655 28.3131 35.1162 26.9632 34.2313C24.8509 32.8467 23.6576 31.9847 21.6072 30.6336C19.2377 29.0721 20.7738 28.2139 22.1242 26.8113C22.4776 26.4442 28.6183 20.8587 28.7372 20.352C28.7521 20.2886 28.7659 20.0524 28.6255 19.9277C28.4852 19.803 28.2781 19.8456 28.1286 19.8795C27.9168 19.9276 24.5423 22.158 18.0053 26.5707C17.0475 27.2284 16.1799 27.5489 15.4026 27.5321C14.5457 27.5135 12.8973 27.0475 11.6719 26.6492C10.1689 26.1606 8.97432 25.9023 9.07834 25.0726C9.13252 24.6404 9.72767 24.1984 10.8638 23.7466Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_318_61"
                            x1="24"
                            y1="0"
                            x2="24"
                            y2="47.644"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#005494" />
                            <stop offset="1" stopColor="#005494" />
                          </linearGradient>
                          <clipPath id="clip0_318_61">
                            <rect width="48" height="48" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div className="text-[#005494] text-[24px] soc_text">
                    Telegram
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[63px] footer_menu_items">
              <div>
                <ul className="flex flex-col gap-[8px]">
                  <li>
                    <a
                      href="#gruz"
                      className="text-[#005494] font-[700] text-[24px]"
                    >
                      Услуги
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/document/d/1l_utIp7l-GRbAVlzr8BEtqabrIi_NqnW?usp=drive_link&ouid=112087202378903553016&rtpof=true&sd=true"
                      target="_blank"
                      className="text-[#005494] font-[700] text-[24px]"
                    >
                      Тарифы
                    </a>
                  </li>
                  <li>
                    <a
                      href="#news"
                      className="text-[#005494] font-[700] text-[24px]"
                    >
                      Новости
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-[8px]">
                  <li>
                    <a
                      href=""
                      className="text-[#005494] font-[700] text-[24px]"
                    >
                      Документация
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#005494] font-[700] text-[24px]"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] footer_items">
            <div className="flex items-center gap-[19px] footer_grafik">
              <div>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.4167 39.1668L33.75 43.5002L43.5 33.7502M45.6345 25.1916C45.6559 24.7971 45.6667 24.3999 45.6667 24.0002C45.6667 12.034 35.9662 2.3335 24 2.3335C12.0339 2.3335 2.33337 12.034 2.33337 24.0002C2.33337 35.7769 11.7291 45.3591 23.4334 45.6596M24 11.0002V24.0002L32.0998 28.0501"
                    stroke="#CBE8FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[#005494] text-[24px] max-w-[516px]">
                  Пн-Пт: с 09:00 до 18:00 (время московское)Сб-Вс: выходной
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[19px] footer_phone">
                <div className="flex items-center gap-[19px]">
              <div>
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.441 11.0002C30.5572 11.4131 32.5021 12.4481 34.0268 13.9727C35.5514 15.4973 36.5864 17.4422 36.9993 19.5585M28.441 2.3335C32.8377 2.82194 36.9378 4.79087 40.0678 7.91701C43.1979 11.0432 45.172 15.1407 45.666 19.5368M20.1578 28.0368C17.5543 25.4334 15.4986 22.4897 13.9906 19.3488C13.8609 19.0787 13.7961 18.9436 13.7462 18.7727C13.5692 18.1652 13.6964 17.4193 14.0647 16.9049C14.1684 16.7601 14.2922 16.6363 14.5399 16.3886C15.2974 15.6311 15.6761 15.2524 15.9237 14.8715C16.8576 13.4353 16.8576 11.5837 15.9237 10.1474C15.6761 9.76658 15.2974 9.38784 14.5399 8.63036L14.1177 8.20814C12.9662 7.05668 12.3905 6.48095 11.7722 6.16821C10.5424 5.54622 9.09021 5.54622 7.86049 6.16821C7.24216 6.48095 6.66644 7.05668 5.51498 8.20814L5.17343 8.54968C4.02592 9.6972 3.45216 10.271 3.01396 11.051C2.52771 11.9166 2.17809 13.261 2.18105 14.2538C2.18371 15.1486 2.35727 15.76 2.70438 16.983C4.56982 23.5554 8.08951 29.7571 13.2635 34.9311C18.4374 40.1051 24.6392 43.6248 31.2116 45.4902C32.4345 45.8373 33.046 46.0109 33.9407 46.0135C34.9336 46.0165 36.278 45.6669 37.1435 45.1806C37.9236 44.7424 38.4974 44.1687 39.6449 43.0211L39.9864 42.6796C41.1379 41.5281 41.7136 40.9524 42.0264 40.3341C42.6484 39.1044 42.6484 37.6521 42.0264 36.4224C41.7136 35.8041 41.1379 35.2284 39.9864 34.0769L39.5642 33.6547C38.8067 32.8972 38.428 32.5185 38.0471 32.2708C36.6109 31.337 34.7593 31.337 33.323 32.2708C32.9422 32.5185 32.5634 32.8972 31.806 33.6547C31.5583 33.9024 31.4344 34.0262 31.2897 34.1299C30.7752 34.4982 30.0294 34.6254 29.4219 34.4483C29.251 34.3985 29.1159 34.3336 28.8457 34.2039C25.7049 32.6959 22.7612 30.6402 20.1578 28.0368Z"
                    stroke="#CBE8FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <p className="text-[#005494] font-[400] text-[24px] flex flex-col gap-[4px]">
                    <span>8 (495) 374-51-55</span>
                    <span>8 (800) 707-53-40</span>
                  </p>
                </div>
                {/* <div><p className='text-[#005494] text-[24px]'>8 (800) 707-53-40</p></div> */}
              </div>
              </div>
                <div className="flex items-center gap-[19px] mail_footer_low_res">
              <div>
               <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4L9.16492 9.71544C9.82609 10.1783 10.1567 10.4097 10.5163 10.4993C10.8339 10.5785 11.1661 10.5785 11.4837 10.4993C11.8433 10.4097 12.1739 10.1783 12.8351 9.71544L21 4M5.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12.2C1 13.8802 1 14.7202 1.32698 15.362C1.6146 15.9265 2.07354 16.3854 2.63803 16.673C3.27976 17 4.11984 17 5.8 17Z" stroke="#CBE8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

              </div>
              <div>
                <div>
                  <p className="text-[#005494] font-[400] text-[24px] flex flex-col gap-[4px]">
                   info@transnext.ru
                  </p>
                </div>
                {/* <div><p className='text-[#005494] text-[24px]'>8 (800) 707-53-40</p></div> */}
              </div>
              </div>
            </div>

            <div className="flex items-center gap-[19px] geo">
              <div>
                <svg
                  width="51"
                  height="61"
                  viewBox="0 0 51 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5 33.35C30.367 33.35 34.3125 29.522 34.3125 24.8C34.3125 20.078 30.367 16.25 25.5 16.25C20.633 16.25 16.6875 20.078 16.6875 24.8C16.6875 29.522 20.633 33.35 25.5 33.35Z"
                    stroke="#CBE8FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.5 59C37.25 47.6 49 37.3921 49 24.8C49 12.2079 38.4787 2 25.5 2C12.5213 2 2 12.2079 2 24.8C2 37.3921 13.75 47.6 25.5 59Z"
                    stroke="#CBE8FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[#005494] text-[24px] max-w-[521px]">
                  г. Москва, ул. Платформа Северянин,вл. 14, стр. 1
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[19px] geo">
              <div>
                <svg
                  width="52"
                  height="42"
                  viewBox="0 0 52 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66663 9.3335L21.7181 22.6695C23.2608 23.7494 24.0322 24.2894 24.8712 24.4985C25.6124 24.6833 26.3875 24.6833 27.1287 24.4985C27.9677 24.2894 28.7391 23.7494 30.2818 22.6695L49.3333 9.3335M13.8666 39.6668H38.1333C42.0537 39.6668 44.0138 39.6668 45.5112 38.9039C46.8284 38.2328 47.8992 37.1619 48.5703 35.8448C49.3333 34.3474 49.3333 32.3872 49.3333 28.4668V13.5335C49.3333 9.61313 49.3333 7.65295 48.5703 6.15556C47.8992 4.83843 46.8284 3.76756 45.5112 3.09645C44.0138 2.3335 42.0537 2.3335 38.1333 2.3335H13.8666C9.94626 2.3335 7.98607 2.3335 6.48869 3.09645C5.17156 3.76756 4.10069 4.83843 3.42958 6.15556C2.66663 7.65295 2.66663 9.61313 2.66663 13.5335V28.4668C2.66663 32.3872 2.66663 34.3474 3.42958 35.8448C4.10069 37.1619 5.17156 38.2328 6.48869 38.9039C7.98607 39.6668 9.94626 39.6668 13.8666 39.6668Z"
                    stroke="#CBE8FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[#005494] text-[24px] max-w-[521px]">
                  info@transnext.ru
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[32px] px-[60px] footer_last_row">
          <p className="text-[#005494] text-[24px] footer_info">
            Транспортная компания "TransNext" © 2019 Вся предоставленная
            информация и цены, указанные на сайте, носят информационный характер
            и не являются публичной офертой (ст. 437 ГК РФ).
          </p>
        </div>
      </footer>
      {acitve == true && (
        <div className="fixed left-0 top-0 flex items-center justify-center z-[9999999999] bg-black/60   w-full h-[100vh]">
          <div className=" max-w-[1210px] w-[70%] z-50 mt-[36px] fixed_form_container  rounded-[8px] border border-[#005494] ">
            <div className="title_box bg-[#005494] px-[35px] py-[10px] overflow-hidden flex justify-between items-center">
              <div>
                {" "}
                <div>
                  <p className="text-white font-[700] text-[48px]">
                    Заявка на бесплатный расчет
                  </p>
                </div>
                <div>
                  <p className="font-[400] text-white text-[20px]">
                    Введите Ваши данные, чтобы отправить груз, и наш менеджер
                    свяжется с Вами
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  setActive(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="54"
                  height="54"
                  fill="white"
                >
                  <path d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 0 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414z" />
                </svg>
              </div>
            </div>
            <div className="bg-white form rounded-t-[8px] border-t border-t-[#005494] py-[16px] px-[35px] flex flex-col gap-4">
              <div className="flex gap-3 items-end">
                <div className="input_box">
                  <div className="mb-[20px]">
                    <label
                      htmlFor=""
                      className="text-[#005494] font-[700] text-[24px]"
                    >
                      ФИО
                    </label>
                  </div>
                  <div>
                    <input
                      className="outline-none border border-[#005494] rounded-[8px]"
                      placeholder="Иванов Иван Иванович"
                      type="text"
                    />
                  </div>
                </div>
                <div className="input_box">
                  <div className="mb-[20px]">
                    <label
                      htmlFor=""
                      className="text-[#005494] font-[700] text-[24px]"
                    >
                      Телефон
                    </label>
                  </div>
                  <div>
                    <input
                      className="outline-none border border-[#005494] rounded-[8px]"
                      placeholder="8 800 707-53-40"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex-1 ">
                  <button className="gruz_btn w-full text-white font-[700] text-[24px] bg-[#005494] rounded-[8px] py-[5px] px-[12px]">
                    Заказать
                  </button>
                </div>
              </div>
              <div>
                {" "}
                <div className="custom-checkbox-container">
                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      className="rounded-[8px] w-[28px] h-[28px]"
                    />
                    <span className="text-[#005494] text-[20px]">
                      Я согласен(на) на обработку персональных данных
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
