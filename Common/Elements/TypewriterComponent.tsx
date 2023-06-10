import React from 'react';
import Typewriter, { Options } from 'typewriter-effect';

interface TypewriterComponentProps {
    typewriterOptions: Partial<Options>;
  }

const TypewriterComponent: React.FC<TypewriterComponentProps> = ({ typewriterOptions }) => {
  return (
    <Typewriter
      options={typewriterOptions}
    />
  );
};

export default TypewriterComponent;
