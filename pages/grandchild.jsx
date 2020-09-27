import React, { createContext, useContext } from 'react'

import { Context } from './index';

export default function GrandChild(){
  const { money } = useContext(Context)
  return <p>{money}円</p>
}