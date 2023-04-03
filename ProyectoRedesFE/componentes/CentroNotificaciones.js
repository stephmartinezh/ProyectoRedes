import {
    Text,
    Button,
    ScrollView,
    VStack,
    HStack,
    IconButton,
    List,
    Box,
} from 'native-base';
import { AntDesign, Feather } from '@expo/vector-icons';

const Notificaciones = () => {
    return (
        <ScrollView>
            <VStack space="2.5" px="6" marginTop="60">
                <HStack
                    bg="darkBlue.700"
                    px="1"
                    py="2"
                    justifyContent="space-between"
                    rounded="xl"
                    alignItems="center"
                    w="100%"
                    maxW="350">
                    
                    <Text marginLeft="5" color="white" fontSize="2xl" fontWeight="bold">
                        Notificaciones
                    </Text>
                    <HStack>
                        <IconButton
                            icon={<Feather name="trash-2" size={24} color="white" />}
                        />
                    </HStack>
                </HStack>
            
            </VStack>
        </ScrollView>
    );
};

export default Notificaciones;




