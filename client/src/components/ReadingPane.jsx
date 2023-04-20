import React, {useState, useEffect} from 'react';

const ReadingPane = React.memo( props => {

  const [loading, setLoading] = useState(true)
  const [html, setHtml] = useState("")

  useEffect( () => {
    fetch('/api/reading', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({url: props.url})
    })
    .then(response => {
      if(response.ok) return response.text()
      throw response
    })
    .then(html => {
      const newHtml = html.replace('</body>', `<p id="reading-bottom" data-id="${props.id}"></p><script type="text/javascript" src="http://localhost:3000/api/embed.js"></script></body>`)
      setHtml(html);
      setLoading(false);
    })


  })



  if(loading) return <>Loading...</>

  return (
    <iframe id="reading-pane" title="The Assigned Reading" src={props.url} srcDoc={html} width="100%" height="100%" />
  )

})

const Component = () => {
    useEffect(() => {
        window.addEventListener('beforeunload', alertUser)
        window.addEventListener('unload', handleEndConcert)
        return () => {
            window.removeEventListener('beforeunload', alertUser)
            window.removeEventListener('unload', handleEndConcert)
            handleEndConcert()
        }
    }, [])

    const alertUser = e => {
        e.preventDefault()
        e.returnValue = ''
    }

    const handleEndConcert = async () => {
        await fetcher({
            url: endConcert(concert.id),
            method: 'PUT'
        })
    }

    return (
        <Container>
            <Prompt
                when={isPrompt()}
                message={() => 'Are you sure you want to leave this page?'}
            />
        </Container>
    )
}

export default ReadingPane;