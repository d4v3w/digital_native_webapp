import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, incrementByAmount } from '../features/counter'
import styles from './counter.module.css'

export const Counter: React.FC = () => {
  const dispatch = useAppDispatch()
  const { value } = useAppSelector((state) => state.counter)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)

  return (
    <div className="wrapper">
      <h2 className={styles.heading}>The current number is {value}</h2>
      <fieldset>
        <input
          type="range"
          min="0"
          step="1"
          className={styles.slider}
          value={incrementAmount}
          title={incrementAmount.toString()}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
          Increment by amount
        </button>
      </fieldset>
      <fieldset>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          Decrement by 1
        </button>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          Increment by 1
        </button>
      </fieldset>
    </div>
  )
}
