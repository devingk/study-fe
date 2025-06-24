import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './practice/Gallery.jsx'
import TodoList from './practice/TodoList.jsx'
import CurlyBraces from './practice/CurlyBraces.jsx'
import Props from './practice/Props.jsx'
import ConditionalRendering from './practice/ConditionalRendering.jsx'
import List from './practice/List.jsx'
import AdvancedList from './practice/AdvancedList.jsx'
import PureFunction from './practice/PureFunction.jsx'
import RenderTree from './practice/render tree/RenderTree.jsx'
import Event from './practice/evemt/Event.jsx'
import State from './practice/state/State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
    <TodoList />
    <CurlyBraces />
    <Props />
    <ConditionalRendering />
    <List />
    <AdvancedList />
    <PureFunction />
    <RenderTree />
    <Event />
    <State />
    <State />
  </StrictMode>
)
