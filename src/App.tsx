import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { Block } from './types/block'
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
