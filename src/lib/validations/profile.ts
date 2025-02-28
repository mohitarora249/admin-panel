import * as z from "zod"

export const profileFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  presentAddress: z.string().min(5, "Present address is required"),
  permanentAddress: z.string().min(5, "Permanent address is required"),
  city: z.string().min(2, "City is required"),
  postalCode: z.string().min(4, "Valid postal code is required"),
  country: z.string().min(2, "Country is required"),
})

export type ProfileFormValues = z.infer<typeof profileFormSchema> 