import {useState} from "react";


export default function Form02() {

    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function resetForm() {
        setTo("");
        setSubject("");
        setMessage("");
    }

    function sendMessage() {
        alert("Message envoyé à : " + to);
        resetForm();
    }

    return (
        <div className="p-12 space-y-2">

            <form onSubmit={sendMessage}>
                <div>
                    <label>Destinataire <span className="text-red-500">*</span></label>
                    <input type="email" value={to}
                           required
                           onChange={(event) => setTo(event.target.value)}
                           className="block border p-1" placeholder="contact@email.com"/>
                </div>

                <div>
                    <label>Sujet du message <span className="text-red-500">*</span></label>
                    <input type="text" value={subject}
                           required
                           onChange={(event) => setSubject(event.target.value)}
                           className="block border p-1" placeholder="Sujet"/>
                </div>

                <div>
                    <label>Message <span className="text-red-500">*</span></label>
                    <textarea value={message}
                              required
                              onChange={(event) => setMessage(event.target.value)}
                              className="block border p-1" placeholder="Le contenu de votre message"/>
                </div>

                <div className="pt-2 space-x-2">
                    <button type="submit"
                            className="bg-black text-white uppercase text-xs tracking-wide px-4 py-1">
                        Envoyer
                    </button>
                    <button className="text-gray-600"
                            onClick={resetForm}>Effacer
                    </button>
                </div>
            </form>

        </div>
    )
}