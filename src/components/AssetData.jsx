import {
  Box,
  Circle,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CiMobile1 } from "react-icons/ci";
import { FaMobileAlt, FaSlack, FaWhatsapp } from "react-icons/fa";
import userPng from "../assets/images/users.png";
import { motion } from "framer-motion";

// Constants
const ICONS = {
  mobile: CiMobile1,
  whatsApp: FaWhatsapp,
  slack: FaSlack,
};

const COLORS = {
  border: "#00000033",
  text: {
    primary: "#000000", // Default text color
    secondary: "#FFFFFF", // Light text color for dark backgrounds
    tertiary: "#FF0000", // Red text color for emphasis
  },
  motionBox: {
    primary: "#ffdd9e", // Default MotionBox background
    secondary: "#cabdef", // Purple MotionBox background
    tertiary: "#8d8986", // Dark MotionBox background
  },
};

const data = [
  {
    title: "User Source",
    values: {
      mobileApp: 10400,
      wholeApp: 4000,
      block: 2450,
      aProve: 1040,
      total: 1320042,
    },
    img: userPng,
    color: "#fece77",
    textColor: COLORS.text.primary, // Use primary text color
    motionBoxColor: COLORS.motionBox.primary, // Use primary MotionBox background
  },
  {
    title: "User Queries",
    values: {
      mobileApp: 10400,
      wholeApp: 4000,
      block: 2450,
      aProve: 1040,
      total: 1320042,
    },
    img: userPng,
    color: "#9580d3",
    textColor: COLORS.text.secondary, // Use secondary text color
    motionBoxColor: COLORS.motionBox.secondary, // Use secondary MotionBox background
  },
  {
    title: "Users Tracking Assets",
    values: {
      mobileApp: 132042,
      wholeApp: 4000,
      block: 2450,
      aProve: 1040,
      total: 1320042,
    },
    img: userPng,
    color: "#252019B2",
    textColor: COLORS.text.secondary, // Use secondary text color
    motionBoxColor: COLORS.motionBox.tertiary, // Use tertiary MotionBox background
  },
  {
    title: "Users Tracking Assets",
    values: {
      mobileApp: 132042,
      wholeApp: 4000,
      block: 2450,
      aProve: 1040,
      total: 1320042,
    },
    img: userPng,
    color: "#22252FB2",
    textColor: COLORS.text.secondary, // Use secondary text color
    motionBoxColor: COLORS.motionBox.tertiary, // Use tertiary MotionBox background
  },
];

const barData = [
  {
    label: "",
    value: 36,
    icon: FaMobileAlt,
    primaryColor: "#fff",
    secondaryColor: "#000",
  },
  {
    label: "",
    value: 19,
    icon: FaWhatsapp,
    primaryColor: "#fff",
    secondaryColor: "#000",
  },
  {
    label: "",
    value: 21,
    icon: FaSlack,
    primaryColor: "#fff",
    secondaryColor: "#000",
  },
  {
    label: "A",
    value: 19,
    icon: FaSlack,
    primaryColor: "#fff",
    secondaryColor: "#000",
  },
  {
    label: "C",
    value: 8,
    icon: FaSlack,
    primaryColor: "#fff",
    secondaryColor: "#000",
  },
  {
    label: "T",
    value: 19,
    icon: FaSlack,
    primaryColor: "#fff",
    secondaryColor: "#000",
  },
  {
    label: "H",
    value: 32,
    icon: FaSlack,
    primaryColor: "#fff",
    secondaryColor: "#000",
  },
];

const StatItem = ({ icon, label, value, textColor }) => (
  <HStack w="100%" justifyContent="space-between">
    <HStack gap={1}>
      <Icon as={icon} color={textColor} />
      <Text fontSize="xs" color={textColor} fontWeight={500}>
        {label}
      </Text>
    </HStack>
    <Text fontWeight={500} fontSize={"xs"} color={textColor}>
      {value}
    </Text>
  </HStack>
);

const BarChart = ({ data, bgColor }) => {
  const MotionBox = motion(Box);

  return (
    <HStack gap={"1.2rem"} alignItems="flex-end">
      {barData.map((item, index) => (
        <VStack key={index} align="center">
          <Text fontSize="xs" color={item.primaryColor} fontWeight="bold">
            {item.value}%
          </Text>
          <Box position="relative">
            <Circle
              position="absolute"
              w="16px"
              h="16px"
              border="2px solid #FFFFFF"
              bg={bgColor}
              right="-3px"
              top="-2"
            />
            <MotionBox
              width="10px"
              height={0}
              bg={bgColor}
              borderRadius="xs"
              initial={{ height: 0 }}
              animate={{ height: `${item.value * 3}px` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </Box>
          <Circle bgColor="#383838" w="22px" h="22px">
            <Icon as={item.icon} boxSize={3} color="#fff" />
          </Circle>
        </VStack>
      ))}
    </HStack>
  );
};

const UserSourceCard = ({ data, color, textColor, motionBoxColor }) => (
  <VStack
    p={3}
    gap={2}
    borderRadius="16px"
    alignItems="flex-start"
    bgColor={color}
    w="100%"
    h="100%"
  >
    <HStack justifyContent="space-between" w="100%">
      <VStack gap={"-5"} alignItems="flex-start">
        <Text as="span" fontWeight={700} color={textColor} fontSize="x-large">
          {data.values.mobileApp}
        </Text>
        <Text as="span" fontWeight={500} fontSize="md" color={textColor}>
          {data.title}
        </Text>
      </VStack>
      <Image src={data.img} w="81.67px" h="77.18px" />
    </HStack>
    <Box border={`1px solid ${COLORS.border}`} />
    <VStack w="100%" gap={1} alignItems="flex-start">
      <StatItem
        icon={ICONS.mobile}
        label="Mobile App"
        value={data.values.mobileApp}
        textColor={textColor}
      />
      <StatItem
        icon={ICONS.whatsApp}
        label="Whatsapp"
        value={data.values.wholeApp}
        textColor={textColor}
      />
      <StatItem
        icon={ICONS.slack}
        label="Slack"
        value={data.values.block}
        textColor={textColor}
      />
      <StatItem
        icon={ICONS.slack}
        label="Slack"
        value={data.values.block}
        textColor={textColor}
      />
    </VStack>
    <BarChart data={barData} bgColor={motionBoxColor} />
  </VStack>
);

const AssetData = () => (
  <Box bgColor="transparent" position="relative" w="100%" p={5}>
    <HStack p={4} position="absolute" w="100%" top="-40px" right="0px" align="stretch" spacing={4}>
      {data.map((cardData, index) => (
        <UserSourceCard
          key={index}
          data={cardData}
          color={cardData.color}
          textColor={cardData.textColor}
          motionBoxColor={cardData.motionBoxColor}
        />
      ))}
    </HStack>
  </Box>
);

export default AssetData;
