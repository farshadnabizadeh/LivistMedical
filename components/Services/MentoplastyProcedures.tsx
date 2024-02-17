import React from 'react'
import useTrans from '@/Hooks/useTrans'
const MentoplastyProcedures = () => {
  const t = useTrans();
  return (
    <div className='w-full flex justify-center'>
      <div className='container'>
        <h1 className='font-semibold text-xl mt-20'>{t('Unlocking Facial Harmony with Livist Medical\'s Mentoplasty Procedures')}</h1>

        <p>{t('Experience the artistry of chin transformation through Livist Medical\'s tailored mentoplasty procedures. Primarily pursued for cosmetic enhancements, mentoplasty at Livist Medical is a testament to precision and aesthetic finesse. Please note that Livist Medical does not accept government medical aid for this operation, and our commitment to excellence extends to every aspect of the procedure.')}</p>

        <h2 className='font-semibold text-xl mt-5'>{t('Chin Reduction')}</h2>

        <p>{t('Journey into refined aesthetics with Livist Medical\'s chin reduction, an integral facet of cosmetic surgery. Specifically designed for chins that lean towards excess width or length, chin reduction through jaw shaving emerges as an ideal solution. This meticulous procedure, conducted under general anesthesia in an advanced operating room, ensures minimal scarring and optimal results. With a dedicated recovery period of approximately one month, Livist Medical assures that your chin will gracefully assume its final form, perfectly aligned with your desired aesthetic.')}</p>

        <h2 className='font-semibold text-xl mt-5'>{t('Cosmetic Surgery to the Tip of the Jaw')}</h2>

        <p>{t('Livist Medical offers diverse techniques to contour the tip of the jaw, addressing various concerns such as recessed or protruding chins. Our skilled surgeons adeptly utilize fillers, silicone, or surgical screws to harmonize facial profiles. Tailored to the unique jaw structures of our patients, Livist\'s approach ensures that every intervention complements the individual\'s facial harmony. Whether lengthening, filling, or reducing, Livist Medical crafts bespoke solutions for a refined jawline.')}</p>

        <h2 className='font-semibold text-xl mt-5'>{t('Orthognathic Surgery (Jaw Surgery)')}</h2>

        <p>{t('Embark on a transformative journey with orthognathic surgery, commonly known as jaw surgery, at Livist Medical. This procedure goes beyond cosmetic enhancements, addressing physical concerns related to facial structure. Livist\'s commitment to thorough assessment includes a radiological examination to determine the ideal surgical plan. Under general anesthesia, Livist\'s experienced surgical team performs incisions inside the mouth, leaving no visible scars. The duration of the operation varies, with approximately 1.5 hours for a single jaw and 3 hours for both jaws. Livist ensures a pain-free experience for the patient throughout the procedure.')}</p>

        <h2 className='font-semibold text-xl mt-5'>{t('Post-Orthognathic Surgery Guidelines')}</h2>

        <p>{t('Following orthognathic surgery, Livist Medical guides patients through a tailored recovery process. A short hospital stay of one to two days is standard, with a gradual transition from clear fluids to solid foods over 3-4 days. Notably, Livist Medical does not wire the jaw shut post-surgery, ensuring a smooth resumption of normal activities. Patients undergoing single-jaw surgery can return to their routine after a week, while those with double jaw surgery may resume regular activities in 10-14 days.')}</p>

        <h2 className='font-semibold text-xl mt-5'>{t('Orthognathic Surgery Prices')}</h2>

        <p>{t('Recognizing the uniqueness of each case, Livist Medical refrains from providing generic pricing information for jaw surgery. The intricacies of individual needs, the choice between single or double jaw surgery, and the specific alterations required make each case distinctive. Livist Medical believes in providing accurate pricing based on a comprehensive examination of the patient and determining the ideal procedure and hospital. For personalized insights into orthognathic surgery prices, we encourage you to connect with us. Your transformative journey awaits at Livist Medical.')}</p>

      </div>
    </div>

  )
}

export default MentoplastyProcedures
