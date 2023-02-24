import { ButtonComponent } from "../../../api/page.api";
import { Card } from "../../../components/Card/Card";
import style from './buttonCard.module.css'
import show from '../../../icons/show.svg'
import hide from '../../../icons/hide.svg'
import location from '../../../icons/location.svg'
import { useWeatherPageContext } from "../Context";

export const ButtonCard = ({ item }: { item: ButtonComponent }) => {
  const { setVariable } = useWeatherPageContext()

  const icon = item.options.variable === 'location'
    ? { src: location, alt: 'location' }
    : item.options.value === 'show'
    ? { src: show, alt: 'show' }
    : item.options.value === 'hide'
    ? { src: hide, alt: 'hide' }
    : null;

  return (
    <Card>
      <button
        type='button'
        className={style.buttonCard}
        onClick={() => setVariable(item.options.variable, item.options.value)}
      >
        {item.options.text}
        <div className={style.icon}>
          {icon && <img {...icon} />}
        </div>
      </button>
    </Card>
  )
}