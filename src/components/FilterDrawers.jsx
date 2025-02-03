import { Button, Text } from "@chakra-ui/react"
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger
} from "../components/ui/drawer"
import { Slider } from "../components/ui/slider"

import { IoFilterOutline } from "react-icons/io5"
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "../components/ui/accordion"

const FilterDrawers = () => {
    const items = [
        { value: "a", title: "Session ID", text: "Some value 1..." },
        { value: "b", title: "User ID", text: "Some value 2..." },
        { value: "c", title: "Full Name", text: "Some value 3..." },
        { value: "d", title: "Phone Number", text: "Some value 3..." },
        { value: "e", title: "Number of Queries", text: "Some value 3..." },
        { value: "f", title: "Type of Query", text: "Some value 3..." },
        { value: "g", title: "Source", text: "Some value 3..." },
        { value: "h", title: "Invested Amount", text: (<Slider width="96%" thumbSize={{ width: 16, height: 16 }}
            defaultValue={[30, 60]} /> ) },
        { value: "i", title: "FD purchase amount", text: "Some value 3..." },
        { value: "h", title: "Stocks Tracked", text: "Some value 3..." },
        { value: "j", title: "Mutual Funds Tracked", text: "Some value 3..." },
        { value: "k", title: "Bank Account Balance", text: "Some value 3..." },
        { value: "l", title: "Risk Profile Status", text: "Some value 3..." },
        { value: "n", title: "Vendor", text: "Some value 3..." },
    ]

    return (
        <DrawerRoot className="custom-drawer"  >
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Button
                    rounded="sm"
                    gap={2}
                    size="sm"
                    fontWeight="400"
                    px={4}
                    py={3.5}
                    bg="#fff"
                    color="#344054"
                    _hover={{ bg: "#0000001A" }}
                    border="1px solid #0000001A"
                >
                    <IoFilterOutline />
                    <Text fontSize="xs" color="#344054"  >Filter</Text>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle fontWeight={700} fontSize="lg" color="#344054" >Filter</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <AccordionRoot collapsible defaultValue={["b"]}>
                        {items.map((item, index) => (
                            <AccordionItem border="none" key={index} value={item.value}>
                                <AccordionItemTrigger  >{item.title}</AccordionItemTrigger>
                                <AccordionItemContent>{item.text}</AccordionItemContent>
                            </AccordionItem>
                        ))}
                    </AccordionRoot>
                </DrawerBody>
                <DrawerFooter>
                    {/* <DrawerActionTrigger asChild>
                        <Button color="black" variant="outline">Cancel</Button>
                    </DrawerActionTrigger>
                    <Button>Save</Button> */}
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    )
}

export default FilterDrawers
