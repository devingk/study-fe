import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './practice/Gallery.jsx'
import TodoList from './practice/TodoList.jsx'
import CurlyBraces from './practice/CurlyBraces.jsx'
import Props from './practice/Props.jsx'
import ConditionalRendering from './practice/ConditionalRendering.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
    <TodoList />
    <CurlyBraces />
    <Props />
    <ConditionalRendering />
  </StrictMode>,
)
