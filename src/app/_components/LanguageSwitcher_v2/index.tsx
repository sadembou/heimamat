'use client'

import React, { useEffect, useState } from "react";
import { userLanguage } from "../../_providers/Language";
import classes from './index.module.scss';

const LanguageSwitcher_v2 = () => {
    const { languageChoice, setLanguageChoice } = userLanguage();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const LANGUAGE_SELECTOR_ID = 'language-selector';
    
    const handleLanguageChange=(language:string)=>{
        setLanguageChoice(language);
    }

    useEffect(() => {
        const handleWindowClick = (event: any) => {
            const target = event.target.closest('button');
            if (target && target.id === LANGUAGE_SELECTOR_ID) {
                return;
            }
            setIsOpen(false);
        }
        window.addEventListener('click', handleWindowClick)
        return () => {
            window.removeEventListener('click', handleWindowClick);
        }
    }, []);
    
    return (
    <React.Fragment>
        <button 
            onClick={()=>setIsOpen(!isOpen)}
            type="button"
            className={classes.dropdown}
            id={LANGUAGE_SELECTOR_ID}
            aria-expanded={isOpen}
        >
            <img
                src={`${languageChoice.toLowerCase()}_flag.png`} 
                alt={languageChoice} 
                width={25} 
                height={25}
            />
            <svg
                className={classes.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
        {isOpen && (
            <div 
                className={classes.choice}
                role='menu'
                aria-orientation='vertical'
                aria-labelledby={LANGUAGE_SELECTOR_ID}
            >
                <div>
                        { ["FO", "EN"].map((language, index)=>{
                            return(
                            <button key={`${language}_${index}`} 
                                onClick={()=>handleLanguageChange(language)}
                                className={`${
                                languageChoice === language
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                            } px-4 py-2 text-sm text-start items-center inline-flex hover:bg-gray-100 ${index % 2 === 0 ? 'rounded-r' : 'rounded-l'}`}
                            role="menuitem"
                            >
                                <img src={`${language.toLowerCase()}_flag.png`} alt={language} width={25} height={25} />
                                <span className="ml-2">{language}</span>
                            </button>
                            )
                        })}
                </div>
            </div>
        )

        }
    </React.Fragment>
  )
}

export default LanguageSwitcher_v2