import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const Loading = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Empty = styled.View`
  margin-top: 50px;
  padding: 0 20px;
  align-items: center;
`;

export const EmptyText = styled.Text`
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 26px;
`;
