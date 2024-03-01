// import { PropsWithChildren } from 'react';

import { PropsWithChildren } from 'react';
import { useCounter } from '../contexts/counter-context';

type Props = {
  name: string;
  // age: number;
  // plusCount: () => void;
  // children: React.ReactNode;
  // children: React.ReactElement;
};

// const Hello = ({
//   name,
//   age,
//   plusCount,
//   children,
// }: PropsWithChildren<Props>) => {
// const Hello: React.FC<Props> = ({ name, age, plusCount }) => {
const Hello = ({ name, children }: PropsWithChildren<Props>) => {
  const { count: age, plusCount } = useCounter();
  // age = age + 1;
  // console.log('age>>>>', age);
  return (
    <div style={{ border: '1px solid green' }}>
      <h3>
        Hello, {name} ({age})
      </h3>
      <button onClick={plusCount}>Plus Age</button>
      <div>{children}</div>
    </div>
  );
};

export default Hello;