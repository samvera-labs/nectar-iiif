import React, {
  ChangeEventHandler,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import {
  ButtonForm,
  Curated,
  DynamicUrlStyled,
  ManualForm,
} from "./DynamicUrl.styled";
import { manifests } from "./manifests";

interface DynamicUrlProps {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  handleLanguage: ChangeEventHandler<HTMLSelectElement>;
}

const DynamicUrl: React.FC<DynamicUrlProps> = ({
  url,
  setUrl,
  handleLanguage,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      url: { value: string };
    };
    setUrl(target.url?.value);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = url;
  }, [url]);

  return (
    <DynamicUrlStyled>
      <ManualForm onSubmit={handleSubmit}>
        <label htmlFor="manual-manifest">Provide a IIIF Manifest</label>
        <div>
          <input
            type="text"
            name="url"
            id="manual-manifest"
            placeholder="IIIF Manifest"
            ref={inputRef}
          />
          <select
            id="lang-code"
            name="lang-code"
            onChange={handleLanguage}
            aria-label="bcp47 language code"
          >
            <option>Language Code</option>
            <option value="none">none</option>
            <option value="en">en</option>
            <option value="fr">fr</option>
          </select>
          <button type="submit">View</button>
        </div>
      </ManualForm>
      {manifests.length > 0 && (
        <Curated>
          {manifests.map((obj) => (
            <ButtonForm
              key={obj.label}
              onSubmit={handleSubmit}
              data-active={url === obj.url ? true : false}
            >
              <button name="url" value={obj.url}>
                {obj.label}
              </button>
            </ButtonForm>
          ))}
        </Curated>
      )}
    </DynamicUrlStyled>
  );
};

export default DynamicUrl;
