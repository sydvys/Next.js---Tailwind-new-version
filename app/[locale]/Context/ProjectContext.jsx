"use client";

import { createContext, useContext, useState } from "react";


const ProjectContext = createContext({});

export const ProjectContextProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);
  // const t = useTranslations("Index");

  return (
    <ProjectContext.Provider
      value={{ navbar, setNavbar, isProjectOpen, setProjectOpen }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
