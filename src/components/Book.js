import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { BookCoverName } from './Texts';

function Book({ books }) {
  const router = useRouter();

  const onBookPress = bookId => {
    router.push({ pathname: '/books/[id]', params: { id: bookId } });
  };

  const renderBook = () => {
    return books.map(book => (
      <Pressable style={styles.book} key={book._id} onPress={() => onBookPress(book.bookId)}>
        <LinearGradient
          style={styles.bookCover}
          colors={['#005024', '#00753A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <BookCoverName children={book.bookName} />
        </LinearGradient>
      </Pressable>
    ));
  };

  return <View style={styles.root}>{renderBook()}</View>;
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 15,
    marginHorizontal: 3,
  },
  book: {
    width: '31%',
    marginBottom: 6,
  },
  bookCover: {
    height: 160,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 5,
  },
  bookInside: {
    width: '100%',
    height: '100%',
    padding: '5%',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Book;
