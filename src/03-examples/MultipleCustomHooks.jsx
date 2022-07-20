import { useFetch, useCounter} from '../hooks'
import { Quote, Loading  } from '../components'
export const MultipleCustomHooks = () => {

  const { counter, handleIncremet, handleDecremet } = useCounter(1)
  const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h2> Breaking Bad Quotes </h2>
      <hr />

      {isLoading ? <Loading /> : (
        <Quote author={ author } quote={ quote } />
      )}

      <button className='btn btn-primary' onClick={handleIncremet} > Next Quoute</button>
      {
        (counter === 1) ? null : <button className='btn btn-primary' onClick={handleDecremet} > Back Quoute</button>

      }
    </>
  )
}
