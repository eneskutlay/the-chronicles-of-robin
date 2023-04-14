import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getContent } from '@hooks';
import { Content, BackButton, LoadingAnimation } from '@components';

const ContentDetails = () => {
  const [loading, setLoading] = useState(true);
  const { contents, currentContentIndex, handleChoiceClick } = getContent();
  useEffect(() => {
    if (contents.length > 0) {
      setLoading(false);
    }
  }, [contents]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <View style={styles.container}>
      <Content content={contents[currentContentIndex]} handleChoiceClick={handleChoiceClick} />
      <View style={styles.containerFooter}>
        <BackButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingTop: 200,
  },
  containerFooter: {
    marginVertical: 25,
    marginHorizontal: 25,
    width: 'auto',
  },
});

export default ContentDetails;
