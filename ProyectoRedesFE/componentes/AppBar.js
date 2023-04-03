import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {Text, Box, HStack, IconButton, Icon } from "native-base";
import {IoHeart, IoAppsOutline}from "react-icons/io5"


function AppBar() {
    return <>
        <StatusBar bg="#3700B3" barStyle="light-content" rounded="x1" />
        <Box safeAreaTop bg="violet.600" />
        <HStack bg="darkBlue.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
            <HStack alignItems="center">
                <Text color="white" fontSize="20" fontWeight="bold">
                    Ingrese un nuevo mensaje
                </Text>
            </HStack>
            <HStack>
            </HStack>
        </HStack>
    </>;
}

export default AppBar;