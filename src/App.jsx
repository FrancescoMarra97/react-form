import { useState } from 'react'

import './App.css'

const articleTitle = [

]
function App() {
  const [title, setTitle] = useState(articleTitle)

  return (
    <>

      <div className="container">

        <div>
          <h1 className='mb-4'>Form</h1>
        </div>
        <form onSubmit={addTitle}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Add new article" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>
          <small id='titleHelperId' className='form-text text-muted'>type your new title</small>
        </form>

        <ul className='list-group'>
          {title.map((articleTitle, index) => <li key={index} className='list-group-item'>{articleTitle}</li>)}

        </ul>
      </div>
    </>
  )
}

export default App
