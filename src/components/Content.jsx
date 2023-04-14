import React from 'react'
import Divider from './Divider'


const Stat = ({ item = {} }) => {
    return <div className='p-4 basis-1/3 grow lg:grow-0 min-w-[280px] '>
        <div className='border-solid border-[1px] border-greyLight  relative rounded-[2px] p-4 pb-6'>
            <div className='flex flex-col gap-y-3 '>
                <span className='text-text text-4xl'> {item.count} </span>
                <span className='text-text text-xs'> {item.title}</span>
                <span className='text-primary text-xs mt-2' > { item.link } </span>
            </div>
            { item.iconClass && <span className={'text-primary text-4xl absolute left-4 top-4 ' + item.iconClass}></span>}
        </div>
    </div>
}
function Content() {
    return (
        <main className='2xl:max-w-[1170px]  lg:max-w-[970px] md:max-w-[768px] mx-auto mt-16 px-8 md:px-0'>
            <div className='bg-grey rounded-sm'>
                <ul className='flex gap-x-8 px-4 py-2' >
                    <span className="bi bi-chevron-left text-text"></span>
                    {
                        NAVS.map((item, idx) => {
                            return <li key={item} className={'text-text hover:text-textDark transition text-sm ' + (idx>1 ? "hidden md:block" : "")}>
                                {item}
                            </li>
                        })
                    }
                </ul>

            </div>

            <Divider title="فعالیت های فریلنسینگ"/>
            <div className='flex flex-wrap  m-[-16px] '>
                {
                    ITEMS.map(item => {
                        return <Stat item={item} />
                    })
                }
            </div>
            <Divider title="فعالیت های کارفرمایی"/>
            <div className='flex flex-wrap  m-[-16px] '>
                {
                    ITEMS2.map(item => {
                        return <Stat item={item} />
                    })
                }
            </div>
        </main>
    )
}

export default Content

const NAVS = [
    "ایجاد",
    "داشبورد",
    "ویرایش پروفایل",
    "تنظیمات ",
]
const ITEMS = [
    {
        count: 256,
        title: "پروژه یا مسابقه با مهارت شما",
        iconClass: "bi bi-clipboard-check",
        link: " مشاهده پروژه‌ها با مهارت های من"
    },
    {
        count: 212,
        title: "پیشنهاد باقی مانده",
        iconClass: "bi bi-person-vcard",
        link: "در یک ماه گذشته 35 پیشنهاد ارسال کردید"
    }
    ,
    {
        count: 2,
        title: "پروژه در دست اقدام",
        iconClass: "bi bi-stopwatch",
        link: "  مشاهده فعالیت‌های من"
    }
    ,
    {
        count: 8,
        title: "نمونه کار ثبت شده توسط شما",
        iconClass: "bi bi-stopwatch",
        link: "51  بار دیده شده در ماه گذشته"
    }
]
const ITEMS2 = [
    {
        count: 1,
        title: "پروژه ایجاد شده",
        link: " ایجاد پروژه جدید"
    }
    ,{
        count: 0,
        title: "مسابقه‌های ایجاد شده",
        link: "ایجاد مسابقه"
    }
    ,{
        count: 3,
        title: "نفر شمارا دنبال میکنند",
        link: "0 دنبال کننده جدید در ماه گذشته"
    }
]
