import useSeoul from '../../services/useSeoul'
import styles from './seoulInfo.module.scss'

const SeoulInfo = () => {
  const { dataSeoul } = useSeoul()
  if (dataSeoul) {
    return (
      <div className={styles.info}>
        <dl className={styles.dl}>
          <div className={styles.item}>
            <dt>이산화질소</dt>
            <dd>{dataSeoul.NITROGEN}ppm</dd>
          </div>
          <div className={styles.item}>
            <dt>오존</dt>
            <dd>{dataSeoul.OZONE}ppm</dd>
          </div>
          <div className={styles.item}>
            <dt>일산화탄소</dt>
            <dd>{dataSeoul.CARBON}ppm</dd>
          </div>
          <div className={styles.item}>
            <dt>아황산가스</dt>
            <dd>{dataSeoul.SULFUROUS}ppm</dd>
          </div>
          <div className={styles.item}>
            <dt>미세먼지</dt>
            <dd>{dataSeoul.PM10}㎍/㎥</dd>
          </div>
          <div className={styles.item}>
            <dt>초미세먼지</dt>
            <dd>{dataSeoul.PM25}㎍/㎥</dd>
          </div>
        </dl>
      </div>
    )
  }
  return null
}

export default SeoulInfo
