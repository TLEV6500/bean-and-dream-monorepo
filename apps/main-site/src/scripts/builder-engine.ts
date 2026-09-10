/**
 * Pricing Configuration for Bean & Dream Package Builder
 */
export const PRICING_CONFIG = {
  tiers: {
    essential: {
      name: "The Essential Cart",
      pricePerGuest: 15,
    },
    premium: {
      name: "The Alchemist's Suite",
      pricePerGuest: 25,
    },
  },
  addons: {
    "single-origin": {
      name: "Single-Origin Reserve",
      pricePerGuest: 5,
      isPerGuest: true,
    },
    "bespoke-branding": {
      name: "Bespoke Branding",
      flatPrice: 200,
      isPerGuest: false,
    },
  },
} as const;

export type TierId = keyof typeof PRICING_CONFIG.tiers;
export type AddonId = keyof typeof PRICING_CONFIG.addons;

export interface BuilderState {
  guestCount: number;
  tierId: TierId;
  selectedAddons: Set<AddonId>;
}

export function calculateEstimate(state: BuilderState) {
  const { guestCount, tierId, selectedAddons } = state;
  
  const tierPrice = PRICING_CONFIG.tiers[tierId].pricePerGuest * guestCount;
  
  let addonPrice = 0;
  const details: { name: string; cost: number }[] = [];

  // Add base tier to details
  details.push({ 
    name: PRICING_CONFIG.tiers[tierId].name, 
    cost: tierPrice 
  });

  // Calculate add-ons
  selectedAddons.forEach((addonId) => {
    const addon = PRICING_CONFIG.addons[addonId];
    const cost = addon.isPerGuest 
      ? addon.pricePerGuest * guestCount 
      : addon.flatPrice;
    
    addonPrice += cost;
    details.push({ name: addon.name, cost });
  });

  return {
    total: tierPrice + addonPrice,
    tierCost: tierPrice,
    addonCost: addonPrice,
    details,
  };
}
