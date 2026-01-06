import { useMemo } from 'react'
import './App.css'
import { initialBlocks } from './data/blocks'
import { buildBlockTree } from './utils/blockTree'
import { BlockTree } from './components/BlockTree'

function App() {
  const tree = useMemo(
    () => buildBlockTree(initialBlocks),
    []
  );
  return (
    <>
      <div style={{ padding: 20 }}>
        <BlockTree nodes={tree} />
      </div>
    </>
  )
}

export default App
