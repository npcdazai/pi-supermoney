import { Accordion, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { LuChevronDown } from 'react-icons/lu'

export const AccordionItemTrigger = React.forwardRef(
  function AccordionItemTrigger(props, ref) {
    const { children, indicatorPlacement = 'end', ...rest } = props
    return (
      <Accordion.ItemTrigger {...rest} ref={ref}>
        {indicatorPlacement === 'start' && (
          <Accordion.ItemIndicator rotate={{ base: '-90deg', _open: '0deg' }}>
            <LuChevronDown />
          </Accordion.ItemIndicator>
        )}
        <HStack fontSize="sm" fontWeight={500} gap='-2px' flex='1' textAlign='start' width='full'>
          {children}
        </HStack>
        {indicatorPlacement === 'end' && (
          <Accordion.ItemIndicator>
            <LuChevronDown />
          </Accordion.ItemIndicator>
        )}
      </Accordion.ItemTrigger>
    )
  },
)

export const AccordionItemContent = React.forwardRef(
  function AccordionItemContent(props, ref) {
    return (
      <Accordion.ItemContent>
        <Accordion.ItemBody {...props} ref={ref} />
      </Accordion.ItemContent>
    )
  },
)

export const AccordionRoot = Accordion.Root
export const AccordionItem = Accordion.Item
