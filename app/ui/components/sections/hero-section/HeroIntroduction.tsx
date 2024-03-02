import React from 'react';
import './hero-section.css';
import IntroductionMainDecorLine from '@/app/ui/svgs/decor-lines/IntroductionMainDecorLine';
import Logo from './Logo';
import tabletHeroImageSrc from '../../../../../public/assets/SharonsTabletHero.png';
import Image from 'next/image';
const HeroIntroduction = () => {
  return (
    <div
      className={`background relative flex h-fit w-full flex-col items-center gap-6 self-start pb-20 pt-14 text-center md:w-[45%] md:py-0`}
    >
      <IntroductionMainDecorLine />
      <Logo />

      <h1
        dir='rtl'
        className='text-3xl font-bold text-[#DF678D] md:text-4xl lg:text-5xl'
      >
        היי מהממת <span className='text-4xl'>👋🏻</span>
      </h1>
      <div dir='rtl' className={`text-xl font-normal text-[#330657]`}>
        <p>אני שרון מאמנת כושר אישית ולאורח חיים בריא 🧘🏻‍♀️</p>
        <p>
          מאמנת במקצועי מעל 7 שנים ואני עוזרת לנשים להגיע לגרסה הטובה ביותר
          שלהן.❤️
        </p>
        <p>
          אני מזמינה אותך לחווית אימונים ולחוויה אישית בדרך להשגת המטרה שלך
          בליווי אישי שלי.
        </p>
        <p>
          מעבר לכך שתרגישי טוב עם עצמך תוכלי להנות מפיתוח סיבולת לב ריאה, שיפור
          גמישות שיפור יציבות, שיפור יכולת יום יומית ירידה באחוזי שומן ועלייה
          במסת שריר מה שיגרום לך להיות חטובה יותר ומלאת ביטחון אני מאמנת גם נשים
          בהריון ואחרי לידה, עוסקת באימוני קטינים ואימונים לגיל השלישי.
        </p>
        <p>
          {' '}
          האימונים הם אישיים\זוגיים ושלל רחב של גיווני אימונים: TRX, אימון
          BodyBuilding ופונקציונלי.💪🏻
        </p>
        <p>מוזמנת ליצור איתי קשר וביחד להגיע לגרסה הטובה ביותר של עצמך.🌟</p>
      </div>
    </div>
  );
};

export default HeroIntroduction;
