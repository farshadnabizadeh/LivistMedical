import React from 'react'
import useTrans from '@/Hooks/useTrans'
const BreastAestheticsPage = () => {
  const t = useTrans();
  return (
    <div className='w-full flex justify-center'>
      <div className='container'>
        <h1 className='mt-20 font-semibold text-xl'>{t(`Elevate Your Confidence with Livist Medical's Comprehensive Breast Aesthetics`)}</h1>

        <p>{t('At Livist Medical, we understand that breast aesthetics is a vital concern for many women, impacting both their psychological well-being and overall quality of life. Our array of specialized breast procedures is designed to address various needs, offering tailored solutions that blend aesthetics and health.')}</p>

        <h2 className='mt-5'>{t('1 – Breast Reduction: Achieving Harmony for Your Well-being')}</h2>
        <p className='mt-4'><strong>{t('What is Breast Reduction Surgery?')}</strong> {t('This surgical procedure focuses on reducing breast volume to achieve the targeted ideal size, considering both aesthetics and health. Large breast size can lead to various health problems, including back, neck, and shoulder pain, posture issues, and limitations in physical activities. The surgery ensures a symmetrical and proportionate breast form, addressing the root causes of these concerns.')}</p>

        <p className='mt-4'><strong>{t('How is Breast Reduction Surgery Performed?')}</strong> {t(`Taking into account the patient's unique condition, excess tissue and skin are meticulously removed, and the nipple is repositioned to achieve the desired outcome. The procedure typically lasts 2-4 hours, depending on factors like breast size and chosen method, with patients under general anesthesia. Mild pain may be experienced for 2-3 days post-surgery.`)}</p>

        <h2 className='mt-5'>{t('2 – Breast Augmentation: Enhancing Feminine Beauty with Precision')}</h2>
        <p className='mt-3'><strong>{t('What is Breast Augmentation Surgery?')}</strong> {t(`This surgery focuses on enlarging breast volume to achieve a balanced and appealing appearance. Deciding on the ideal breast shape and size involves considerations such as the patient's age, body structure, and the condition of the breast skin and tissue. Livist Medical offers options like breast implants and fat transfers, ensuring a natural feel and appearance.`)}</p>

        <p className='mt-3'><strong>{t('How is Breast Augmentation Surgery Performed?')}</strong> {t('Under general anesthesia, the surgery typically takes approximately 1.5 hours, with mild postoperative pain controlled by simple painkillers. Livist Medical recommends specific aftercare measures, including wearing a sports bra for 3 weeks and avoiding certain activities for optimal healing.')}</p>

        <h2 className='mt-5'>{t('3 – Breast Lift: Restoring Youthful Firmness with Expert Precision')}</h2>
        <p className='mt-3'>{t('Mastopexy, or breast lift surgery, at Livist Medical, is dedicated to correcting breast sagging. This transformative procedure involves the removal of excess breast skin, reshaping breast tissue, and repositioning the nipple, resulting in rejuvenated and lifted breasts.')}</p>

        <p className='mt-3'><strong>{t('How is a Breast Lift Performed?')}</strong> {t(`Tailored to each individual's age and cultural considerations, breast lift surgery is conducted to achieve an upright and natural appearance. The surgery, lasting 1.5-2.5 hours, utilizes different techniques based on the degree of breast sagging. Patients may experience mild pain for a few days post-surgery, alleviated with simple painkillers.`)}</p>

        <h2 className='mt-5'>{t('4 – Breast Reconstruction: Restoring Wholeness and Confidence')}</h2>
        <p className='mt-3'>{t(`Breast reconstruction at Livist Medical aims to transform missing or asymmetrical breasts into their normal appearance. This procedure is suitable for patients with congenital deformities, trauma-induced single breast loss, or those who underwent breast removal after cancer. Livist Medical's specialist, tailor the reconstruction to each patient's age, body structure, and medical history.`)}</p>

        <p className='mt-3'><strong>{t('How is Breast Reconstruction Performed?')}</strong> {t(`This intricate operation, lasting 1-3 hours, offers three options: tissue expanders with implant placement, utilizing the patient's own tissue, or tissue transplantation developed with stem cells. Pain after the surgery is manageable with simple painkillers, ensuring a smoother recovery.`)}</p>

        <h2 className='mt-5'>{t('5 – Gynecomastia: Reclaiming Masculine Confidence')}</h2>
        <p className='mt-3'>{t('Gynecomastia, characterized by abnormal breast size increase in men, is effectively addressed at Livist Medical. This condition, causing both physical and psychological concerns, necessitates medical intervention for lasting solutions.')}</p>

        <p className='mt-3'><strong>{t('How is Gynecomastia Diagnosed and Treated?')}</strong> {t('Gynecomastia diagnosis involves manual examination and confirmation through ultrasound. Livist Medical employs two treatments: glandular gynecomastia, targeting hard breast tissue, and mixed-type gynecomastia, combining glandular and fatty tissue removal through surgery and liposuction. These surgeries, performed under general, sedation, or local anesthesia, take approximately 2 hours, with minimal pain in the postoperative period.')}</p>

        <p className='mt-3'>{t('At Livist Medical, we strive to deliver breast aesthetic solutions that go beyond expectations. Our experienced team ensures each patient receives personalized care, combining precision, expertise, and a commitment to well-being. If you are considering breast reduction surgery, for cost details or any inquiries, reach out to our support team. Let Livist Medical guide you on your journey to ideal breasts, providing a natural appearance, desired size, and rejuvenated confidence.')}</p>

      </div>
    </div>

  )
}

export default BreastAestheticsPage
