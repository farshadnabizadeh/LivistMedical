import React, { FC } from 'react'
import useTrans from '@/Hooks/useTrans'
interface EyelidAestheticsPageProps {
  data?: any
}
const EyelidAestheticsPage: FC<EyelidAestheticsPageProps> = (data) => {
  const t = useTrans();
  console.log(data?.data?.title)
  return (
    <div className='w-full flex justify-center'>
      <div className='container'>
        <h1 className='mt-16 text-xl font-semibold'>{t('Rejuvenate Your Eyes with Eyelid Surgery at Livist Medical')}</h1>

        <p className='mt-5'><strong>{t('What is Eyelid Surgery?')}</strong><br />
          {t('Eyelid surgery, a transformative procedure performed under local anesthesia at Livist Medical, effectively addresses sagging or baggy eyelids, providing individuals with a more youthful and vibrant appearance. This surgical intervention involves the meticulous removal of excess skin, muscle, and fatty tissue, resulting in taut and refreshed eyelids. Eyelid surgery can be tailored for the upper or lower eyelids separately or performed together for comprehensive enhancement.')}</p>

        <h2 className='mt-10 text-lg font-semibold'>{t('How is Eyelid Surgery Performed at Livist Medical?')}</h2>

        <p>{t('At Livist Medical, eyelid surgery is conducted with a focus on patient comfort. Administered under local anesthesia, this approach ensures that patients remain conscious and communicative during the procedure. By numbing only the surgical area, Livist Medical aims to enhance the overall experience and postoperative recovery for each patient.')}</p>

        <h2 className='mt-5 text-lg font-semibold'>{t('Benefits of Eyelid Surgery at Livist Medical:')}</h2>

        <ol>
          <li>{t('Youthful and Vibrant Appearance:')}
            <ul>
              <li>{t('Eyelid surgery corrects sagging or baggy eyelids, imparting a younger and more vibrant look.')}</li>
            </ul>
          </li>
          <li className='mt-3'>{t('Open and Bright Eyes:')}
            <ul>
              <li>{t('The procedure enhances the openness and brightness of the eyes, contributing to a more alert and energetic appearance.')}</li>
            </ul>
          </li>
          <li className='mt-3'>{t('Visual Field Improvement:')}
            <ul>
              <li>{t('Eyelid surgery can open up the visual field, reducing eye strain and enhancing overall vision.')}</li>
            </ul>
          </li>
        </ol>

        <h2 className='mt-5 font-semibold text-lg'>{t('Recovery Process After Eyelid Surgery:')}</h2>

        <p>{t('The recovery process after eyelid surgery at Livist Medical is generally swift. While there may be mild discomfort, swelling, and bruising in the postoperative period, these effects can be effectively managed with prescribed painkillers. Patients receive comprehensive postoperative care instructions, including the regular use of recommended eye drops, eye protection, and adherence to the prescribed recovery plan.')}</p>

        <h2 className='mt-5 font-semibold text-lg'>{t('FAQ - Your Guide to Eyelid Surgery at Livist Medical:')}</h2>

        <ol>
          <li className='mt-5 font-normal text-base'><strong>{t('Does eyelid surgery at Livist Medical provide permanent results?')}</strong>
            <ul>
              <li>{t('Yes, the results obtained from eyelid surgery are typically permanent. By tightening the eyelids through the removal of excess skin, muscle, and fat tissue, sagging and bagging issues are significantly reduced. However, natural aging may impact the longevity of results over time.')}</li>
            </ul>
          </li>
          <li className='mt-5'><strong>{t('Is eyelid surgery at Livist Medical a painful procedure?')}</strong>
            <ul>
              <li>{t('Eyelid surgery, performed under local anesthesia, ensures a pain-free experience during the procedure. Postoperative discomfort, swelling, and bruising can be effectively managed with painkillers.')}</li>
            </ul>
          </li>
          <li className='mt-5'><strong>{t('Who is a suitable candidate for eyelid surgery at Livist Medical?')}</strong>
            <ul>
              <li>{t('Generally healthy individuals seeking to address drooping or baggy eyelids are suitable candidates. The evaluation with a plastic surgeon at Livist Medical will determine your suitability for the procedure.')}</li>
            </ul>
          </li>
          <li className='mt-5'><strong>{t('What is the healing process after eyelid surgery at Livist Medical?')}</strong>
            <ul>
              <li>{t('The healing process typically spans a few weeks, with postoperative swelling, bruising, and mild discomfort. Postoperative care instructions provided by your surgeon guide you through the full recovery process.')}</li>
            </ul>
          </li>
          <li className='mt-5'><strong>{t('Is eyelid surgery at Livist Medical risky?')}</strong>
            <ul>
              <li>{t('Like any surgical procedure, eyelid surgery involves some risks, including infection, bleeding, tissue damage, dry eye, and changes on the surface of the eye. However, these risks are minimized when the surgery is performed by experienced plastic surgeons at Livist Medical.')}</li>
            </ul>
          </li>
        </ol>

        <p className='mt-5'>{t('Livist Medical invites you to rediscover the youthful allure of your eyes through advanced eyelid surgery. For inquiries or to explore eyelid surgery options, connect with Livist Medical\'s dedicated support team. Trust Livist Medical for exceptional results in eyelid rejuvenation.')}</p>

      </div>
    </div>

  )
}

export default EyelidAestheticsPage
