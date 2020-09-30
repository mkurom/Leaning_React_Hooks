
import GrandChild from './grandchild';

export default function Child(){
  return(
    <>
      {console.log("child component")}
      <GrandChild />
    </>
  )
}