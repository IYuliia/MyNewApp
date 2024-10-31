import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import Avatar from "../components/avatar";
import { colors } from "../styles/global";

import CommentsOrangeIcon from "../icons/CommentsOrangeIcon";
import LocationIcon from "../icons/LocationIcon";
import LikeIcon from "../icons/LikeIcon";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const ProfileScreen = () => {
  const posts = [
    {
      id: "1",
      image: require("../assets/images/postImage_1.png"),
      title: "Ліс",
      commentsAmount: 8,
      likes: 153,
      location: "Ukraine",
    },
    {
      id: "2",
      image: require("../assets/images/postImage_2.png"),
      title: "Захід на Чорному морі",
      commentsAmount: 3,
      likes: 200,
      location: "Ukraine",
    },
    {
      id: "3",
      image: require("../assets/images/PostImage_3.png"),
      title: "Старий будиночок у Венеції",
      commentsAmount: 50,
      likes: 200,
      location: "Italy",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Image style={styles.postImage} source={item.image} />
      <Text style={styles.postTitle}>{item.title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.leftDetailsContainer}>
        <View style={styles.detailItem}>
          <CommentsOrangeIcon />
          <Text style={styles.commentText}>{item.commentsAmount}</Text>
        </View>
        <View style={styles.detailItem}>
          <LikeIcon />
          <Text style={styles.commentText}>{item.likes}</Text>
        </View>
        </View>
        <View style={styles.detailItem}>
          <LocationIcon />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/PhotoBG.jpg")}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <Avatar
          image={require("../assets/images/avatar.png")}
          icon={require("../assets/images/add.png")}
        />
        <View style={styles.wrapper}>
          <Text style={styles.title}>Natali Romanova</Text>
        </View>
        <FlatList
        style={{ flex: 1 }}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  formContainer: {
    width: SCREEN_WIDTH,
    height: "82%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
  },
  wrapper: {
    marginTop: 92,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    letterSpacing: 0.3,
    textAlign: "center",
    color: colors.black_primary,
    marginBottom: 32,
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
leftDetailsContainer: {
    flexDirection: "row",
gap: 24,
},
detailItem: {
    flexDirection: "row",
    alignItems: "center",
},
commentText: {
    marginLeft: 6, 
    fontSize: 16,
    fontWeight: 400,
    color: colors.black_primary,
},
locationText: {
    marginLeft: 4, 
    fontSize: 16,
    fontWeight: 400,
    color: colors.black_primary,
    textDecorationLine: "underline",
},
});

export default ProfileScreen;
