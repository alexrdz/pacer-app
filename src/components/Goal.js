import React from 'react';

export default function (props) {
  console.log('props', props);
  const {text} = props.goal;
  return (
    <li>{text}</li>
  )
}