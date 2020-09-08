import React from 'react';
import RegForm from 'components/RegForm/RegForm';
import Input from 'components/Input/Input';
import Button from 'components/Button/button';
import Radio from 'components/Radio/Radio';
import LinkCustom from 'components/Link/LinkCustom';

const testWords = ['kokokok', 'kolpop', 'optop', 'okli', 'por'];



const TestPage = ({ test, testAction }) => {
  const handleClick = () => {
    const randomIndex = (max) => Math.floor(Math.random() * Math.floor(max));
    const randomWord = testWords[randomIndex(testWords.length)];
    testAction(randomWord);
  };
  return (
    <>
      <h1>Routing_1</h1>
      <p>Redux with persist: {test}</p>
      <button onClick={handleClick}>Test redux</button>
      {/* link */}
      <LinkCustom />
      {/* link */}
      <RegForm />
      <Input />
      <Button>Button</Button>

      <Button variant="logout" />
      <Radio
        elements={[
          { id: 1, value: 'yes' },
          { id: 2, value: 'no' },
        ]}
        name="Categories"
      />
    </>
  );
};

export default TestPage;
