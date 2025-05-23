import { useReducer } from 'react'

interface AppState {
  isDark: boolean
  fSize: number
}

type AppAction = 
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'INCREASE_FONT_SIZE' }
  | { type: 'DECREASE_FONT_SIZE' }

const initialState: AppState = {
  isDark: false,
  fSize: 16
}

// Reducer function
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        isDark: !state.isDark
      }
    case 'INCREASE_FONT_SIZE':
      return {
        ...state,
        fSize: state.fSize + 1
      }
    case 'DECREASE_FONT_SIZE':
      return {
        ...state,
        fSize: Math.max(1, state.fSize - 1)
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <div 
      className={`p-5 min-h-screen transition-all duration-300 ${
        state.isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
      style={{ fontSize: `${state.fSize}px` }}
    >
      <h1 className="text-2xl font-bold mb-4">useReducer Exercise</h1>
      <p className="mb-4">
        This is some dummy text to demonstrate the useReducer hook functionality. 
        You can toggle between dark and light mode, and adjust the font size using the buttons below.
      </p>
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris.
      </p>
      
      <div className="flex gap-3 flex-wrap mb-6">
        <button 
        type='button'
          onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
          className={`px-4 py-2 text-sm cursor-pointer border rounded transition-colors ${
            state.isDark 
              ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600' 
              : 'bg-gray-100 text-black border-gray-300 hover:bg-gray-200'
          }`}
        >
          Toggle Dark Mode
        </button>
        
        <button 
        type='button'
          onClick={() => dispatch({ type: 'INCREASE_FONT_SIZE' })}
          className={`px-4 py-2 text-sm cursor-pointer border rounded transition-colors ${
            state.isDark 
              ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600' 
              : 'bg-gray-100 text-black border-gray-300 hover:bg-gray-200'
          }`}
        >
          Increase Font Size
        </button>
        
        <button 
        type='button'
          onClick={() => dispatch({ type: 'DECREASE_FONT_SIZE' })}
          className={`px-4 py-2 text-sm cursor-pointer border rounded transition-colors ${
            state.isDark 
              ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600' 
              : 'bg-gray-100 text-black border-gray-300 hover:bg-gray-200'
          }`}
        >
          Decrease Font Size
        </button>
      </div>
      
      <div className="text-sm opacity-70">
        <p>Current font size: {state.fSize}px</p>
        <p>Dark mode: {state.isDark ? 'ON' : 'OFF'}</p>
      </div>
    </div>
  )
}

export default App