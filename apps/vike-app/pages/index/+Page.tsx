export { Page };

import { Counter } from './Counter';
import Button from '@devlaunchers/components/src/components/atoms/Button/Button';

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <Button buttonSize="standard" buttonType="primary" />
    </>
  );
}
