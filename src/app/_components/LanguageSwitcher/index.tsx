'use client'
import { userLanguage } from "../../_providers/Language"
import classes from "./index.module.scss"


const LanguageSelector = () => {
  const { languageChoice, setLanguageChoice } = userLanguage();

  const handleChange = (lang) => {
    setLanguageChoice(lang);
  };

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "fo", label: "Faroese", flag: "🇫🇴" },
  ];

  return (
    <div className="language-selector">
      <button className="language-button">
      <img src={`/assets/icons/${languageChoice}_flag.png`} alt="en"  width={25}/>
       &nbsp; {languageChoice.toUpperCase()}
      </button>
      <div className="dropdown">
        {languages.map((lang) => (
          <div
            key={lang.code}
            className="dropdown-item"
            onClick={() => handleChange(lang.code)}
          >
            <img src={`/assets/icons/${lang.code}_flag.png`} alt="en" />
          </div>
        ))}
      </div>
      <style jsx>{`
        .language-selector {
          position: relative;
          display: inline-block;
        }
        .language-button {
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 0.5em 1em;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .dropdown {
          position: absolute;
          top: -125px;
          left: 0;
          background: white;
          border: 1px solid #ccc;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: none;
          z-index: 10;
        }
        .language-selector:hover .dropdown {
          display: block;
        }
        .dropdown-item {
          padding: 0.5em 1em;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .dropdown-item:hover {
          background: #f0f0f0;
        }
      `}</style>
    </div>
  );
};

  /*return (
    <div>
      <select className={classes.buttonWrapper} value={languageChoice} onChange={handleChange}>
        <option value="en">
          <img src="/assets/icons/en_flag.png" alt="en" />
        </option>
        <option value="fo">🇫🇴 FO</option>
      </select>
    </div>
  );
};*/

export default LanguageSelector;