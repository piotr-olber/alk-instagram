import React, { useState, useCallback } from "react";
import { StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { SpinnerContext } from "./SpinnerContext";

type SpinnerProviderProps = {
    children?: JSX.Element;
};

export const SpinnerProvider = ({ children }: SpinnerProviderProps) => {
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    // const contextValue = useCallback((active: boolean): void => {
    //     setIsAnimating(active);
    // }, []);
    const contextValue = (active: boolean): void => {
        setIsAnimating(active);
    };

    return (
        <SpinnerContext.Provider value={contextValue}>
            {children}
            <ActivityIndicator
                animating={isAnimating}
                size="large"
                style={styles.spinner}
            />
        </SpinnerContext.Provider>
    );
};

const styles = StyleSheet.create({
    spinner: {
        position: "absolute",
        top: Dimensions.get("window").height / 2 - 50,
        left: Dimensions.get("window").width / 2 - 15,
    },
});
