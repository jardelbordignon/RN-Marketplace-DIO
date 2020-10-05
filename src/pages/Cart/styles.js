import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const Container = styled.SafeAreaView `
  flex: 1;
  align-items: center;
`

export const ProductContainer = styled.View `
  flex: 1;
  flex-direction: row;
  margin-top: 60px;
  border-radius: 20px;
  background-color: #e83f5b;
`

export const ProductList = styled(FlatList) `
  margin-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 50px;
`

export const Product = styled.View `
  flex-direction: row;
  margin: 5px;
  background-color: #fff;
  min-height: 130px;
  padding: 10px;
  border-radius: 20px;

  &:last-child {
    margin-top: 30px;
  }
`

export const ProductImage = styled.Image `
  width: 130px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const ProductTitleContainer = styled.View `
  font-size: 16px;
  padding: 10px;
  max-width: 175px;
`

export const ProductTitle = styled.Text `
  font-size: 16px;
  height: 45px;
`

export const ProductPriceContainer = styled.View `
  flex-direction: column;
`

export const ProductSinglePrice = styled.Text `
  font-size: 12px;
  color: #414756;
  margin-top: 8px;
`

export const ProductQuantity = styled.Text `
  font-size: 16px;
  font-weight: bold;
  color: #e83f5b;
  margin-top: 5px;
  margin-right: 10px;
`

export const ActionContainer = styled.View `
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  font-size: 16px;
  color: #e83f5b;
  margin-left: auto;
`

export const ActionButton = styled.TouchableOpacity `
  background: rgba(232, 63, 91, 0.1);
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 5px;
  margin-left: 3px;
`

export const TotalProductsContainer = styled.View `
  bottom: 0;
  position: absolute;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px 8px;
  border-radius: 10px;
  background-color: #e83f5b;
`

export const TotalProductsItensContainer = styled.View `
  flex-direction: row;
  align-items: center;
`

export const TotalProductsText = styled.Text `
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
  font-weight: bold;
`

export const SubTotalValue = styled.Text `
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-left: 30px;
`