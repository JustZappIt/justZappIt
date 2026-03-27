// SPDX-License-Identifier: AGPL-3.0-only

/**
 * Payment systems supported by the JustZappIt facilitator network.
 * Must stay in sync with the Android app's PaymentSystem enum.
 */
export const PAYMENT_SYSTEMS = [
  "Alipay",
  "DuitNow",
  "PayMe",
  "Pix",
  "PromptPay",
  "QRIS",
  "SGQR",
  "UPI",
  "WeChat Pay",
  "ZaloPay",
  "Other",
] as const;

export type PaymentSystem = (typeof PAYMENT_SYSTEMS)[number];
