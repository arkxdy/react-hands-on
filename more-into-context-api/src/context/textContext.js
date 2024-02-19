import { createContext, useContext } from "react";

export const TestContext = createContext({
    testData:{class:'12'},
    deleteTest: () => {},
    addTest: () => {},

});
export const TestContextProvider = TestContext.Provider;

export const useTest = () => useContext(TestContext);