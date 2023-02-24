import { Card } from "../../../components/Card/Card";
import style from './imageCard.module.css'
import { ImageComponent } from "../../../api/page.api";

export const ImageCard = ({ item: { options: { src, alt } } }: { item: ImageComponent }) => {
  return (
    <Card>
      <img src={src} alt={alt} className={style.image} />
    </Card>
  )
}
