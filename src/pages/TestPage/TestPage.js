import React from 'react';
import RegForm from 'components/RegForm/RegForm';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Radio from 'components/Radio/Radio';
import Header from 'components/Header/Header';
import LoginForm from 'components/LoginForm/LoginForm';

const testWords = ['kokokok', 'kolpop', 'optop', 'okli', 'por'];

const TestPage = ({ test, testAction }) => {
  const handleClick = () => {
    const randomIndex = (max) => Math.floor(Math.random() * Math.floor(max));
    const randomWord = testWords[randomIndex(testWords.length)];
    testAction(randomWord);
  };
  return (
    <>
      <Header />
      <h1>Routing_1</h1>
      <p>Redux with persist: {test}</p>
      <button onClick={handleClick}>Test redux</button>

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
      <LoginForm />
    </>
  );
};

export default TestPage;
