import {
  SIGN_OUT_ACCOUNT,
  SET_TRADING_BOOK,
  GET_QUADRIGA_TICKERS,
  GET_QUADRIGA_ORDERS,
  GET_QUADRIGA_TRANSACTIONS,
  POST_USER_QUADRIGA_TRANSACTIONS,
  POST_USER_QUADRIGA_BALANCE,
  POST_USER_QUADRIGA_ORDERS,
  POST_USER_QUADRIGA_LOOKUP_ORDERS,
  POST_USER_QUADRIGA_CANCEL_ORDERS,
  POST_USER_QUADRIGA_BUY_AT_PRICE,
  POST_USER_QUADRIGA_BUY_ORDER_MARKET,
  POST_USER_QUADRIGA_SELL_LIMIT,
  POST_USER_QUADRIGA_SELL_MARKET,
  POST_USER_QUADRIGA_BITCOIN_WALLET,
  POST_USER_QUADRIGA_ETHER_WALLET,
  POST_USER_QUADRIGA_BITCOIN_CASH_WALLET,
  POST_USER_QUADRIGA_BITCOIN_GOLD_WALLET,
  POST_USER_QUADRIGA_LITECOIN_WALLET,
  POST_USER_QUADRIGA_BITCOIN_WALLET_WITHDRAW,
  POST_USER_QUADRIGA_ETHER_WALLET_WITHDRAW,
  POST_USER_QUADRIGA_BITCOIN_CASH_WALLET_WITHDRAW,
  POST_USER_QUADRIGA_BITCOIN_GOLD_WALLET_WITHDRAW,
  POST_USER_QUADRIGA_LITECOIN_WALLET_WITHDRAW,
  MODULE_BUTTON_STATE_CHANGE,
  MODULE_BUTTON_STATE_CHANGE_RESET
} from 'account';

const initialState = {
  isGettingQuadrigaTicker: false,
  isGettingQuadrigaTransactions: false,
  isGettingQuadrigaOrders: false,
  isGettingUserQuadrigaTransactions: false,
  isGettingUserQuadrigaBalance: false,
  isGettingUserQuadrigaOrders: false,
  isGettingUserQuadrigaLookUpOrders: false,
  isGettingUserQuadrigaBuyAt: false,
  isGettingUserQuadrigaBuyMarket: false,
  isGettingUserQuadrigaSellLimit: false,
  isGettingUserQuadrigaSellMarket: false,
  isGettingUserQuadrigaBitcoinWallet: false,
  isGettingUserQuadrigaBitcoinWithdraw: false,
  isGettingUserQuadrigaEtherWallet: false,
  isGettingUserQuadrigaEtherWalletWithdraw: false,
  isGettingUserQuadrigaBitcoinCashWallet: false,
  isGettingUserQuadrigaBitcoinCashWalletWithdraw: false,
  isGettingUserQuadrigaBitcoinGoldWallet: false,
  isGettingUserQuadrigaBitcoinGoldWalletWithdraw: false,
  isGettingUserQuadrigaLitecoinWallet: false,
  isGettingUserQuadrigaLitecoinWalletWithdraw: false,
  isCancellingOrder: false,
  isModuleButtonPressed: false,
  quadrigaUserBalance: {
    data: { code: 12, message: "The field API Key (key) is either invalid or missing" }
  },
  quadrigaUserTransactions: [],
  quadrigaOrders: { bids: [], asks: [] },
  quadrigaTransactions: null,
  quadrigaUserOrders: { data: [] },
  quadrigaUserOrdersLookup: {
    data: [
      {
        amount: " ",
        book: "eth_cad",
        created: " ",
        id: " ",
        price: " ",
        status: " ",
        type: " "
      }
    ]
  },
  quadrigaUserCancelOrder: null,
  quadrigaUserBuyAt: null,
  quadrigaUserBuyMarket: null,
  quadrigaUserSellLimit: null,
  quadrigaUserSellMarket: null,
  quadrigaUserBitcoinWallet: null,
  quadrigaUserWalletWithdraw: null,
  quadrigaUserEtherWallet: null,
  quadrigaUserBitcoinCashWallet: null,
  quadrigaUserBitcoinGoldWallet: null,
  quadrigaUserLitecoinWallet: null,
  userWallets: [],
  quadrigaTickers: null,
  tradingBook: '',
  error: null,
};

export const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUADRIGA_TICKERS.PENDING:
      return {
        ...state,
        isGettingQuadrigaTicker: true,
      };
    case GET_QUADRIGA_TICKERS.SUCCESS:
      return {
        ...state,
        isGettingQuadrigaTicker: false,
        quadrigaTickers: action.payload,
      };
    case GET_QUADRIGA_TICKERS.ERROR:
      return {
        ...state,
        isGettingQuadrigaTicker: false,
        error: action.payload,
      };
    case GET_QUADRIGA_ORDERS.PENDING:
      return {
        ...state,
        isGettingQuadrigaOrders: true,
      };
    case GET_QUADRIGA_ORDERS.SUCCESS:
      return {
        ...state,
        isGettingQuadrigaOrders: false,
        quadrigaOrders: action.payload.data,
      };
    case GET_QUADRIGA_ORDERS.ERROR:
      return {
        ...state,
        isGettingQuadrigaOrders: false,
        error: action.payload,
      };
    case GET_QUADRIGA_TRANSACTIONS.PENDING:
      return {
        ...state,
        isGettingQuadrigaTransactions: true,
      };
    case GET_QUADRIGA_TRANSACTIONS.SUCCESS:
      return {
        ...state,
        isGettingQuadrigaTransactions: false,
        quadrigaTransactions: action.payload.data.slice(0, 20),
      };
    case GET_QUADRIGA_TRANSACTIONS.ERROR:
      return {
        ...state,
        isGettingQuadrigaTransactions: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_TRANSACTIONS.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaTransactions: true,
      };
    case POST_USER_QUADRIGA_TRANSACTIONS.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaTransactions: false,
        quadrigaUserTransactions: action.payload,
      };
    case POST_USER_QUADRIGA_TRANSACTIONS.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaTransactions: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_BALANCE.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaBalance: true,
      };
    case POST_USER_QUADRIGA_BALANCE.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaBalance: false,
        quadrigaUserBalance: action.payload,
      };
    case POST_USER_QUADRIGA_BALANCE.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaBalance: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_ORDERS.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaOrders: true,
      };
    case POST_USER_QUADRIGA_ORDERS.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaOrders: false,
        quadrigaUserOrders: action.payload,
      };
    case POST_USER_QUADRIGA_ORDERS.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaOrders: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_LOOKUP_ORDERS.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaLookUpOrders: true,
      };
    case POST_USER_QUADRIGA_LOOKUP_ORDERS.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaLookUpOrders: false,
        quadrigaUserOrdersLookup: action.payload,
      };
    case POST_USER_QUADRIGA_LOOKUP_ORDERS.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaLookUpOrders: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_CANCEL_ORDERS.PENDING:
      return {
        ...state,
        isCancellingOrder: true,
      };
    case POST_USER_QUADRIGA_CANCEL_ORDERS.SUCCESS:
      return {
        ...state,
        isCancellingOrder: false,
        quadrigaUserCancelOrder: action.payload,
      };
    case POST_USER_QUADRIGA_CANCEL_ORDERS.ERROR:
      return {
        ...state,
        isCancellingOrder: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_BUY_AT_PRICE.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaBuyAt: true,
      };
    case POST_USER_QUADRIGA_BUY_AT_PRICE.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaBuyAt: false,
        quadrigaUserBuyAt: action.payload,
      };
    case POST_USER_QUADRIGA_BUY_AT_PRICE.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaBuyAt: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_BUY_ORDER_MARKET.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaBuyMarket: true,
      };
    case POST_USER_QUADRIGA_BUY_ORDER_MARKET.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaBuyMarket: false,
        quadrigaUserBuyMarket: action.payload,
      };
    case POST_USER_QUADRIGA_BUY_ORDER_MARKET.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaBuyMarket: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_SELL_LIMIT.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaSellLimit: true,
      };
    case POST_USER_QUADRIGA_SELL_LIMIT.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaSellLimit: false,
        quadrigaUserSellLimit: action.payload,
      };
    case POST_USER_QUADRIGA_SELL_LIMIT.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaSellLimit: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_SELL_MARKET.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaSellMarket: true,
      };
    case POST_USER_QUADRIGA_SELL_MARKET.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaSellMarket: false,
        quadrigaUserSellMarket: action.payload,
      };
    case POST_USER_QUADRIGA_SELL_MARKET.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaSellMarket: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_BITCOIN_WALLET.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinWallet: true,
      };
    case POST_USER_QUADRIGA_BITCOIN_WALLET.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinWallet: false,
        quadrigaUserBitcoinWallet: action.payload.res,
        userWallets: [...state.userWallets, action.payload.address]

      };
    case POST_USER_QUADRIGA_BITCOIN_WALLET.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinWallet: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_BITCOIN_WALLET_WITHDRAW.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinWithdraw: true,
      };
    case POST_USER_QUADRIGA_BITCOIN_WALLET_WITHDRAW.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinWithdraw: false,
        quadrigaUserWalletWithdraw: action.payload,
      };
    case POST_USER_QUADRIGA_BITCOIN_WALLET_WITHDRAW.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinWithdraw: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_ETHER_WALLET.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaEtherWallet: true,
      };
    case POST_USER_QUADRIGA_ETHER_WALLET.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaEtherWallet: false,
        quadrigaUserEtherWallet: action.payload.res,
        userWallets: [...state.userWallets, action.payload.address]
      };
    case POST_USER_QUADRIGA_ETHER_WALLET.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaEtherWallet: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_ETHER_WALLET_WITHDRAW.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaEtherWalletWithdraw: true,
      };
    case POST_USER_QUADRIGA_ETHER_WALLET_WITHDRAW.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaEtherWalletWithdraw: false,
        quadrigaUserWalletWithdraw: action.payload,
      };
    case POST_USER_QUADRIGA_ETHER_WALLET_WITHDRAW.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaEtherWalletWithdraw: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_BITCOIN_CASH_WALLET.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinCashWallet: true,
      };
    case POST_USER_QUADRIGA_BITCOIN_CASH_WALLET.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinCashWallet: false,
        quadrigaUserBitcoinCashWallet: action.payload.res,
        userWallets: [...state.userWallets, action.payload.address]
      };
    case POST_USER_QUADRIGA_BITCOIN_CASH_WALLET.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinCashWallet: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_BITCOIN_CASH_WALLET_WITHDRAW.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinCashWalletWithdraw: true,
      };
    case POST_USER_QUADRIGA_BITCOIN_CASH_WALLET_WITHDRAW.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinCashWalletWithdraw: false,
        quadrigaUserWalletWithdraw: action.payload,
      };
    case POST_USER_QUADRIGA_BITCOIN_CASH_WALLET_WITHDRAW.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinCashWalletWithdraw: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_BITCOIN_GOLD_WALLET.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinGoldWallet: true,
      };
    case POST_USER_QUADRIGA_BITCOIN_GOLD_WALLET.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinGoldWallet: false,
        quadrigaUserBitcoinGoldWallet: action.payload.res,
        userWallets: [...state.userWallets, action.payload.address]
      };
    case POST_USER_QUADRIGA_BITCOIN_GOLD_WALLET.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinGoldWallet: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_BITCOIN_GOLD_WALLET_WITHDRAW.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinGoldWalletWithdraw: true,
      };
    case POST_USER_QUADRIGA_BITCOIN_GOLD_WALLET_WITHDRAW.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinGoldWalletWithdraw: false,
        quadrigaUserWalletWithdraw: action.payload,
      };
    case POST_USER_QUADRIGA_BITCOIN_GOLD_WALLET_WITHDRAW.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaBitcoinGoldWalletWithdraw: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_LITECOIN_WALLET.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaLitecoinWallet: true,
      };
    case POST_USER_QUADRIGA_LITECOIN_WALLET.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaLitecoinWallet: false,
        quadrigaUserLitecoinWallet: action.payload.res,
        userWallets: [...state.userWallets, action.payload.address]
      };
    case POST_USER_QUADRIGA_LITECOIN_WALLET.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaLitecoinWallet: false,
        error: action.payload,
      };
    case POST_USER_QUADRIGA_LITECOIN_WALLET_WITHDRAW.PENDING:
      return {
        ...state,
        isGettingUserQuadrigaLitecoinWalletWithdraw: true,
      };
    case POST_USER_QUADRIGA_LITECOIN_WALLET_WITHDRAW.SUCCESS:
      return {
        ...state,
        isGettingUserQuadrigaLitecoinWalletWithdraw: false,
        quadrigaUserWalletWithdraw: action.payload,
      };
    case POST_USER_QUADRIGA_LITECOIN_WALLET_WITHDRAW.ERROR:
      return {
        ...state,
        isGettingUserQuadrigaLitecoinWalletWithdraw: false,
        error: action.payload,
      };
    case SET_TRADING_BOOK.SUCCESS:
      return {
        ...state,
        tradingBook: action.payload,
      };
    case SIGN_OUT_ACCOUNT.SUCCESS:
      return {
        ...initialState
      };
    case MODULE_BUTTON_STATE_CHANGE.SUCCESS:
      return {
        ...state,
        isModuleButtonPressed: !state.isModuleButtonPressed,
      };
    case MODULE_BUTTON_STATE_CHANGE_RESET.SUCCESS:
      return {
        ...state,
        isModuleButtonPressed: false,
      };
    default:
      return state;
  }
};
