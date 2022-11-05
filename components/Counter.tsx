import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, incrementByAmount } from '../features/counter'

export const Counter: React.FC = () => {
  const dispatch = useAppDispatch()
  const { value } = useAppSelector((state) => state.counter)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)
  return (
    <>
      <h2>The current number is {value}</h2>
      <div>
        <input value={incrementAmount} onChange={(e) => setIncrementAmount(Number(e.target.value))} type="number" />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Increment by amount</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  )
}
