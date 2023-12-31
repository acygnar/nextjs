// fonts.d.ts
declare module '@/app/ui/fonts' {
  // Define the types or interfaces related to your module here
  // For example:
  interface Font {
    family: string;
    weight: number;
    // Add other properties as needed
  }

  // You can export types, interfaces, or values related to your module
  const fonts: {
    primary: Font;
    secondary: Font;
    // Define other font types as needed
  };

  export default fonts;
}
