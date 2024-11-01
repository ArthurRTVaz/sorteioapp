import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import CustomDropdown from "../components/CustomDropdown";

export default function Layout(){
    return(      

    <Tabs screenOptions={{tabBarStyle: {backgroundColor: '#007ACC', height: 60}, tabBarLabelStyle: {color: '#fff'}}}>
        <Tabs.Screen
            name='index' options={{title: 'INICIO' , headerShown: false ,
        
            tabBarIcon: ({focused }) => {
                if (focused)
                    return <FontAwesome name='home' size={32} color={'#FF8C42'} />
                else
                return <FontAwesome name='home' size={32} color={'#fff'} />
                }
        }}/>

        <Tabs.Screen
            name='listas_salvas' options={{title: 'LISTAS SALVAS' , headerShown: false ,
        
            tabBarIcon: ({focused}) => {
                if (focused)
                    return <FontAwesome name='list' size={32} color={'#FF8C42'} />
                else
                return <FontAwesome name='list' size={32} color={'#fff'} />
                }
        }}/>

        <Tabs.Screen
            name='historico' options={{title: 'HISTÓRICO' , headerShown: false ,
        
            tabBarIcon: ({focused}) => {
                if (focused)
                    return <FontAwesome name='history' size={32} color={'#FF8C42'} />
                else
                return <FontAwesome name='history' size={32} color={'#fff'} />
                }
        }}/>
    </Tabs>

    );
}