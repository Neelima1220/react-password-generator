import React, { useState } from 'react';
import './style.css';
import CheckBox from './CheckBox';
export default function App() {
  const [password, setPassword] = useState('');
  const [passwordlength, setPasswordlength] = useState();
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includesymbols, setIncludeSymbols] = useState(false);

  const GeneratePassword = () => {
    let temppassword = '';
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const upperCaseArray = Array.from(Array(26))
      .map((e, i) => i + 65)
      .map((n) => String.fromCharCode(n));
    const lowerCaseArray = upperCaseArray.map((item) => item.toLowerCase());
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    if (passwordlength === undefined) {
      alert('please check atleast one option and please enter password number');
    }
    if (
      !includeNumbers &&
      !includeLowerCase &&
      !includeUpperCase &&
      !includesymbols &&
      !passwordlength
    ) {
      alert('please check atleast one option');
    }

    if (passwordlength < 5) {
      alert('password lenth should be more than 5');
    }
    let availableCharacters = [
      ...(includeNumbers ? numArray : []),
      ...(includeUpperCase ? upperCaseArray : []),
      ...(includeLowerCase ? lowerCaseArray : []),
      ...(includesymbols ? symbolsArray : []),
    ];
    for (let i = 0; i < passwordlength; i++) {
      const randomNum = Math.floor(Math.random() * availableCharacters.length);
      temppassword += availableCharacters[randomNum];
    }
    setPassword(temppassword);
  };
  return (
    <div>
      <div style={{ display: 'flex', paddingBottom: '1rem' }}>
        <label style={{ flex: '1' }}>password length </label>
        <input
          style={{ flex: '1' }}
          onChange={(e) => setPasswordlength(e.target.value)}
          value={passwordlength}
          type="number"
        />
      </div>

      <CheckBox
        onChange={() => setIncludeNumbers(!includeNumbers)}
        value={includeNumbers}
        label="include numbers"
        checked={includeNumbers}
      />
      <CheckBox
        onChange={() => setIncludeUpperCase(!includeUpperCase)}
        value={includeUpperCase}
        label="include upperCase"
        checked={includeUpperCase}
      />
      <CheckBox
        onChange={() => setIncludeLowerCase(!includeLowerCase)}
        value={includeLowerCase}
        label="include lowerCase"
        checked={includeLowerCase}
      />
      <CheckBox
        onChange={() => setIncludeSymbols(!includesymbols)}
        value={includesymbols}
        label="include symbols"
        checked={includesymbols}
      />
      <div style={{ textAlign: 'center' }}>
        <button onClick={GeneratePassword}>submit </button>
      </div>
      <p>Generated password: {password}</p>
    </div>
  );
}
