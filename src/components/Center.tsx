import * as React from 'react';
import './Center.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Center({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="center">
      <div className="center-text">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    </div>
  );
}

export default Center;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}