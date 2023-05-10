import React from 'react'
import styles from '@/styles/progresscircle.module.css';


interface progressProps  {
    idx: number,
    value: number,
    cy: string;
    cx: string;
}

export function ProgressCircle(props: progressProps) {
    const {
        
        value,
        cy,
        cx,
    } = props;
    return (
        <div className={styles['progress-circle']}>
        <svg className={styles['progress-circle__svg']} width="120" height="120">
          <circle className={styles['progress-circle__bg']} cx={cx} cy={cy} r="54"></circle>
          <circle
            className={styles['progress-circle__bar']}
            cx={cx}
            cy={cy}
            r="54"
            style={{ animationDelay: `-${value}s` }} // Set a unique animation delay for each circle
          ></circle>
        </svg>
        <div className={styles['progress-circle__text']}>
          <span className={styles['progress-circle__value']}>{value}%</span>
        </div>
      </div>
    )
}
