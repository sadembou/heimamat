'use client'
import { userLanguage } from "../../_providers/Language"
import classes from "./index.module.scss"


const LanguageSelector = () => {
  const { languageChoice, setLanguageChoice } = userLanguage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageChoice(event.target.value);
  };

  return (
    <div>
      <select className={classes.dropdown} value={languageChoice} onChange={handleChange}>
        <option value="en">EN</option>
        <option value="fo">FO</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
