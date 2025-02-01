import { Button, Text } from "@chakra-ui/react"
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "../components/ui/drawer"
import { IoFilterOutline } from "react-icons/io5"
const FilterDrawers = () => {
    return (
        <DrawerRoot>
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
                    <Text fontSize="xs" color="#344054" fontWeight={600} >Filter</Text>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </DrawerBody>
                <DrawerFooter>
                    <DrawerActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerActionTrigger>
                    <Button>Save</Button>
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    )
}

export default FilterDrawers
