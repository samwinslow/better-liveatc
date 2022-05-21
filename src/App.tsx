import { AutoComplete } from 'antd'
import { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { fetchSearchResults } from './util/fetchFeed'

type FeedItem = {
  value: string
  label: string
  url: string
}

const FULLY_QUALIFIED_FREQUENCY_LENGTH = 6

function App() {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState([] as FeedItem[])
  const onSearch = (value: string) => {
    if (value.length >= FULLY_QUALIFIED_FREQUENCY_LENGTH) {
      fetchSearchResults(value)
    }
    setOptions(
      !value ? [] : [{
        value: '121.5',
        label: '121.5 • Guard',
        url: 'https://s1-bos.liveatc.net/kabe1_app?nocache=2022052109534816571',
      }]
    )
  }
  return (
    <div className="App">
      <AutoComplete
        value={value}
        options={options}
        style={{ width: 200 }}
        onSearch={onSearch}
        onChange={setValue}
      />
    </div>
  )
}

export default App
