import React, { useContext } from 'react'

import { Context } from './index';

export default function GrandChild(){
  const { money } = useContext(Context)
  return <p>{money}円</p>
}


// // useContextを使用しない場合
// // Consumerを活用してcontextから取得した値を使う
// // このコンポーネントはpropsを取らないことに注意！
// export default function GrandChild() {
//   return (
//     <Context.Consumer>
//       {({money}) => (
//         <div>{money}円</div>
//       )}
//     </Context.Consumer>
//   );
// }