import { useEffect, useState } from 'react';


  //1. useEffect(callback)
  // - goi callback moi khi component re-render
  // - goi callback sau khi component them element vao DOM
  //2. useEffect(callback, [])
  //3. useEffect(callback, [deps])

  // ------------------------------
  //1. callback luon duoc goi sau khi component mounted

function Content () {
    const [title, setTitle] = useState('');

    useEffect(() => {
        console.log('mounted');
    })

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)} 
            />
            <h1>hello</h1>
            {console.log('render')}
        </div>
    )
}

export default Content