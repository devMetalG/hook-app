// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { HooksApp } from './HooksApp';
// import CounterApp from './01-useState/CounterApp';
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize'; 
// import { MemoHook } from './06-memos/MemorizeHook';
// import { CallbackHook } from './06-memos/CallbackHook';
import { Father } from './07-tarea-memo/Father';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Father/>
  // </StrictMode>
)
