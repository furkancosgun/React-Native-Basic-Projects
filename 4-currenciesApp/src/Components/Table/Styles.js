import { StyleSheet } from "react-native"
import { primaryColor } from "../../Color";
export default StyleSheet.create({
    bodyItem: {
        padding: 10,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    itemTitle: {
        flex: 2,
        borderColor: "black",
        borderWidth: 2,
        padding: 5
    },
    itemBuying: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        padding: 5
    },
    itemSelling: {
        flex: 1,
        alignItems: "flex-end",
        borderColor: "black",
        borderWidth: 2,
        padding: 5
    }, headerTitle: {
        fontSize: 20,
        fontWeight: "700"
    },
    header: {
        padding: 10,
        flex: 0.5,
        backgroundColor: primaryColor,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});