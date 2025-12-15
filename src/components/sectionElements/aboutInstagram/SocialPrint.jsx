import MotionDivDownToUp from '../../animation/MotionDivDownToUp'

import content from '../../../content/content'
function SocialPrint() {
  return (
    <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
      <div className="absolute bottom-[-20px] left-[-20px] w-[100px] h-[100px] border-b-2 border-l-2 border-white/20 rounded-bl-3xl" />
      <div className="absolute top-[-20px] right-[-20px] w-[100px] h-[100px] border-t-2 border-r-2 border-white/20 rounded-tr-3xl" />
      <picture>
        <source
          srcSet={content.texts.about.aboutSocial.img.imgMobile}
          media="(max-width: 424px)"
        />
        <img
          src={content.texts.about.aboutSocial.img.img}
          alt={content.texts.about.aboutSocial.img.alt}
          className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] aspect-[3/4]"
          loading="lazy"
        />
      </picture>
    </MotionDivDownToUp>
  )
}

export default SocialPrint
