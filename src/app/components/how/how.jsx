import './index.scss';

export const How = ()=> {
    return(
        <div className='how_container bg-[#CBE8FF] w-full  mt-[42px] py-[40px]'>
            <div className='max-w-[2000px] mx-auto'>
            <div className='how_title px-[60px]'><p className='text-[#005494] font-[700] text-[48px]'>Как мы работаем</p></div>
            <div className='how_box px-[60px] mt-[48px]'>
            <div className='first_row flex w-full flex-wrap items-center'>
    <div className='step'>
        <p>01</p>
        <span>Оставьте заявку</span>
    </div>
    <div className='line'></div>
    <div className='step'>
        <p>02</p>
        <span>Звонок от менеджера</span>
    </div>
    <div className='line'></div>
    <div className='line'></div>
    <div className='step'>
        <p>03</p>
        <span>Заключение договора</span>
    </div>
    <div className='line'></div>
    <div className='step'>
        <p>04</p>
        <span>Передача груза</span>
    </div>
    <div className='line'></div>
    <div className='line'></div>
    <div className='step step_last mr-[100px]'>
        <p>05</p>
        <span>Контроль доставки груза</span>
    </div>
    <div className=' step  opacity-0'>
        <p>05</p>
        <span>Контроль доставки груза</span>
    </div>
</div>

            
            </div>
            </div>
        </div>
    )
}