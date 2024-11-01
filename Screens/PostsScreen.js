import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/global";
import { FlatList } from "react-native-gesture-handler";
import CommentsIcon from "../icons/CommentsIcon";
import LocationIcon from "../icons/LocationIcon";

const PostsScreen = () => {
  

  const posts = [
    {
      id: "1",
      image: require("../assets/images/postImage_1.png"),
      title: "Ліс",
      commentsAmount: 0,
      location: "Ivano-Frankivs'k Region, Ukraine",
    },
    {
      id: "2",
      image: require("../assets/images/postImage_2.png"),
      title: "Захід на Чорному морі",
      commentsAmount: 3,
      location: "Black Sea, Ukraine",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
            <Image style={styles.postImage} source={item.image} />
            <Text style={styles.postTitle}>{item.title}</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                    <CommentsIcon />
                    <Text style={styles.commentText}>{item.commentsAmount}</Text>
                </View>
                <View style={styles.detailItem}>
                    <LocationIcon />
                    <Text style={styles.locationText}>{item.location}</Text>
                </View>
            </View>
        </View>
  );

  return (
    <View style={styles.pageContainer}>
      <View style={styles.topContainer}>
        <Image
          style={styles.photo}
          source={require("../assets/images/avatar.png")}
        />
        <View>
          <Text style={styles.nameText}>Natali Romanova</Text>
          <Text style={styles.emailText}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 32,
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  nameText: {
    fontWeight: 700,
    fontSize: 13,
    color: colors.black_primary,
  },
  emailText: {
    fontWeight: 400,
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.80)",
  },
  postContainer: {
    marginBottom: 32,
},
postImage: {
    width: "100%",
    borderRadius: 8,
    height: 240, 
},
postTitle: {
    fontWeight: "500",
    fontSize: 16,
    color: colors.black_primary,
    marginVertical: 8,
},
detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
},
detailItem: {
    flexDirection: "row",
    alignItems: "center",
},
commentText: {
    marginLeft: 6, 
    fontSize: 16,
    fontWeight: 400,
    color: colors.border_grey,
},
locationText: {
    marginLeft: 4, 
    fontSize: 16,
    fontWeight: 400,
    color: colors.black_primary,
    textDecorationLine: "underline",
},
});

export default PostsScreen;
