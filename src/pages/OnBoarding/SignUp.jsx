import {
  Box,
  Button,
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
import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import * as Yup from "yup";
import { Field } from "../../components/ui/field";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const COLORS = {
  background: "#1b1b1b",
  primary: "#8061D9",
  white: "#FFFFFF",
  separator: "#FFFFFF33",
};

const SIZES = {
  fullHeight: "100svh",
  fullWidth: "100vw",
  inputWidth: "100%",
  logoWidth: "54.16px",
  logoHeight: "32px",
  iconSize: "20px",
  formMaxWidth: "400px",
};

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Username is Required")
      .min(4, "Username must be at least 4 characters long"),
    createUserName: Yup.string().required("Please Enter a createUserName"),
    createPwd: Yup.string()
      .required("Password is Required")
      .min(6, "Password must be at least 6 characters long"),
    reEnterPassword: Yup.string()
      .required("Password is Required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const LoginForm = () => (
    <VStack spacing={6} color={COLORS.white} width={SIZES.formMaxWidth}>
      <Field
        fontSize="xs"
        label="Full Name"
        invalid={!!errors.fullName}
        errorText={errors.fullName?.message}
      >
        <Input
          {...register("fullName")}
          borderRadius="8px"
          placeholder="Enter Full Name"
        />
      </Field>
      <Field
        fontSize="xs"
        label="Create Username"
        invalid={!!errors.createUserName}
        errorText={errors.createUserName?.message}
      >
        <Input
          {...register("createUserName")}
          borderRadius="8px"
          placeholder="Enter Username"
        />
      </Field>
      <Field
        fontSize="xs"
        label="Create Password"
        invalid={!!errors.createPwd}
        errorText={errors.createPwd?.message}
      >
        <Input
          type="password"
          {...register("createPwd")}
          borderRadius="8px"
          placeholder="Enter Password"
        />
      </Field>
      <Field
        fontSize="xs"
        label="Re-enter Password"
        invalid={!!errors.reEnterPassword}
        errorText={errors.reEnterPassword?.message}
      >
        <Input
          type="password"
          {...register("reEnterPassword")}
          borderRadius="8px"
          placeholder="Enter Password"
        />
      </Field>
      <HStack width="100%" justifyContent="space-between">
        <Checkbox variant="solid" colorScheme="green">
          <Text fontSize="xs">Remember me</Text>
        </Checkbox>
      </HStack>
      <Button
        onClick={handleSubmit((data) => console.log(data))}
        mt={4}
        bgColor={COLORS.primary}
        color={COLORS.white}
        width="100%"
        borderRadius="8px"
      >
        Create Account
      </Button>
      <HStack width="100%" alignItems="center">
        <Separator flex={1} bgColor={COLORS.separator} />
        <Text fontSize="sm">or</Text>
        <Separator flex={1} bgColor={COLORS.separator} />
      </HStack>
      <Button
        color="#fff"
        width="100%"
        borderRadius="8px"
        border="1px solid white"
        bgColor="transparent"
      >
        <HStack>
          <Image height={SIZES.iconSize} src={googleIcon} />
          <Text>Sign in with Google</Text>
        </HStack>
      </Button>
    </VStack>
  );

  return (
    <MainFrame>
      <HStack
        bgColor={COLORS.background}
        height={SIZES.fullHeight}
        width={SIZES.fullWidth}
        spacing={0}
      >
        <Box flex={1} height="100%">
          <Image
            src={onboardingpng}
            height="100%"
            width="100%"
            objectFit="cover"
          />
        </Box>
        <VStack
          flex={1}
          height="100%"
          justifyContent="center"
          alignItems="center"
          bgColor={COLORS.background}
        >
          <HStack width="100%" justifyContent="flex-end" padding={4}>
            <Image
              src={piLogo}
              alt="pi-supermoney"
              width={SIZES.logoWidth}
              height={SIZES.logoHeight}
            />
          </HStack>
          <VStack
            mb={6}
            spacing={6}
            alignItems="flex-start"
            textAlign="center"
            maxWidth={SIZES.formMaxWidth}
          >
            <Text fontSize="2xl" color={COLORS.white}>
              Let’s create your account
            </Text>
            <Text fontSize="sm" color={COLORS.white}>
              Already have an account?{" "}
              <NavLink
                to="/login"
                style={{ color: COLORS.primary, textDecoration: "underline" }}
              >
                Sign up
              </NavLink>
            </Text>
            <LoginForm />
          </VStack>
        </VStack>
      </HStack>
    </MainFrame>
  );
};

export default SignUp;