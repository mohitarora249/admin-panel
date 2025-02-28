/**
 * This function generates initials from a given name.
 *
 * @param {string} name - The name from which initials are to be generated.
 * @return {string} The initials generated from the name. If the name is empty or null, "U" is returned.
 */
export const generateInitials = (name: string): string => {
    // If the name is empty or null, return "U"
    if (!name) return "U";
  
    // Split the name by spaces and map each part to its first character
    const initials = name.split(" ").map((part) => part.charAt(0).toUpperCase());
  
    // Join the mapped characters with an empty string to get the initials
    return initials.join("");
  };