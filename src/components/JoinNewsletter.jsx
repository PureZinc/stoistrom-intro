import { useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function JoinNewsletter() {
    const { requestSetter } = useFetch('http://127.0.0.1:8000/newsletters/subscribe/', 'POST');

    const [form, setForm] = useState({
        name: '',
        email: ''
    });
    const formDetails = [
        {
            entry: 'name',
            type: 'text',
            value: form.name
        },
        {
            entry: 'email',
            type: 'email',
            value: form.email
        },
    ]
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        requestSetter(form);
        setSubscribed(true);
        setForm({
            name: '',
            email: ''
        })
    };

  return (
    <div className="flex flex-col justify-between items-center w-full h-20 px-4 text-black pt-3 mb-5
        border-t border-black border-dashed"
    >
        <h2 className=" text-3xl main-font-sm">Join Our Newsletter for Daily Affirmations!</h2>
        {subscribed ? (
            <p>Congratz! You subscribed! Check your email!</p>
        ) : (
            <form onSubmit={handleSubmit} className="flex flex-row p-3">
                {formDetails.map((entry, index) => (
                    <input key={index}
                        type={entry.type}
                        placeholder={entry.entry}
                        value={entry.value}
                        onChange={(e) => setForm({
                            ...form,
                            [entry.entry]: e.target.value
                        })}
                        required
                        className="border border-black border-dashed text-center bg-orange-50 main-font-sm"
                    />
                ))}
                <button type="submit" className="p-2 border border-black border-dashed">Subscribe</button>
            </form>
        )}
    </div>
  )
}
