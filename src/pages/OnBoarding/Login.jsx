import {
    Box,
    Button,
    Field,
    HStack,
    Image,
    Input,
    Separator,
    Text,
    VStack,
} from "@chakra-ui/react";
import googleIcon from "../../assets/icons/Google.png";
import piLogo from "../../assets/icons/pi-logo.png";
import onboardingpng from "../../assets/images/onboarding.png";
import MainFrame from "../../components/MainFrame";
import { Checkbox } from "../../components/ui/checkbox";

// Constants
const COLORS = {
  background: "#1b1b1b",
  primary: "#8061D9",
  white: "#FFFFFF",
  separator: "#FFFFFF33",
};

const SIZES = {
  fullHeight: "100vh",
  fullWidth: "100%",
  inputWidth: "390px",
  logoWidth: "54.16px",
  logoHeight: "32px",
  iconSize: "24px",
};

const LoginForm = () => (
  <VStack gap={12} color={COLORS.white}>
    <VStack gap={4}>
      <Field.Root>
        <Field.Label>Username</Field.Label>
        <Input
          w={SIZES.inputWidth}
          borderRadius="8px"
          placeholder="Enter Username"
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>Password</Field.Label>
        <Input w={SIZES.inputWidth} placeholder="Enter Password" />
      </Field.Root>
      <HStack w={SIZES.fullWidth} justifyContent="space-between">
        <Checkbox variant="solid" colorPalette="green">
          <Text as="span" fontSize="sm">
            Remember me
          </Text>
        </Checkbox>
        <Text textDecoration="underline" fontSize="sm">
          Forgot Password?
        </Text>
      </HStack>
    </VStack>
    <VStack gap={8}>
      <Button
        color={COLORS.white}
        w={SIZES.inputWidth}
        borderRadius="8px"
        bgColor={COLORS.primary}
      >
        Sign in
      </Button>
      <HStack
        justifyContent="space-around"
        alignItems="center"
        w={SIZES.fullWidth}
      >
        <Box flex={1}>
          <Separator bgColor={COLORS.separator} />
        </Box>
        <Text fontSize="sm" mx={2}>
          or
        </Text>
        <Box flex={1}>
          <Separator bgColor={COLORS.separator} />
        </Box>
      </HStack>
      <Button
        color={COLORS.white}
        w={SIZES.inputWidth}
        borderRadius="8px"
        border="0.5px solid #FFFFFF"
        bgColor="transparent"
      >
        <HStack>
          <Image h={SIZES.iconSize} src={googleIcon} />
          <Text>Sign in with Google</Text>
        </HStack>
      </Button>
    </VStack>
  </VStack>
);

const Login = () => (
  <MainFrame>
    <Box h={SIZES.fullHeight} w={SIZES.fullWidth} p={0} bgColor={COLORS.white}>
      <HStack bgColor={COLORS.background} justifyContent="space-between">
        <Box w="50%" h={SIZES.fullHeight}>
          <Image
            h={SIZES.fullHeight}
            w={SIZES.fullWidth}
            objectFit="cover"
            src={onboardingpng}
          />
        </Box>
        <VStack
          h={SIZES.fullHeight}
          alignItems="flex-start"
          bgColor={COLORS.background}
          w="50%"
          p={4}
        >
          <HStack w={SIZES.fullWidth} justifyContent="flex-end">
            <Image
              src={piLogo}
              alt="pi-supermoney"
              w={SIZES.logoWidth}
              h={SIZES.logoHeight}
            />
          </HStack>
          <VStack
            h={SIZES.fullHeight}
            w={SIZES.fullWidth}
            justifyContent="center"
            alignItems="center"
          >
            <VStack alignItems="flex-start" gap={12}>
              <VStack gap={"-1"} alignItems="flex-start">
                <Text as="span" color={COLORS.white} fontSize="32px">
                  Let’s sign you in
                </Text>
                <Text fontSize="sm" color={COLORS.white} as="span">
                  Don’t have an account{" "}
                  <span style={{ color: COLORS.primary }}>Sign up</span>
                </Text>
              </VStack>
              <LoginForm />
            </VStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  </MainFrame>
);

export default Login;