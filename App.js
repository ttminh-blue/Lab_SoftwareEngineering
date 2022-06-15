import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Swipeable } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Đóa Hoa Hồng', // max 10
    img: 'https://zmp3-photo-fbcrawler.zmdcdn.me/avatars/6/2/4/9/62498fa513ccd6abdd5a373117353e16.jpg',
    single: 'Chi Pu', // max 11
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Money',
    img: 'https://vnn-imgs-f.vgcloud.vn/2022/03/18/12/lisa-blackpink-vuong-vao-vu-dieu-tra-pham-luat-o-thai-lan.jpeg?width=420',
    single: 'Lisa',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
    title: 'Blueming',
    img: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/12/5/981148/IU-Anh-Doc.jpg',
    single: 'IU',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Hãy Trao Cho Anh',
    img: 'https://static.wikia.nocookie.net/rapviet/images/c/c7/Mtp.jpg/revision/latest?cb=20190703144520&path-prefix=vi',
    single: 'Sơn Tùng MTP',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f60',
    title: 'Tháng tư là lời nói dối của em',
    img: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/06/27/e/8/8/5/1530074198530_600.jpg',
    single: 'Hà Anh Tuấn',
  },
];
const Item = ({ title, img, single, navigation }) => (
  <TouchableOpacity>
      <View style={styles.item}>
        <Image style={styles.cdImage} source={{ uri: img }} />
        <View style={styles.Single}>
          <Text style={styles.nameSong} numberOfLines={1}>{title}</Text>
          <Text style={styles.nameSingle} numberOfLines={1}>{single}</Text>
        </View>
        <View style={styles.iconPlay}>
          <View style={styles.iconPlay}>
            <Ionicons name="md-play-circle-sharp" size={50} color="white" />
          </View>
        </View>
      </View>
  </TouchableOpacity>
);
function Playlist({ navigation }) {
  const renderItem = ({ item }) => <Item title={item.title} img={item.img} single={item.single} />;
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
        
          <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
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
  item: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#201E21',
    borderRadius: 20,
    padding: 27,
    marginVertical: 7,
    marginHorizontal: 10,
    alignItems: 'center',
    height: '80%',
    width: '100%'
  },
  nameSong: {
    paddingLeft: '10%',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    flex: 1,
  },
  nameSingle: {
    paddingLeft: '10%',
    fontWeight: 'bold',
    color: '#928989',
    fontSize: 15,
    opacity: 100,
    flex: 1,
  },
  cdImage: {
    width: '23%',
    height: '150%',
    borderRadius: 0,
  },
  Single: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: '3%',
    width: '100%',
  },
  iconPlay: {
    flex: 1,
    paddingLeft: '15%',
  },
});

export default Playlist;