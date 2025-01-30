import { Field as ChakraField } from "@chakra-ui/react";
import * as React from "react";

export const Field = React.forwardRef(function Field(props, ref) {
  const { label, children, helperText, errorText, optionalText, ...rest } =
    props;
  return (
    <ChakraField.Root ref={ref} {...rest}>
      {label && (
        <ChakraField.Label fontSize="xs">
          {label}
          <ChakraField.RequiredIndicator
            fontSize="xs"
            fallback={optionalText}
          />
        </ChakraField.Label>
      )}
      {children}
      {helperText && (
        <ChakraField.HelperText fontSize="xs">
          {helperText}
        </ChakraField.HelperText>
      )}
      {errorText && (
        <ChakraField.ErrorText fontSize="xs">{errorText}</ChakraField.ErrorText>
      )}
    </ChakraField.Root>
  );
});
