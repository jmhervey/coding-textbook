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

    const RuleResults = React.createClass({
        showMessage: function (rule) {
            if (rule.ShowMessageToUser == true) {
                alert(rule.MessageToUser);
            }
        },
        render: function () {

            var rules = this.props.businessRules.map((rule) => {
                return (
                    <tr>
                        <td>
                            <a href={rule.HREF} onClick={this.showMessage(rule)} target='_blank'>{rule.Name}</a>
                        </td>
                    </tr>
                );
            });
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rules}
                        </tbody>
                    </table>
                </div>
            );
        }
    });



  if(loading) return <>Loading...</>

  return (
    <iframe id="reading-pane" title="The Assigned Reading" src={props.url} srcDoc={html} width="100%" height="100%" />
  )

})




export default ReadingPane;