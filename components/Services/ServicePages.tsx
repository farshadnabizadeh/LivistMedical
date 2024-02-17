import React, { FC } from 'react'
import useTrans from '@/Hooks/useTrans'
interface ServicePagesProps {
  data?: any,
}
const ServicePages: FC<ServicePagesProps> = (data: any) => {
  const t = useTrans()
  return (
    <section className='w-full flex justify-center'>
      <div className='container'>
        <div className='font-semibold text-xl mt-20'>
          {t('Define Sculpted Elegance with Arm Lift Surgery at Livist Medical')}
        </div>

        <div className='font-medium text-lg mt-3'>{t('What is Arm Lift Surgery ?')}</div>
        <p>{t('Arm lift surgery, an aesthetic marvel at Livist Medical, is a transformative procedure designed to impart a firmer and more aesthetically pleasing appearance by addressing sagging or drooping arms. This surgical artistry involves the removal of excess skin and adipose tissue, crafting arms with a taut and youthful allure. Typically, incisions are discreetly placed in the armpit or inner arm, ensuring a harmonious result.')}</p>

        <p className='mt-5'><strong>{t('How is Arm Lift Surgery Performed at Livist Medical?')}</strong></p>
        <p>{t('At Livist Medical, arm lift surgery is conducted with precision, aiming for optimal patient comfort. While usually performed under general anesthesia, cases may involve the use of local anesthesia or sedation. The skilled surgeon adeptly removes skin and fatty tissue from the lower arms, creating a tightened and refined arm contour. When necessary, simultaneous liposuction may complement the procedure.')}</p>

        <p className='mt-5'><strong>{t('Benefits of Arm Lift Surgery at Livist Medical')}:</strong></p>
        <ol className='mt-3'>
          <li className='mt-5'><strong>{t('Aesthetic Refinement')}:</strong></li>
          <ul className='mt-2'>
            <li>{t('Corrects sagging or drooping arms, achieving a more aesthetically pleasing appearance.')}</li>
          </ul>
          <li className='mt-5'><strong>{t('Youthful and Fit Look:')}</strong></li>
          <ul>
            <li className='mt-2'>{t('Tighter, sculpted arms contribute to a younger and fitter overall look.')}</li>
          </ul>
          <li className='mt-5'><strong>{t('Enhanced Wardrobe Comfort:')}</strong></li>
          <ul>
            <li className='mt-2'>{t('Arms become more versatile, allowing for comfortable wear of clothing restricted by sagging.')}</li>
          </ul>
        </ol>

        <p className='mt-5'><strong>{t('Recovery Process After Arm Lift Surgery:')}</strong></p>
        <p>{t("The postoperative healing process after arm lift surgery spans a few weeks. While there may be mild discomfort, swelling, and bruising, Livist {`Medical's`} dedicated support team provides comprehensive postoperative care instructions. Regular use of recommended tight sleeves or bandages, coupled with guided movement recommendations, ensures a smooth recovery.")}</p>

        <p>{t('Arm lift surgery delivers enduring results, yet the impact may evolve over time with the natural aging process. Sustaining long-lasting results is facilitated through regular exercise, a wholesome diet, and maintaining a stable body weight.')}</p>

        <h3 className='mt-5'>{t('FAQ - Your Guide to Arm Lift Surgery at Livist Medical:')}</h3>
        <ol className='mt-3'>
          <li><strong>{t('Does arm lift surgery at Livist Medical leave scars?')}</strong></li>
          <p>{t('Minimal scars may result from arm lift surgery, strategically placed in concealed areas. Over time, the appearance of scars diminishes, typically becoming inconspicuous.')}</p>

          <li className='mt-5'><strong>{t('Is arm lift surgery at Livist Medical a painful procedure?')}</strong></li>
          <p>{t('Arm lift surgery, conducted under general anesthesia, ensures a pain-free experience during the procedure. Postoperative discomfort, swelling, and bruising can be effectively managed with prescribed painkillers.')}</p>

          <li className='mt-5'><strong>{t('Does arm lift surgery at Livist Medical provide permanent results?')}</strong></li>
          <p>{t('The tightened and sculpted arms achieved through arm lift surgery are generally permanent. Nevertheless, results may evolve over time with the aging process. Sustaining results is facilitated through a healthy lifestyle, weight control, and regular exercise.')}</p>

          <li className='mt-5'><strong>{t('Who is a suitable candidate for arm lift surgery at Livist Medical?')}</strong></li>
          <p>{t('Generally healthy individuals seeking to address sagging or drooping arms and maintaining a stable body weight are suitable candidates. A thorough evaluation and consultation with your Livist Medical plastic surgeon determine your suitability.')}</p>

          <li className='mt-5'><strong>{t('Is arm lift surgery at Livist Medical risky?')}</strong></li>
          <p>{t('Like any surgical procedure, arm lift surgery carries some risks, including infection, bleeding, tissue damage, and wound healing issues. These risks are minimized under the expertise of an experienced plastic surgeon at Livist Medical.')}</p>
        </ol>

        <p>{t('Livist Medical invites you to embark on a journey to sculpted elegance through advanced arm lift surgery. For inquiries or to explore arm lift surgery options, connect with Livist Medical\'s dedicated support team via Phone, WhatsApp, SMS, or FaceTime. Trust Livist Medical for exceptional results in arm contour refinement.')}</p>

      </div>
    </section>
  )
}

export default ServicePages
