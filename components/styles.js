import styled from "styled-components/native";

export const TextInputContainer = styled.TextInput`
  font-size: 20px;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const HeaderContainer = styled.View`
  height: 80px;
  padding-top: 30px;
  background-color: #db4dd9;
`;

export const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Item = styled.View`
  padding: 20px;
  margin-top: 20px;
  border-color: #000;
  border-width: 1px;
  border-style: dashed;
  border-radius: 10px;
  font-size: 20px;
  flex-direction: row;
`;

export const ItemText = styled.Text`
  margin-left: 10px;
`;
