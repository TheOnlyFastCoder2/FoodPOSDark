import React  from 'react';
import IconArrowDown from 'lib/icons/DownArrow';

interface Type {
  name: string
  children:React.ReactNode
}

export default function ({name, children}: Type) {
  return (
    <details className="DropDown">
      <summary><IconArrowDown/>{name}</summary>
      <ul>{children}</ul>
    </details>
  ) 
}