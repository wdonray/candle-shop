/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createCandle = /* GraphQL */ `
  mutation CreateCandle(
    $input: CreateCandleInput!
    $condition: ModelCandleConditionInput
  ) {
    createCandle(input: $input, condition: $condition) {
      id
      title
      description
      image
      scent
      featured
      price
      orders {
        items {
          id
          candle_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCandle = /* GraphQL */ `
  mutation UpdateCandle(
    $input: UpdateCandleInput!
    $condition: ModelCandleConditionInput
  ) {
    updateCandle(input: $input, condition: $condition) {
      id
      title
      description
      image
      scent
      featured
      price
      orders {
        items {
          id
          candle_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCandle = /* GraphQL */ `
  mutation DeleteCandle(
    $input: DeleteCandleInput!
    $condition: ModelCandleConditionInput
  ) {
    deleteCandle(input: $input, condition: $condition) {
      id
      title
      description
      image
      scent
      featured
      price
      orders {
        items {
          id
          candle_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCandleOrder = /* GraphQL */ `
  mutation CreateCandleOrder(
    $input: CreateCandleOrderInput!
    $condition: ModelCandleOrderConditionInput
  ) {
    createCandleOrder(input: $input, condition: $condition) {
      id
      candle_id
      order_id
      order {
        id
        user
        date
        total
        candles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      candle {
        id
        title
        description
        image
        scent
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateCandleOrder = /* GraphQL */ `
  mutation UpdateCandleOrder(
    $input: UpdateCandleOrderInput!
    $condition: ModelCandleOrderConditionInput
  ) {
    updateCandleOrder(input: $input, condition: $condition) {
      id
      candle_id
      order_id
      order {
        id
        user
        date
        total
        candles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      candle {
        id
        title
        description
        image
        scent
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteCandleOrder = /* GraphQL */ `
  mutation DeleteCandleOrder(
    $input: DeleteCandleOrderInput!
    $condition: ModelCandleOrderConditionInput
  ) {
    deleteCandleOrder(input: $input, condition: $condition) {
      id
      candle_id
      order_id
      order {
        id
        user
        date
        total
        candles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      candle {
        id
        title
        description
        image
        scent
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      candles {
        items {
          id
          candle_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      candles {
        items {
          id
          candle_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      candles {
        items {
          id
          candle_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
