import { Text, Button, ScrollView, VStack, Stack, Circle } from 'native-base';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Landing = ({navigation}) => {
    return (
        <ScrollView>
            <VStack space="2.5" px="6" marginTop="60">
                <Stack direction="row" space={20}>
                    <Button size="lg" bg="darkBlue.800" rounded="lg" shadow={'3'}
                        _text={{
                            fontWeight: '700',
                            px: 12,
                        }}>
                        Emparejar
                    </Button>
                    <Button bg="darkBlue.800" rounded="lg"
                        _text={{
                            pl: 1,
                            pr: 1,
                        }}
                        shadow={'3'}>
                        <AntDesign name="contacts" size={25} color="white" 
                        onPress = {()=>navigation.navigate("Contactos")}/>
                    </Button>
                </Stack>
                <Button size="lg" p="4" bg="darkBlue.700" rounded="lg" shadow={'3'}
                    mt="2"
                    _text={{
                        pl: 1,
                        pr: 1,
                    }}
                    onPress = {()=>navigation.navigate("Notificaciones")}>
                    Centro de notificaciones
                </Button>
            </VStack>
            <VStack mt="20" alignItems="center">
                <Text bold fontSize="xl">Mandar notificación</Text>
            </VStack>
            <VStack alignItems="center">
                <Circle m="20" mt="5" size="250px" bg="primary.100">
                    <Circle size="200px" bg="darkBlue.700">
                        <Button size="lg" p="4" bg="transparent" rounded="xl" mt="2"
                            _text={{
                                pl: 1,
                                pr: 1,
                            }}>
                            <MaterialIcons name="message" size={70} color="white" />
                        </Button>
                    </Circle>
                </Circle>
            </VStack>
            <VStack mt="10" alignItems="center">
                <Button size="lg" p="4" bg="darkBlue.800" rounded="xl"
                    _text={{
                        pl: 1,
                        pr: 1,
                    }}
                    onPress = {()=>navigation.navigate("PersonalizarNots")}>
                    Personalizar notificación
                </Button>
            </VStack>
        </ScrollView>
    );
};

export default Landing;




