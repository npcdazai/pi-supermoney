import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'
import * as React from 'react'

export const Checkbox = React.forwardRef(function Checkbox(props, ref) {
  const { icon, children, inputProps, rootRef, ...rest } = props
  return (
    <ChakraCheckbox.Root ref={rootRef} {...rest}>
      <ChakraCheckbox.HiddenInput ref={ref} {...inputProps} />
      <ChakraCheckbox.Control border="1px solid #D0D5DD" borderRadius="md" >
        {icon || <ChakraCheckbox.Indicator color="#101828" />}
      </ChakraCheckbox.Control>
      {children != null && (
        <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
      )}
    </ChakraCheckbox.Root>
  )
})
