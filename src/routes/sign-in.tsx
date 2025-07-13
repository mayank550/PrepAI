import { SignIn  } from "@clerk/clerk-react"

// ✅ Option 1 (inline return)
export const SignInPage = () => {
  return <SignIn path="/signin" />;
};

