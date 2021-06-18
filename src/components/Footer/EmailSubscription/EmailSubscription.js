import { useState } from 'react';


import {
    ESContainerSecondary,
    ESContainer,
    ESHeader,
    ESSubHeader,
    ESForm,
    ESFormEmailInput,
    ESFormButton
} from './EmailSubscription.elements';

function EmailSubscription(props) {
    const [subscribeInput, setSubscribeInput] = useState('')

    const onChange = (e) => {
        if (e.target.name === 'email') {
            setSubscribeInput(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (subscribeInput.length > 0) {
            alert('Your email was submitted. Thank you for subscribing!')
            setSubscribeInput('')
        }
    }

    return (
        <>
            <ESContainerSecondary>
                <ESContainer>
                    <ESHeader>Join our exclusive membership to receive the latest news and trends</ESHeader>
                    <ESSubHeader>You can unsubscribe at any time.</ESSubHeader>
                    <ESForm onSubmit={handleSubmit}>
                        <ESFormEmailInput name='email' value={subscribeInput} onChange={onChange} placeholder='Your email address' />
                        <ESFormButton type='submit'>Subscribe</ESFormButton>
                    </ESForm>
                </ESContainer>
            </ESContainerSecondary>
        </>
    )
}

export default EmailSubscription;