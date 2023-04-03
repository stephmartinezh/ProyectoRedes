import {
    Text,
    Button,
    ScrollView,
    VStack,
    Stack,
    Circle,
    StatusBar,
    Box,
    HStack,
    IconButton,
    Icon,
} from 'native-base';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Contactos = () => {
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
                        Contactos
                    </Text>
                    <HStack>
                        <IconButton
                            icon={<AntDesign name="adduser" size={24} color="white" />}
                        />
                    </HStack>
                </HStack>
            </VStack>
            <VStack mt="3" alignItems="center">
                <Button size="lg" p="4" bg="darkBlue.800" rounded="xl"
                    _text={{
                        pl: 1,
                        pr: 1,
                    }}>
                    Editar contactos
                </Button>
            </VStack>
        </ScrollView>
    );
};

export default Contactos;
