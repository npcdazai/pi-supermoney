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
import { NavLink } from "react-router-dom";
import { Spinner } from "@chakra-ui/react"

const COLORS = {
  background: "#1b1b1b",
  primary: "#8061D9",
  white: "#FFFFFF",
  separator: "#FFFFFF33",
};

const SIZES = {
  fullHeight: "100vh",
  fullWidth: "100vw",
  inputWidth: "100%",
  logoWidth: "54.16px",
  logoHeight: "32px",
  iconSize: "20px",
  formMaxWidth: "400px",
};

const LoginForm = () => (
  <VStack spacing={6} color={COLORS.white} width={SIZES.formMaxWidth}>
    <Field.Root>
      <Field.Label fontSize="xs">Full Name</Field.Label>
      <Input placeholder="Enter Full Name" borderRadius="8px" />
    </Field.Root>
    <Field.Root>
      <Field.Label fontSize="xs">Create Username</Field.Label>
      <Input placeholder="Enter Username" borderRadius="8px" />
    </Field.Root>
    <Field.Root>
      <Field.Label fontSize="xs">Create Password</Field.Label>
      <Input type="password" placeholder="Enter Password" borderRadius="8px" />
    </Field.Root>
    <Field.Root>
      <Field.Label fontSize="xs">Re-enter Password</Field.Label>
      <Input type="password" placeholder="Enter Password" borderRadius="8px" />
    </Field.Root>
    <HStack width="100%" justifyContent="space-between">
      <Checkbox variant="solid" colorScheme="green">
        <Text fontSize="xs">Remember me</Text>
      </Checkbox>
      {/* <Text textDecoration="underline" fontSize="xs">Forgot Password?</Text> */}
    </HStack>
    <Button mt={4} bgColor={COLORS.primary} color={COLORS.white} width="100%" borderRadius="8px">Create Account</Button>
    <HStack width="100%" alignItems="center">
      <Separator flex={1} bgColor={COLORS.separator} />
      <Text fontSize="sm">or</Text>
      <Separator flex={1} bgColor={COLORS.separator} />
    </HStack>
    <Button color="#fff" width="100%" borderRadius="8px" border="1px solid white" bgColor="transparent">
      <HStack>
        <Image height={SIZES.iconSize} src={googleIcon} />
        <Text>Sign in with Google</Text>
      </HStack>
    </Button>
  </VStack>
);

const SignUp = () => (
  <MainFrame>
    <HStack bgColor="#1b1b1b"  height={SIZES.fullHeight} width={SIZES.fullWidth}>
      <Box flex={1} height="100%">
        <Image src={onboardingpng} height="100%" width="100%" objectFit="cover" />
      </Box>
      <VStack flex={1} height="100%" justifyContent="center" alignItems="center" bgColor={COLORS.background}>
        <HStack width="100%" justifyContent="flex-end" padding={4}>
          <Image src={piLogo} alt="pi-supermoney" width={SIZES.logoWidth} height={SIZES.logoHeight} />
        </HStack>
        <VStack mb={6} spacing={6} alignItems="flex-start" textAlign="center" maxWidth={SIZES.formMaxWidth}>
          <Text fontSize="2xl" color={COLORS.white}>Let’s create your account</Text>
          <Text fontSize="sm" color={COLORS.white}>
            Already have an account? <NavLink to="/login" style={{ color: COLORS.primary, textDecoration: "underline" }}>Sign in</NavLink>
          </Text>
          <LoginForm />
        </VStack>
      </VStack>
    </HStack>
  </MainFrame>
);

export default SignUp;
