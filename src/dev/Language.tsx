import React, { SyntheticEvent } from "react";

interface LanguageProps {
  handleLanguage: (e: SyntheticEvent) => void;
}

const Language: React.FC<LanguageProps> = ({ handleLanguage }) => {
  return (
    <form>
      <label htmlFor="lang-code">Language Code</label>
      <select id="lang-code" name="lang-code" onChange={handleLanguage}>
        <option>--</option>
        <option value="none">none</option>
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
    </form>
  );
};

export default Language;
