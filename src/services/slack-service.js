export default class SlackService {
    _webhookUrl = 'https://hooks.slack.com/services/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';

    send = ({name, email, message}) => {
        fetch(this._webhookUrl, {
            method: 'POST',
            body: JSON.stringify({
                text: `New message from ${name} ${email}:\n${message}`
            })
        })
    }}
