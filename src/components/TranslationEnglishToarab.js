import React, { useState, useEffect } from 'react';
import Translation from '../langue.json'; // Assuming you have a Translation object in another file

function TranslationEnglishToArab() {
    const [language, setLanguage] = useState('arabe');
    const [content, setContent] = useState({});

    useEffect(() => {
        if (language === 'english') {
            setContent(Translation.english);
        } else if (language === 'arabe') {
            setContent(Translation.arabe);
        } else if (language === 'darija') {
            setContent(Translation.darija);
        } else if (language === 'francais') {
            setContent(Translation.francais);
        } else if (language === 'espagnol') {
            setContent(Translation.espagnol);
        } else if (language === 'allemand') {
            setContent(Translation.allemand);
        } else if (language === 'italien') {
            setContent(Translation.italien);
        }
    }, [language]);

    return (
        <div>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="english">English</option>
                <option value="arabe">Arabe</option>
                <option value="darija">Darija</option>
                <option value="francais">francais</option>
                <option value="espagnol">espagnol</option>
                <option value="allemand">allemand</option>
                <option value="italien">italien</option>
            </select>
            <h2>{content.Title}</h2>
            <span>{content.Description}</span>
        </div>
    );
}

export default TranslationEnglishToArab;
