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
  primary: "#FFBA39B2",
  border: "#00000033",
  text: "#000000",
};

const data = {
  userSource: {
    mobileApp: 10400,
    wholeApp: 4000,
    block: 2450,
    aProve: 1040,
    total: 1320042,
    img: userPng,
  },
  userContent: {
    mobileApp: 10400,
    wholeApp: 4000,
    block: 2450,
    aProve: 1040,
    total: 1320042,
  },
  usersTrackingAssets: {
    stocks: 4000,
    mutualFunds: 2450,
    bankBalance: 1040,
    aProve: 824,
    total: 1320042,
  },
  totalAssets: {
    stocks: 4000,
    mutualFunds: 2450,
    bankBalance: 1040,
    aProve: 824,
  },
};

const barData = [
  { label: "", value: 36, icon: FaMobileAlt },
  { label: "", value: 19, icon: FaWhatsapp },
  { label: "", value: 21, icon: FaSlack },
  { label: "A", value: 19, icon: FaSlack },
  { label: "C", value: 8, icon: FaSlack },
  { label: "T", value: 19, icon: FaSlack },
  { label: "H", value: 32, icon: FaSlack },
];

const StatItem = ({ icon, label, value }) => (
  <HStack w="100%" justifyContent="space-between">
    <HStack gap={1}>
      <Icon as={icon} color={COLORS.text} />
      <Text color={COLORS.text} fontWeight={500}>
        {label}
      </Text>
    </HStack>
    <Text fontWeight={500} fontSize={"sm"}>
      {value}
    </Text>
  </HStack>
);

const BarChart = ({ data }) => {
  const MotionBox = motion(Box);

  return (
    <HStack gap={"1.2rem"} alignItems="flex-end">
      {barData.map((item, index) => (
        <VStack key={index} align="center">
          <Text fontSize="xs" fontWeight="bold">
            {item.value}%
          </Text>
          <Box position="relative">
            <Circle
              position="absolute"
              w="16px"
              h="16px"
              border="2px solid #FFFFFF"
              bgColor="#FFCF76"
              right="-3px"
              top="-2"
            />
            <MotionBox
              width="10px"
              height={0}
              bg="#ffdd9e82"
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

const UserSourceCard = ({ data }) => (
  <VStack
    p={3}
    gap={3}
    borderRadius="16px"
    alignItems="flex-start"
    bgColor={COLORS.primary}
    w="320px"
  >
    <HStack justifyContent="space-between" w="100%">
      <VStack gap={"-5"} alignItems="flex-start">
        <Text as="span" fontWeight={700} color={COLORS.text} fontSize="32px">
          {data.mobileApp}
        </Text>
        <Text as="span" fontWeight={500} fontSize="20px" color={COLORS.text}>
          User Source
        </Text>
      </VStack>
      <Image src={data.img} w="81.67px" h="77.18px" />
    </HStack>
    <Box border={`1px solid ${COLORS.border}`} />
    <VStack w="100%" gap={1} alignItems="flex-start">
      <StatItem icon={ICONS.mobile} label="Mobile App" value={data.mobileApp} />
      <StatItem icon={ICONS.whatsApp} label="Whatsapp" value={data.wholeApp} />
      <StatItem icon={ICONS.slack} label="Slack" value={data.block} />
      <StatItem icon={ICONS.slack} label="Slack" value={data.block} />
    </VStack>
    <BarChart data={barData} />
  </VStack>
);

const AssetData = () => (
  <Box h="440px" w="320px" p={5}>
    <HStack w="100%" align="stretch" spacing={4}>
      <UserSourceCard data={data.userSource} />
    </HStack>
  </Box>
);

export default AssetData;
