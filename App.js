import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Swipeable } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';


function Playlist({ navigation }) {
  return (
    <LinearGradient
      colors={["#1565C0", "#000"]}
      end={[0.05, 0.5]}
      style={styles.LinearGradient}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconHeader}>
            <Ionicons name="ios-chevron-back" size={40} color="white" fontWeight='bold' />
          </TouchableOpacity>
          <Text style={styles.textHeader} >My Playlist</Text>
        </View>
        <View style={styles.Bottom}>
          <View style={styles.Bar}>
          </View>
        
          <View style = {styles.picture}>
          <Image source = {{uri:'https://zmp3-photo-fbcrawler.zmdcdn.me/avatars/6/2/4/9/62498fa513ccd6abdd5a373117353e16.jpg'}}
          style = {{ width: 150, height: 150 }}
            /> 
            <View style = {styles.songs}>
            <Text style = {styles.textSing}>
              Đóa Hoa Hồng
            </Text>
            <Text style = {styles.textSing}>
              Chi Pu
            </Text>
            </View>   
                  
        </View>
        <View style = {styles.picture}>
          <Image source = {{uri:'https://media.vov.vn/sites/default/files/styles/large/public/2021-09/iu-la-ai-tinh-yeu-su-nghiep-bai-hat-cua-iu-4bb930f2.jpeg'}}
          style = {{ width: 150, height: 150 }}
            />      
             <View style = {styles.songs}>
            <Text style = {styles.textSing}>
              Blueming
            </Text>
            <Text style = {styles.textSing}>
              IU
            </Text>
            </View>       
        </View>
        <View style = {styles.picture}>
          <Image source = {{uri:'https://cdn-img.thethao247.vn/storage/files/linhseo/2022/06/09/hd-wallpaper-jennie-black-dress-blackpink-black-hair-face-beauty-singer-asian-korean-cute-1654740666.jpg'}}
          style = {{ width: 150, height: 150 }}
            />
             <View style = {styles.songs}>
            <Text style = {styles.textSing}>
              Kill this love
            </Text>
            <Text style = {styles.textSing}>
              Blackpink
            </Text>
            </View>             
        </View>
        <View style = {styles.picture}>
          <Image source = {{uri:'https://zmp3-photo-fbcrawler.zmdcdn.me/avatars/6/2/4/9/62498fa513ccd6abdd5a373117353e16.jpg'}}
          style = {{ width: 150, height: 150 }}
            />          
        </View>
        </View>

        <View style={styles.ToolBar}>

        </View>
      </View>


    </LinearGradient>

  );
}



const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    top: StatusBar.currentHeight,

  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  iconHeader: {
    width: '40%'
  },
  textHeader: {
    paddingTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%'
  },
  Bottom: {

    flex: 14,
    // backgroundColor: 'pink',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5

  },
  Bar: {
    paddingTop: 2,
    backgroundColor: 'white',
  },
  picture: {
    paddingTop: '10%',
    paddingLeft : 25,
    flexDirection: 'row'
  },
  textSing:{
    paddingTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%',
    paddingLeft : 20,
    marginTop: 20,
  },
  songs:{
    flexDirection: 'column'
  },
});

export default Playlist;