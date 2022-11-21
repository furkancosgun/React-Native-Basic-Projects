
import { View, Image, Text } from "react-native";
import style from "./style";
const Item = ({ item }) => (
    <View style={style.itemContainer}>
        <Image style={style.itemImage} source={{ uri: item.imgURL }} />
        <View>
            <Text style={style.itemTitle}>{item.title}</Text>
            <Text style={style.itemPrice}>{item.price + " ₺"}</Text>
            {
                !item.stock ?? (<Text style={style.itemStock}>STOKTA YOK</Text>)
            }
        </View>
    </View>
);

export default Item;