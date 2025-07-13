// app/actions/pickupAction.ts
import { z } from "zod";
import { pickupFormSchema } from "@/types/PickupPage";

export async function pickupAction(
  prevState: { message: string; error?: string },
  formData: FormData
): Promise<{ message: string; error?: string; pickupId?: string }> {
  try {
    const jsonData = formData.get("jsonData") as string;
    const parsedData = JSON.parse(jsonData);

    // Convert scheduledDate string back to Date
    if (parsedData.scheduledDate) {
      parsedData.scheduledDate = new Date(parsedData.scheduledDate);
    }

    // Validate with Zod
    const validatedData = pickupFormSchema.parse(parsedData);

    // Send data to the API endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pickup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to create pickup");
    }

    const pickup = await response.json();
    
    return { 
      message: "Pickup scheduled successfully!",
      pickupId: pickup.id // Return the pickup ID for redirection
    };
  } catch (error: any) {
    console.error("🚨 Server Action Error:", error);
    return { 
      message: "Failed to schedule pickup", 
      error: error.message || "Invalid form data" 
    };
  }
}