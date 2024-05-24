import React from 'react'

interface RightBarProps {
  className?: string,
}

const RightBar: React.FC<RightBarProps> = ({className}) => {
  return (
    <div className={className}>
      <h2>RightBar</h2>
      <p>This is some dummy content.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  )
}

export default RightBar