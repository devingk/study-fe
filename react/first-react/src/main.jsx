import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './practice/Gallery.jsx'
import TodoList from './practice/TodoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
    <TodoList />
  </StrictMode>,
)
