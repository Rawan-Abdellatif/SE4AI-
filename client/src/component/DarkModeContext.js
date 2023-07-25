import React, { createContext, useState, useEffect } from "react";

// Create a new context
export const DarkModeContext = createContext();

// Create a DarkModeProvider component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Update the body background color based on the dark mode state
    document.body.style.backgroundColor = isDarkMode ? "#181818" : "white";
  }, [isDarkMode]);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Function to update text elements color
  const updateTextElementsColor = (color) => {
    const textElements = document.querySelectorAll(
      ".apply-title, .email-text, .email-content, .list-item"
    );
    textElements.forEach((element) => {
      element.style.color = color;
    });
  };

  // Create an object to provide to the context
  const contextValue = {
    isDarkMode,
    toggleDarkMode,
    updateTextElementsColor,
  };

  // Provide the context to the child components
  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};
