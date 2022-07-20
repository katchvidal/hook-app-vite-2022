import React from 'react'
import ReactDOM from 'react-dom/client'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleFormCustom } from './02-useEffect/SimpleFormCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { LayoutEffect } from './05-useLayoutEffect/Layout'
import { CallbackHook } from './06-memos/CallbackHook'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <SimpleForm /> */}
    {/* <SimpleFormCustom /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <LayoutEffect /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    <Padre />
  </React.StrictMode>
)
