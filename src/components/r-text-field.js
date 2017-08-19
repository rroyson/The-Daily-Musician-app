import React from 'react'

import R from 'ramda'
import combine from '../lib/combine-string-lists'

const { pathOr, propOr, merge } = R

const TextField = props => {
  const lblClassName = combine(
    'f6 b db mb2',
    pathOr('', ['label', 'className'], props)
  )
  const labelProps = merge(propOr({}, 'label', props), {
    className: lblClassName
  })

  const inputClassName = combine(
    'input-reset ba b--black-20 pa2 mb2 db w-100',
    pathOr('', ['input', 'className'], props)
  )
  const inputProps = merge(propOr({}, 'input', props), {
    className: inputClassName,
    value: props.value,
    onChange: props.onChange,
    type: 'text'
  })

  const helpClassName = combine(
    'f6 black-60 db mb2',
    pathOr('', ['help', 'className'], props)
  )
  const helpProps = merge(propOr({}, 'help', props), {
    className: helpClassName
  })

  return (
    <div className="measure">
      <label {...labelProps}>
        {props.name}
        {props.optional && <span className="normal black-60">(optional)</span>}
      </label>
      <input {...inputProps} />
      <small {...helpProps}>{props.helpTxt}</small>
    </div>
  )
}

export default TextField
