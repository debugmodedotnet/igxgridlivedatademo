export interface TradeBlotterFXEntity {
    TradeId: number;
    TradeDate: string;
    EffectiveDate: string;
    DealType: string;
    BaseCurrency: string;
    BaseAmount: number;
    SecondaryCurrency: string;
    SecondaryAmount: number;
    Rate: number;
    PnL: number;
    Counterparty: string;
    MaturityDate: string;
    Trader: string;
    Status: string;
}
